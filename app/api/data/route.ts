import { NextResponse } from "next/server";

const subjects = ["The dog", "The turtle", "My friend", "Sebastian "]
const predicates = ["runs fast", "is very wise", "loves coding", "sings poorly"]

interface RequestBody {
    newSubject: string;
    newPredicate: string;
}

export async function GET() {
    const subject = randomValue(subjects);
    const predicate = randomValue(predicates)

    let finalSubject = subject
    let finalPredicate = predicate

    if (subject.length > 8) {
        finalSubject = `${subject.trim()} the intelligent`
    }

    if (predicate.includes('coding')) {
        finalPredicate = `${predicate}!`
    }

    const completeSentence = `${finalSubject} ${finalPredicate}`
    return NextResponse.json({ completeSentence })

}

export async function POST(req: Request) {
    try {
        const body: RequestBody = await req.json();

        const { newSubject, newPredicate } = body;

        if (!newSubject || !newPredicate) {
            return NextResponse.json(
                { error: "Both 'newSubject' and 'newPredicate' are required." },
                { status: 400 }
            )
        }

        subjects.push(newSubject)
        predicates.push(newPredicate)

        return NextResponse.json({
            message: "Values added sucessfully",
            subjects,
            predicates
        })

    } catch {
        return NextResponse.json(
            { error: "Both 'newSubject' and 'newPredicate' are required." },
            { status: 400 }
        )
    }
}

function randomValue(arrray: string[]) {
    const randomItem = Math.floor(Math.random() * arrray.length)
    return arrray[randomItem]
}