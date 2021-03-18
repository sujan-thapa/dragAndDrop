console.log('this is about drag and drop stuff');

// const imgBox = document.querySelector('.imgBox');
// const whiteBox = document.getElementsByClassName('whiteBox');


// // Event listeners for draggable element imgBox
// imgBox.addEventListener('dragstart', (e) => {
//     console.log('drag start has been started');
//     e.target.className += ' hold';
//     setTimeout(() =>{
//         e.target.className += ' hide';

//     } )

// })

// imgBox.addEventListener('dragend', (e) => {
//     console.log('drag end has been started');
//     e.target.className = 'imgBox';


// })

// for (whiteBox of whiteBoxes){
//     whiteBox.addEventListener('dragover', (e) =>{
//         e.preventDefault();
//         console.log('drag over has been started');


//     })
//     whiteBox.addEventListener('dragenter', () => {
//         console.log('drag enter has been started');
//         e.target.append('imgBox');


//     })
//     whiteBox.addEventListener('dragleave', () => {
//         console.log('drag leave has been started');


//     })
//     whiteBox.addEventListener('drop', () => {
//         console.log('drag drop has been started');


//     })
// }

console.log('This is drag and drop utility');

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

// Event listeners for draggable element imgBox
imgBox.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);

});

imgBox.addEventListener('dragend', (e) => {
    console.log('DragEnd has been triggered');
    e.target.className = 'imgBox';
});

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('DragOver has been triggered');
    });

    whiteBox.addEventListener('dragenter', (e) => {
        console.log('DragEnter has been triggered');
        e.target.className += ' dashed';
    })

    whiteBox.addEventListener('dragleave', (e) => {
        console.log('DragLeave has been triggered');
        e.target.className = 'whiteBox'
    })

    whiteBox.addEventListener('drop', (e) => {
        console.log('Drop has been triggered');
        e.target.append(imgBox);
    })
}
