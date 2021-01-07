{
    "jokes": [
#     {
#         "id": 1,
#         "question": "Jaki jest ulubiony horror frontendowców?",
#         "answer": "Freddy kontra JSON"
#     },
    ]
}


questions = []
answers = []
jokes = []
id = 1


with open("suchary_sorted.txt", "r") as fp:
    lines = fp.readlines()
    for line in lines:
        sucharek = line.split(';')
        question = str(sucharek[0]).strip()
        question = question[0].upper() + (question[1:])
        answer = str((sucharek[1].replace('\n', ''))).strip()
        answer = answer[0].upper() + answer[1:]
        such = f'"id":{id},"question": "{question}", "answer": "{answer}"'


        if (id!= len(lines)):
            such = '{'+such+'},'
        else:
            such = '{'+such+'}'

        jokes.append(such)
        # print(such)
        id = id + 1

with open("suchary_json.json", "w") as fp:
    fp.write('{"jokes": [')
    for joke in jokes:
        fp.write(joke)
    fp.write(']}')


# print(questions)
# print(answers)