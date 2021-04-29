function checkCrash(obj1, obj2) {
    let lef1 = obj1.x;
    let right1 = obj1.x + obj1.width;
    let top1 = obj1.y;
    let bottom1 = obj1.y + obj1.height;
    let lef2 = obj2.x;
    let right2 = obj2.x + obj2.width;
    let top2 = obj2.y;
    let bottom2 = obj2.y + obj2.height;
    if (lef1 > right2 || right1 < lef2 || top1 > bottom2 || bottom1 < top2) {
        return false;
    } else {
        return true;
    }
}
// function checkPlayer2Blood() {
//     for (let i = 0 ; i < play1.weapon.length;i++){
//
//             if (checkCrash(play1.weapon[i],play2)){
//                 play2.blood--;
//                 // play1.weapon.splice(i,1);
//                 break;
//             }
//
//     }
// }
// function checkPlayer2Alive() {
//     for (let i = 0; i < play1.weapon.length; i++) {
//         if (play2.checkBlood()) {
//             if (checkCrash(play2,play1.weapon[i] )) {
//                 play2.blood --;
//                 break;
//             }
//         }
//
//     }
// }