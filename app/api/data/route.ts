    import { NextResponse } from "next/server";

    const subjects = ["The dog", "The turtle", "My friend", "Sebastian "]
    const predicates = ["runs fast", "is very wise", "loves coding", "sings poorly"]

    export async function GET() {
        const subject = randomValue(subjects);
        const predicate = randomValue(predicates)

        let finalSubject = subject
        let finalPredicate = predicate

        if(subject.length > 8) {
            finalSubject = `${subject.trim()} the intelligent`
        }

        if(predicate.includes('coding')) {
            finalPredicate = `${predicate}!`
        }

        const completeSentence = `${finalSubject} ${finalPredicate}`
        return NextResponse.json({ completeSentence })
        
    }

    function randomValue(arrray: string[] ) {
        const randomItem = Math.floor(Math.random() * arrray.length)
        return arrray[randomItem]
    }