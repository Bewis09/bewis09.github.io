import os
import ast
import math
import traceback
import random
from time import sleep

script_directory = os.path.dirname(os.path.abspath(__file__))

true = True
false = False

jumpers = ["repeat","if"]

def getDefaultVars():
    return [[
        ["false",0],
        ["true",1],
        ["pi",3.14159265358979323],
        ["eulersNumber",2.718281828459]
    ]]

def inputText(text,f,functions,content):
    try:
        if(len(text)==0):
            t = input()
        else:
            t = input("\033[1;33m[INPUT]\033[0m "+text[0].replace("\"","")+": ")
        return float(t)
    except Exception:
        return 0
    
def executeDefinedFunction(text,f,functions,content):
    index = f[3]+1
    vars = getDefaultVars()
    
    i = -1
    for a in f[2]:
        i+=1
        vars[0].append([a,text[i]])

    while(content[index].lstrip().rstrip()!="~"):
        if(content[index].lstrip().split(" ")[0]=="return"):
            d = define(content[index].lstrip()[7:].lstrip(),vars,functions,content)
            return d
        index = executeLine(content[index].lstrip().rstrip(),content,index,vars,functions)
    
    return 0

def printOut(text,f,functions,content):
    print("\033[1;32m[PRINT]\033[0m "+str(text[0]).replace("\"",""))

def exitWithZero(code,f,functions,content):
    if(code[0]==""):
        exit("\033[1;31m[programm stopped]\033[0m")
    else:
        exit("\033[1;31m[programm stopped]\033[0m Message: "+code[0].replace("\"",""))

def sine(val,f,functions,content):
    return int(math.sin(val[0])*10000000000)/10000000000

def cosine(val,f,functions,content):
    return int(math.cos(val[0])*10000000000)/10000000000

def tan(val,f,functions,content):
    return int(math.tan(val[0])*10000000000)/10000000000

def charAt(val,f,functions,content):
    return val[0][int(val[1])]

def randomR(val,f,functions,content):
    return random.random()

def roundR(val,f,functions,content):
    return round(float(val[0]))

def equals(val,f,functions,content):
    return 1 if val[0]==val[1] else 0

def logR(val,f,functions,content):
    return math.log(float(val[1]),float(val[0]))

def mod(val,f,functions,content):
    return (val[0])%val[1]

def wait(val,f,functions,content):
    sleep(float(val[0]))

def roundTo(val,f,functions,content):
    return round(float(val[0])*math.pow(10,int(val[1])))/math.pow(10,int(val[1]))

def execute(file):
    try:
        content = getFileContent(script_directory+"/"+file).split("\n")
        vars = getDefaultVars()
        functions = [
            ["print",printOut],
            ["stop",exitWithZero],
            ["input",inputText],
            ["sin",sine],
            ["cos",cosine],
            ["tan",tan],
            ["charAt",charAt],
            ["random",randomR],
            ["round",roundR],
            ["equals",equals],
            ["log",logR],
            ["mod",mod],
            ["roundTo",roundTo],
            ["wait",wait]
        ]

        index = 0

        while(index < len(content)):
            index = executeLine(content[index].lstrip().rstrip(), content, index, vars, functions)
    except Exception as e:
        traceback.print_exc()

def isOtherChar(central, sm, index):

    if index != -1:
        last = None
        if index - 1 >= 0:
            last = central[index - 1]
        next = None
        if index + len(sm) < len(central):
            next = central[index + len(sm)]
        if (last != None):
            if(last.isalnum()):
                return true
        
        if (next != None):
            if(next.isalnum()):
                return true

    return false

def isFunction(central, sm, index):

    try:
        if index != -1:
            next = central[(index + len(sm)):].lstrip()[0] if index + len(sm) < len(central) else None
            if (next != None):
                if(next=="("):
                    return true
    except Exception:
        return false

    return false

def evaluate_expression(expression):
    try:
        parsed_expression = ast.parse(expression, mode='eval')
        result = eval(compile(parsed_expression, filename='<string>', mode='eval'))
        return result
    except Exception:
        return "Expression invalid"
    
def replaceIOccurence(original_string, target_substring, replacement, index):

    if(index>-1):
        original_string = (
            original_string[:index] +
            replacement +
            original_string[index + len(target_substring):]
        )

    return original_string

def isInt(s):
    try:
        int(s)
        return True
    except ValueError:
        return False

def define(definition, vars, functions, content):
    fshuf = definition

    if(definition.lstrip().rstrip()==""):
        return ""

    if("\"" in definition):
        argst = [""]
        pat = 0
        pt = 0
        t = 1
        i = 0
        bl = true
        bl2 = false
        for char in definition.lstrip().rstrip():
            i+=1
            if((char=="\"") & (pt==0)):
                pt+=1
                if(pat==0):
                    bl2 = true
            if((char=="\"") & (pt==1)):
                pt-=1
            if((char=="(") & (pt==0)):
                pat+=1
                if(t!=0):
                    if(i!=1):
                        t+=1
                else:
                    bl = false
            if((char==")") & (pt==0)):
                pat-=1
                t-=1
            if((char=="+") & (pat == 0) & (pt == 0)):
                argst.append("")
            else:
                argst[len(argst)-1]=argst[len(argst)-1]+char
        value = ""

        if(bl2==false):

            g = definition.split("(")[0].rstrip().lstrip()

            fs = None
            for f in functions:
                if(g==f[0]):
                    fs = f

            if(fs!=None):
                p = giveFunction(definition,vars,functions,content,fs)
                return p

        if((bl) & (t == 0) & (definition.lstrip()[0]=="(") & (definition.rstrip()[len(definition.rstrip())-1]==")")):
            r = define(definition.lstrip().rstrip()[1:][:-1],vars,functions,content)
            return r
        if((len(argst)==1) & (argst[0].lstrip().rstrip()[0]=="\"")):
            return argst[0]
        for a in argst:
            z = str(define(a,vars,functions,content)).replace("\"","")
            value = value + z
        return "\"" + value + "\"" 
    for v in vars:
        for s in v:
            d = definition
            dif = 0
            for _ in get_occurrences(definition,s[0]):
                if((isOtherChar(definition,s[0],_)==false) & (isFunction(definition,s[0],_)==false)):
                    z = len(d)
                    d = replaceIOccurence(d,s[0],str(s[1]),_-dif)
                    dif += z-len(d)
            definition = d
        
            if("\"" in definition):
                return define(definition,vars,functions,content)
    for f in functions:
        definition = giveFunction(definition,vars,functions,content,f)
    return evaluate_expression(definition.lstrip().rstrip())

def get_occurrences(main_string, substring):
    return [i for i in range(len(main_string)) if main_string.startswith(substring, i)]

def isValidName(name):
    return name.isalnum()

def giveFunction(definition, vars, functions, content, f):
    d = definition
    dif = 0
    for _ in get_occurrences(definition,f[0]):
        if((isOtherChar(definition,f[0],_)==false) & (isFunction(definition,f[0],_))):
            sfterm = definition[_:].replace(f[0],"",1)[len(definition[_:].replace(f[0],"",1).split("(")[0]):].lstrip().rstrip()
            pat = -1   
            argsstr = ""   
            fterm = ""
            _i = 0
            for char in sfterm:
                _i+=1
                if(char=="("):
                    pat+=1
                if(char==")"):
                    pat-=1
                    if(pat==-1):
                        break
                if(_i!=1 & _i!=len(sfterm)):
                    argsstr=argsstr+char
                
            for char in definition[_:]:
                fterm=fterm+char
                if(char=="("):
                    pat+=1
                elif(char==")"):
                    pat-=1
                    if(pat==-1):
                        break
            args = [""]
            pat = 0
            for char in argsstr:
                if(char=="("):
                    pat+=1
                if(char==")"):
                    pat-=1
                    if(pat==-1):
                        break
                if((char==",") & (pat == 0)):
                    args.append("")
                else:
                    args[len(args)-1]=args[len(args)-1]+char
            fArgs = []
            for arg in args:
                fArgs.append(define(arg,vars,functions,content))
            z = len(d)
            d = replaceIOccurence(d,fterm,str(f[1](fArgs,f,functions,content)),_-dif)
            dif += z-len(d)
    definition = d
    if("\"" in definition):
        return define(definition,vars,functions,content)
    return definition

def executeLine(line, content, index, vars, functions):

    if(len(line)>1):
        if((line[0]=="#")):
            return index+1

    if(line.split("(")[0].rstrip().lstrip()=="repeat"):
        arg = int(define(line.replace(line.split("(")[0].rstrip().lstrip(),"",1).replace("(","",1).lstrip().rstrip()[:-1],vars,functions,content))
        startI = index
        for _ in range(arg):
            index=startI+1
            while(content[index].lstrip().rstrip()!="~"):
                index = executeLine(content[index].lstrip().rstrip(),content,index,vars,functions)
        if(arg==0):
            z = 1
            while(z!=0):
                index+=1
                if(content[index].split("(")[0].rstrip().lstrip() in jumpers):
                    z+=1
                if(content[index].lstrip().rstrip()=="~"):
                    z-=1

        return index+1

    if(line.split("(")[0].rstrip().lstrip()=="if"):
        arg = define(line.replace(line.split("(")[0].rstrip().lstrip(),"",1).replace("(","",1).lstrip().rstrip()[:-1],vars,functions,content)
        startI = index
        if(int(arg)>0):
            index=startI+1
            while(content[index].lstrip().rstrip()!="~"):
                index = executeLine(content[index].lstrip().rstrip(),content,index,vars,functions)
        else:
            z = 1
            while(z!=0):
                index+=1
                if(content[index].split("(")[0].rstrip().lstrip() in jumpers):
                    z+=1
                if(content[index].lstrip().rstrip()=="~"):
                    z-=1

        return index+1
    
    if(line.split(" ")[0]=="def"):
        name = line.split(" ")[1].split("(")[0]
        if(name.isalnum()):
            args = line[3:].lstrip().replace(name,"",1).lstrip().replace("(","",1).replace(")","",1).split(",")
            arg = []
            for a in args:
                arg.append(a.lstrip().rstrip())
            functions.append([name,executeDefinedFunction,arg,index])
        z = 1
        while(z!=0):
            index+=1
            if(content[index].split("(")[0].rstrip().lstrip() in jumpers):
                z+=1
            if(content[index].lstrip().rstrip()=="~"):
                z-=1
        return index+1
    
    if(line.split(" ")[0]=="import"):
        importFiles = []
        for file in importFiles:
            if(file[0]):
                file[1](functions)
                return index+1
        return index+1

    if((" " in line.split("(")[0].rstrip()) == false & isFunction(line,line.split("(")[0].rstrip(),0)):
        for f in functions:
            if(f[0]==line.split("(")[0].rstrip()):
                args = [""]
                argsstr = (line.replace(line.split("(")[0],"",1)[1:].rstrip()[:-1])
                pat = 0
                for char in argsstr:
                    if(char=="("):
                        pat+=1
                    if(char==")"):
                        pat-=1
                    if((char==",") & (pat == 0)):
                        args.append("")
                    else:
                        args[len(args)-1]=args[len(args)-1]+char
                fArgs = []
                for arg in args:
                    fArgs.append(define(arg,vars,functions,content))
                f[1](fArgs,f,functions,content)

    if("=" in line):
        varname = line.split("=")[0].lstrip().rstrip()
        if(isValidName(varname)):
            definition = line.split("=")[1].lstrip().rstrip()
            value = define(definition,vars, functions,content)
            if(define(varname,vars,functions,content)=="Expression invalid"):
                vars[len(vars)-1].append([varname,value])
            else:
                for v in vars:
                    for s in v:
                        if(s[0]==varname):
                            s[1]=value
            return index+1
    return index+1

def getFileContent (path):
    try:
        with open(path, 'r') as file:
            content = file.read()
            return decode(content)
    except Exception:
        print("Reading Failed")

def decode(content):
    content = content.replace("du wisser","~").replace("mak mal","def").replace("*schlaegt noch","repeat(").replace("mal*",")").replace("du bist inkompetent","stop()").replace("*schlaegt zurueck*","return").replace("sein tun","=").replace("*wartet auf Anna-Karina","wait(")
    content = content.replace("groesser als null ist, dann schlag ich dich",")").replace("wenn","if(").replace("*labert","print(").replace("was aber keinen sinn macht*",")").replace("sag mal","input(").replace("sonst schlag ich dich",")").replace("Sekunden lang, weil sie zu langsam ist*",")")
    return content

execute("script.ems")