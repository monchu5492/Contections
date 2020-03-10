# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
u1 = User.create(user_name: "monchu1", name: "tanner", bio: "i, am, job", address: "1435 regat st. 487262 asdhre", profile_pic: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80", password: "fudgemuffin")
u2 = User.create(user_name: "jamsen435", name: "mark", bio: "dsfxghjgfdhadsfg", address: "8743 kjdsfg 78394 dsfkjf", profile_pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", password: "joopie")

e1 = Event.create(name: "the real deal", picture: "https://images.pexels.com/photos/1227520/pexels-photo-1227520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", links: "adfgadfgadfg", description: "adrfgadrgaregaerg", address: "sdfgsdfgafdadg", user_id: 1)
e2 = Event.create(name: "crazy train", picture: "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", links: "adfgadfgadfg", description: "adrfgadrgaregaerg", address: "sdfgsdfgafdadg", user_id: 1)
e3 = Event.create(name: "nothin big", picture: "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", links: "adfgadfgadfg", description: "adrfgadrgaregaerg", address: "sdfgsdfgafdadg", user_id: 1)
e4 = Event.create(name: "this takes too long", picture: "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", links: "adfgadfgadfg", description: "adrfgadrgaregaerg", address: "sdfgsdfgafdadg", user_id: 1)
e5 = Event.create(name: "why didnt i do this first", picture: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", links: "adfgadfgadfg", description: "adrfgadrgaregaerg", address: "sdfgsdfgafdadg", user_id: 1)
e6 = Event.create(name: "no regerts", picture: "https://images.pexels.com/photos/1531677/pexels-photo-1531677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", links: "adfgadfgadfg", description: "adrfgadrgaregaerg", address: "sdfgsdfgafdadg", user_id: 1)
e7 = Event.create(name: "need to find a job?", picture: "https://images.pexels.com/photos/544268/pexels-photo-544268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", links: "adfgadfgadfg", description: "adrfgadrgaregaerg", address: "sdfgsdfgafdadg", user_id: 1)
e8 = Event.create(name: "i cant think of much more", picture: "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", links: "adfgadfgadfg", description: "adrfgadrgaregaerg", address: "sdfgsdfgafdadg", user_id: 2)
e9 = Event.create(name: "i have no idea what to write", picture: "https://images.pexels.com/photos/810036/pexels-photo-810036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", links: "adfgadfgadfg", description: "adrfgadrgaregaerg", address: "sdfgsdfgafdadg", user_id: 2)
e10 = Event.create(name: "someone come help me", picture: "https://images.pexels.com/photos/719609/pexels-photo-719609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", links: "adfgadfgadfg", description: "adrfgadrgaregaerg", address: "sdfgsdfgafdadg", user_id: 2)
e11 = Event.create(name: "can anyone hear me?", picture: "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", links: "adfgadfgadfg", description: "adrfgadrgaregaerg", address: "sdfgsdfgafdadg", user_id: 2)
e12 = Event.create(name: "this was a big mistake", picture: "https://images.pexels.com/photos/1106452/pexels-photo-1106452.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", links: "adfgadfgadfg", description: "adrfgadrgaregaerg", address: "sdfgsdfgafdadg", user_id: 2)
e13 = Event.create(name: "whyyyyyyyyyyyyy", picture: "https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", links: "adfgadfgadfg", description: "adrfgadrgaregaerg", address: "sdfgsdfgafdadg", user_id: 2)
e14 = Event.create(name: "almost done", picture: "https://images.pexels.com/photos/255441/pexels-photo-255441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", links: "adfgadfgadfg", description: "adrfgadrgaregaerg", address: "sdfgsdfgafdadg", user_id: 2)
e15 = Event.create(name: "just two more left", picture: "https://images.pexels.com/photos/924633/pexels-photo-924633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", links: "adfgadfgadfg", description: "adrfgadrgaregaerg", address: "sdfgsdfgafdadg", user_id: 2)
e16 = Event.create(name: "ok this was the last one", picture: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", links: "adfgadfgadfg", description: "adrfgadrgaregaerg", address: "sdfgsdfgafdadg", user_id: 2)

ue1 = JoinEvent.create(user_id: 2, event_id: 1)
ue1 = JoinEvent.create(user_id: 2, event_id: 2)
ue1 = JoinEvent.create(user_id: 2, event_id: 3)
ue1 = JoinEvent.create(user_id: 2, event_id: 4)
ue1 = JoinEvent.create(user_id: 2, event_id: 5)
ue1 = JoinEvent.create(user_id: 2, event_id: 6)
ue1 = JoinEvent.create(user_id: 2, event_id: 7)
ue1 = JoinEvent.create(user_id: 1, event_id: 8)
ue1 = JoinEvent.create(user_id: 1, event_id: 9)
ue1 = JoinEvent.create(user_id: 1, event_id: 10)
ue1 = JoinEvent.create(user_id: 1, event_id: 11)
ue1 = JoinEvent.create(user_id: 1, event_id: 12)
ue1 = JoinEvent.create(user_id: 1, event_id: 13)
ue1 = JoinEvent.create(user_id: 1, event_id: 14)
ue1 = JoinEvent.create(user_id: 1, event_id: 15) 
ue1 = JoinEvent.create(user_id: 1, event_id: 16) 

