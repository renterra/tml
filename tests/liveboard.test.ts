import { parseLiveboard, renderLiveboard } from "../src/liveboard";
import fs from 'fs';
import path from 'path';

test('can parse answer', () => {    
    const raw = fs.readFileSync(path.resolve(__dirname, '__data__/liveboard.tml'), 'utf8');
    const live = parseLiveboard(raw)

    expect(live.guid).toBe("74852035-9624-4fac-b352-200fa8506b14");
    expect(live.liveboard.name).toBe("Object Usage");
    expect(live.liveboard.visualizations[0].id).toBe("Viz_1");
    expect(live.liveboard.visualizations[0].answer.description).toBe("count of events for each table");
});


// test('can parse and render', () => {    
//     const raw = fs.readFileSync(path.resolve(__dirname, '__data__/liveboard.tml'), 'utf8');
//     const answer = parseLiveboard(raw)    
//     const renderedAnswer = renderLiveboard(answer)
//     expect(raw).toBe(renderedAnswer);    
// });
