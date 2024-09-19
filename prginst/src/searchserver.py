from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__)

def parse_scoop_output(output):
    commands = []
    lines = output.splitlines()
    for line in lines[3:]:  # Skip header lines
        # Skip lines with only dashes
        if set(line.strip()) == {'-'}:
            continue
        parts = line.split()
        if len(parts) < 4:
            continue
        binaries = ' '.join(parts[3:])  # Combine remaining parts for binaries
        commands.extend(binaries.split(' | '))
    return commands

@app.route('/search', methods=['POST'])
def search():
    data = request.get_json()
    query = data.get('query', '')
    if not query:
        return jsonify([])

    # Run the PowerShell command
    command = f'scoop search {query}'
    result = subprocess.run(["powershell", "-Command", command], capture_output=True, text=True)

    # Process the result
    parsed_commands = parse_scoop_output(result.stdout)
    return jsonify(parsed_commands)

if __name__ == '__main__':
    app.run(debug=True)
