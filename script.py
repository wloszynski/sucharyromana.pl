# sucharki = []

# with open("suchary.txt", "r") as fp:
#     Lines = fp.readlines()
#     for line in Lines:
#         sucharki.append(line)


# sucharki_rev = sucharki[::-1]


# with open("suchary_sorted.txt", "w") as fp:
#     for such in sucharki_rev:
#         fp.write(such)

questions = []
answers = []

with open("suchary_sorted.txt", "r") as fp:
    Lines = fp.readlines()
    for line in Lines:
        sucharek = line.split(';')
        questions.append(sucharek[0])
        answers.append(sucharek[1].replace('\n', ''))

# print(questions)
print(answers)