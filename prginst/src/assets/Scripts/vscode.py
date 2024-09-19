import subprocess
import sys
try:
        vsc = subprocess.Popen(
        [
            "powershell.exe", 
            "-noprofile", "-c",
            r"""
            Start-Process -Verb RunAs -Wait powershell.exe -Args "
            -noprofile -c Set-Location \`"$PWD\`"; & .\\src\\assets\\Scripts\\vscode.ps1
            "
            """
        ],
        stdout=sys.stdout
        )
        vsc.communicate()
except subprocess.CalledProcessError as e:
    print(f"Failed to run the PowerShell script as administrator. Error: {e}")