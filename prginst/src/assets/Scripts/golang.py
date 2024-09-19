import subprocess
import sys
try:
        g = subprocess.Popen(
        [
            "powershell.exe", 
            "-noprofile", "-c",
            r"""
            Start-Process -Verb RunAs -Wait powershell.exe -Args "
            -noprofile -c Set-Location \`"$PWD\`"; & .\\src\\assets\\Scripts\\golang.ps1
            "
            """
        ],
        stdout=sys.stdout
        )
        g.communicate()
except subprocess.CalledProcessError as e:
    print(f"Failed to run the PowerShell script as administrator. Error: {e}")