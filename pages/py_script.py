import requests
#Adding the font icons
""" file = open("test_parts.txt", 'r')
cun = 0
description = ""
d_type = "FontAwesome"
for num, i in enumerate(file):
    if(i.startswith(" Example of")):
        name = i.replace(" Example of", '').replace('(alias)', '').strip()
        payload = dict(icon_name=name, description=description, type=d_type, )
        r = requests.post('http://localhost/ACES_OPEN_SOURCE/backend/icons/insert_icon.php', data=payload)
        print(r.text)
    else:
        description = i
        
    
        #print(attr_name + "-" + attr_applicable + "-" + attr_description + "\n")
    
        

#endpoint test
payload = dict(icon_name="Value 4", description="Value 2", type="type 1", )
r = requests.post('http://localhost/ACES_OPEN_SOURCE/backend/icons/insert_icon.php', data=payload)
print(r.text)
 """


#adding CSS Style

cun = 0
try:
    with open("css_styles.css", 'r') as file:
        for i in file:
            if "******" in i:
                two_men = i.split("******")
                d_style_name = two_men[0].strip()
                print()
                # print(d_style_name + " --- "+ two_men[1].strip() )
                cun = cun + 1
                d_type = "others"
                if (
                    "height" in d_style_name
                    or "width" in d_style_name
                    or "size" in d_style_name
                    or "radius" in d_style_name
                    or "margin" in d_style_name
                    or "padding" in d_style_name
                ):
                    d_type = "size"
                elif "color" in d_style_name:
                    d_type = "color"
                elif "image" in d_style_name:
                    d_type = "image"
                elif (
                    "display" in d_style_name
                    or "overflow" in d_style_name
                    or "position" in d_style_name
                    or "float" in d_style_name
                ):
                    d_type = "value"

                payload = dict(
                    style_name=d_style_name, type=d_type, description=two_men[1].strip()
                )
                r = requests.post(
                    "http://localhost/ACES_OPEN_SOURCE/backend/style/insert_style.php",
                    data=payload,
                    timeout=5,
                )
                print(r.text)
except FileNotFoundError:
    print("File not found. Please check the file path")
except requests.exceptions.RequestException as e:
    print(f"An error ocurred during the HTTP request: {e}")

print(cun)
#adding HTML TAGS
""" #Adding HTML elements
file = open("HTML elements.txt", 'r')
cun = 0
for i in file:
    list_elem = i.split('\t')
    elem_name = list_elem[0].replace('>', '').replace('<', '').replace('/', '')
    #print(elem_name + list_elem[1].strip())
    
    payload = dict(element_name=elem_name, element_description=list_elem[1].strip())
    r = requests.post('http://localhost/ACES_OPEN_SOURCE/backend/elements/insert_elements.php', data=payload)
    print(r.text)

#endpoint test
# payload = dict(element_name="Value 1", element_description="Value 2".strip())
# r = requests.post('http://localhost/ACES_OPEN_SOURCE/backend/elements/insert_elements.php', data=payload)
# print(r.text)
 """

#Adding Attributes
""" file = open("attributes.txt", 'r')
cun = 0
for num, i in enumerate(file):
    list_attr = i.split('\t')
    if(len(list_attr) == 3 or len(list_attr) == 4):
        attr_name = list_attr[0].strip()
        attr_applicable = list_attr[1].strip().replace('<', '').replace('>', '')
        attr_description = "".join(list_attr[2:]).strip()
        #print(attr_name + "-" + attr_applicable + "-" + attr_description + "\n")
        d_type = "others"
        if( "height" in attr_name or "width" in attr_name or "size" in attr_name or "radius" in attr_name or "margin" in attr_name or "padding" in attr_name ):
            d_type = "size"
        elif ("color" in attr_name):
            d_type = "color"
        elif ("image" in attr_name):
            d_type = "image"
        elif ("display" in attr_name or "overflow" in attr_name or "position" in attr_name or "float" in attr_name):
            d_type = "value"

        #print(attr_name + "-" + attr_applicable + "-" + attr_description + "\n")
    
        payload = dict(attr_name=attr_name, description=attr_description, type=d_type, applicable=attr_applicable, )
        r = requests.post('http://localhost/ACES_OPEN_SOURCE/backend/attribute/insert_attribute.php', data=payload)
        print(r.text)

#endpoint test
# payload = dict(attr_name="Value 4", description="Value 2", applicable="<html>, <php>, <css>", type="type 1", )
# r = requests.post('http://localhost/ACES_OPEN_SOURCE/backend/attribute/insert_attribute.php', data=payload)
# print(r.text)

 """