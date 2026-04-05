
Note: 

 (*maybe this part is wrongly noted avoid it*)position: Except for relative, If we set position attribute without specifying the width and height it will take space only upto the space needed for child not more than it .

For relative: it will move from it's previous position, and there will be gap , it flow mode algorithm 

For Absolute: it will move from the previous position attribute which absolute|relative|fixed and if none of them are set it will be moved from the viewport (browser window),

Fixed: always sets position with it's root element even if in the parent or previous element have any position value set unlike absolute. And it will not be scrollable.

--: Because of the fixed positioning, width: 100%; now means "make this element exactly as wide as the browser window." It no longer means 100% of the .grand_parent.

sticky: as far as the parent or the set position is in view the element will stick when scrolling . The position will take relative to the closest parent which has set scrolable (maybe expect for fixed). 

z-index: by default 0, the more i give value the more priority in terms of visibility



