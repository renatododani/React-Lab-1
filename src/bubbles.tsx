import { OrangeBubble } from "./colored-bubbles/orange-bubble";
import { PinkBubble } from "./colored-bubbles/pink-bubble";
import { PurpleBubble } from "./colored-bubbles/purple-bubble";

export function Bubbles() {
    return (
        <div className= 'circles-div'>
           <PinkBubble></PinkBubble>
           <PurpleBubble></PurpleBubble>
           <OrangeBubble></OrangeBubble>
        </div>
    )
}