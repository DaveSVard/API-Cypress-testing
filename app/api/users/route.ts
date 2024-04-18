import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

interface Context {
  params: undefined;
}

export async function GET(request: NextRequest, context: Context) {
  return NextResponse.json({
    data: [
      {
        id: 1,
        first_name: "Gabby",
        last_name: "Fist",
        email: "gfist0@weebly.com",
        age: 33,
      },
      {
        id: 2,
        first_name: "Tabby",
        last_name: "Meech",
        email: "tmeech1@blinklist.com",
        age: 13,
      },
      {
        id: 3,
        first_name: "Jessee",
        last_name: "Pargetter",
        email: "jpargetter2@reference.com",
        age: 23,
      },
      {
        id: 4,
        first_name: "Barby",
        last_name: "Winton",
        email: "bwinton3@china.com.cn",
        age: 52,
      },
      {
        id: 5,
        first_name: "Mariel",
        last_name: "Farnaby",
        email: "mfarnaby4@google.de",
        age: 77,
      },
      {
        id: 6,
        first_name: "Sheelagh",
        last_name: "Elsom",
        email: "selsom5@odnoklassniki.ru",
        age: 91,
      },
      {
        id: 7,
        first_name: "Annis",
        last_name: "Lincke",
        email: "alincke6@ucsd.edu",
        age: 84,
      },
      {
        id: 8,
        first_name: "Margo",
        last_name: "Gibling",
        email: "mgibling7@icq.com",
        age: 13,
      },
      {
        id: 9,
        first_name: "Zacharie",
        last_name: "Mill",
        email: "zmill8@tinyurl.com",
        age: 85,
      },
      {
        id: 10,
        first_name: "Sandro",
        last_name: "Deans",
        email: "sdeans9@geocities.com",
        age: 87,
      },
    ], 
  })
}
