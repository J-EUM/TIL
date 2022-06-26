# 월, 일 입력하면 1일후 월, 일을 출력(2019년기준)
month = int(input("월(month) 를 숫자로 입력해주세요: "))
day = int(input("일(day) 를 숫자로 입력해주세요: "))

## 아래 코드를 입력해주세요.

# 2월 28일-> month+1, day=1
# 30일 month 4,6,9,11-> month+=1 day=1
## 나머지 day+=1
# 31일-> month+1, day=1
## 12월 31일 -> month=1, day=1
#나머지 day+1

# if day == 28 and month == 2:
#   month += 1
#   day = 1
# elif day == 30:
#   if month in [4, 6, 9, 11]:
#     day = 1
#     month += 1
#   else:
#     day += 1
# elif day == 31:
#   day = 1
#   if month == 12:
#     month = 1
#   else:
#     month += 1
# else:
#   day += 1

# 원래 이렇게 했었는데 다른분 코드를 보고 수정을 해야겠다고 생각했다.
# 각 월이랑 날짜를 하나씩 생각하면서 계속 조건을 주니까 나도 이해할 수 없는 코드가 돼버렸다
# 그래서 결과를 기준으로 조건을 나누어서 생각했다.
# 다음날은 원래 +1일이니까 day에 +1하는경우 - 예외 빼고 다니까 else에 넣기,
# 말일인 경우 day=1, month+1을 해야하는데 말일이 각 월마다 달라서 모든 경우를 한 조건에 묶고
# 12월 31일만 month=1, day=1로 설정하면 돼서 조건 추가 간결하고 알아보기도 쉬워졌다...


# elif day == 31 and month == 12:
#   day = 1
#   month = 1

# month = 1 day = 1 되는거: 12/31
# month += 1, day = 1 되는거: 2/28, [4,6,9,11]/30 12빼고/31
# day += 1 되는거: day == 30 and month not in [4, 6, 9, 11], 나머지



if month == 12 and day == 31:
  month = 1
  day = 1
elif (month == 2 and day == 28) or (month in [4, 6, 9, 11] and day == 30) or (month != 12 and day == 31):
  month += 1
  day = 1
else:
  day += 1

print(month)
print(day)