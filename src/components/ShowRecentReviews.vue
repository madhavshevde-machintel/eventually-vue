<template>
    <div v-for="review in this.reviews" class="item">
        <div class="card-item-events hovercard review-hover-card" style="opacity: 1;">
            <div class="verified">
                <a href="#" class="btn-verified">Verified</a>
            </div>
            <div class="card-image-holder new-review-card">
                <div class="top-left">
                    <div class="">
                        <a href="#">
                            <img ID="userImage" loading="lazy" class="new-review-img" alt="ReviewerImage"
                                :src="review.userImage" />
                        </a>
                    </div>
                </div>
                <div class="top-right">
                    <a :href='review.reviewUrl' target="_blank">
                        <h6 class="new-review-title">
                            {{ review.userName }}
                        </h6>
                    </a>
                    <h6 class="new-review-sub-title">
                        {{ review.designation }}
                    </h6>
                    <div class="ratin-wrapper review-ratin-wrapper">
                        <div class="stars-wrapper">
                            <img v-for="index in review.filledStars" loading="lazy"
                                src="https://eventually.com/images/starfull.svg" alt="" class="star-icon review-start">
                            <img v-for="index in review.halfFilledStars" loading="lazy"
                                src="https://eventually.com/images/starHalf.svg" alt="" class="star-icon review-start">
                            <img v-for="index in review.emptyStars" loading="lazy"
                                src="https://eventually.com/images/starEmpty.svg" alt="" class="star-icon review-start">
                            <span class="review-small-text1">
                                {{ review.averageEventReviewRating }}/5
                            </span>
                        </div>
                    </div>
                    <div class="review-small-text">
                        {{ review.postedOnDescription }}
                    </div>
                </div>
            </div>
            <div class="card-content new-review-card-content">
                <div>
                    <a class="new-review-descr" :href='review.reviewUrl' target="_blank">
                        {{ review.answer }}
                    </a>
                </div>
                <div class="line-divider review-line-divider"></div>
                <div class="learning-hub-card-bottom-content">
                    <a href="#">
                        <img :src='review.organizerLogo' alt="OrganizerLogo" class="review-new-img"></a>
                    <div class="">
                        <a :href='review.eventUrl' target="_blank">
                            <h5 class="review-bottom-head">
                                {{ review.eventName }}
                            </h5>
                        </a>
                        <div class="review-small-text margin-top-five">
                            {{ review.eventStartDate }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            reviews: []
        }
    },
    emits : ['reviews-loaded'],
    inject : ['apiUrl'],
    props: {
        route: String
    },
    methods: {
        async fetchData() {
            let url = this.apiUrl + '/EventuallyHome/GetReviewsSlider?route=' + this.route;
            const response = await fetch(url);
            this.reviews = await response.json();
            this.$emit('reviews-loaded','reviews-loaded');
        },
    },
    mounted() {
        this.fetchData();
    }
}
</script>
