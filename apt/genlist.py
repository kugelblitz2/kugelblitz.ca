import os
import sys
import xml.etree.ElementTree as et
from subprocess import run

def getPackages(version):
   return str(run('reprepro list ' + version, shell=True, cwd='repo/', capture_output=True).stdout)[2:-1].splitlines()

def genList(paclist):
    repo = et.Element('repo')

    for i in range(len(paclist)):
        package = paclist[i].replace('|', ' ').replace(':', '')[0:-2].split()

        suite = et.SubElement(repo, 'suite')
        suite.text = package[0]

        component = et.SubElement(repo, 'component')
        component.text = package[1]

        arch = et.SubElement(repo, 'arch')
        arch.text = package[2]
        
        name = et.SubElement(repo, 'name')
        name.text = package[3].capitalize()

        version = et.SubElement(repo, 'version')
        version.text = package[4]

    if os.path.exists('./paclist.xml'):
        os.remove('./paclist.xml')
    
    exportfile = open('./paclist.xml', 'x')
    exportfile.write(str(et.tostring(repo))[2:-1])
    exportfile.write(str(et.tostring(et.Comment('El. Psy. Kongroo.')))[2:-1])
    exportfile.close()


if (len(sys.argv) == 2):
    genList(getPackages(str(sys.argv[1])))
    print('Done.')
else:
    print('Error - Invalid number of arguments')
