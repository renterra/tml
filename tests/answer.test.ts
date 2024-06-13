import { parseAnswer, renderAnswer } from "../src/answer";
import fs from 'fs';
import path from 'path';

test('can parse answer', () => {    
    const raw = fs.readFileSync(path.resolve(__dirname, '__data__/answer.tml'), 'utf8');
    const answer = parseAnswer(raw)

    expect(answer.guid).toBe("9864668a-0545-4d35-9e61-6425c80b2193");
    expect(answer.answer.name).toBe("Sample Event Tracing for Consumption (Change the Credit Window ID and the Timestamp)");
    expect(answer.answer.tables[0].id).toBe("Credit Usage Worksheet");
});


test('can parse and render', () => {    
    const raw = fs.readFileSync(path.resolve(__dirname, '__data__/answer.tml'), 'utf8');
    const answer = parseAnswer(raw)    
    const renderedAnswer = renderAnswer(answer)
    expect(raw).toBe(renderedAnswer);    
});
