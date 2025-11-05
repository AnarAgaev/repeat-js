'use strict'

/*
* Themes: Events .focus and .blur
*
*    
* Attentions - events FOCUS and BLUR aren't buble. Don't add listeners to the document
* For catch events on document use other events as focusin and focusout:
* focus === focusin
* blur === focusout
*    
*
*
* Use tabindex for add focus event to teh any html Element
* tabindex="0" --- browser same set order of focus html Element
* tabindex="1" --- add focus event
*
* Use tabindex for add ordering to the focusable elements
*
*
*
* 1. At the inspect mode, click on eye for turn on Expression mode into the Devtools
* 2. Print document.activeElement to the open input
* 3. Watch current focus element
*
* */


export default async function () {
	// For diligent use focusin and focusout (not focus and blur)
	document.addEventListener('focusin', console.log)
	document.addEventListener('focusout', console.log)
}