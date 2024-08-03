def convert(val):
   h,m = val.split(':')
   s = m[:-2]
   m = m[:2]
   if s == 'pm':
      h = int(h) + 12
      h = str(h)
   time = h + ":" + m

def difference(prev,cur):
   hdiff = he-hs
   mdiff = (60 - me) + ms
   diff = hdiff*60 + mdiff
   return diff

def getTime(val):
   start,end = val.split('-')
   convert(start)
   convert(end)
   hs,ms = start[:5].split(':')
   he,me = end[:5].split(':')
   he = int(he)
   hs = int(hs)
   ms = int(ms)
   me = int(me)

events = ["09:00am-10:00am", "11:30am-12:30pm", "02:00pm-03:00pm"] 
arr = []

for i in events:   
   getTime(i)
   diff = difference(prev,cur)
   arr.append(diff)
print(max(arr))