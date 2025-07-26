const writeReview = document.querySelector('.writeReview');
const inputReview = document.querySelector('.inputReview');
const submitReviewBtn = document.querySelector('.submitReviewBtn');

const title = document.querySelector('.title');
const description = document.querySelector('.description');
const productId = document.querySelector('.productId');

writeReview.addEventListener('click', () => {
    inputReview.classList.toggle('hide');
});

submitReviewBtn.addEventListener('click', async (ev) => {
    ev.preventDefault();
    const titleText = title.value.trim();
    const descriptionText = description.value.trim();
    const id = productId.value;

    if (!titleText || !descriptionText) return;

    inputReview.classList.add('hide');
    title.value = description.value = '';

    try {
        const response = await axios.post('/shop/submitreview', {
            title: titleText,
            description: descriptionText,
            productId: id
        });

        updateReviewList(response.data.reviews);
    } catch (error) {
        console.error(error);
    }
});

function updateReviewList(reviews) {
    const reviewsList = document.querySelector('.reviewsList');
    reviewsList.innerText = ''
    reviewsList.innerHTML = ''; // clear old reviews
    reviews.forEach(r => {
        const li = document.createElement('li');
        li.innerHTML = `<li class="reviewListItem">
                        <div class="reviewTitle">${r.title}</div>
                        <div class="reviewDescription">${r.description}</div>
                        <button class="deleteReview">
                        <a href="/deleteReview/id=${r._id}">Delete</a>
                        </button>
                    </li>`;
        reviewsList.appendChild(li);
    });
}
