<template>
    <div class="w-layout-grid events-grid-home append-events" runat="server" id="divEventGrid">
        <div v-for="x in eventData" :data-w-id="nodeDataWId" class="card-item-hovered">
            <div class="card-item-events">
                <div class="card-image-holder">
                    <img loading="lazy" :src='x.EventImage' alt="event-img" class="card-image" width="100%" height="100%">
                </div>
                <div class="card-content">
                    <div class="ratin-wrapper">
                        <div class="stars-wrapper">
                            <img v-for="index in x.FilledStars" loading="lazy"
                                src="https://eventually.com/images/starfull.svg" alt="" class="star-icon">
                            <img v-for="index in x.HalfFilledStars" loading="lazy"
                                src="https://eventually.com/images/starHalf.svg" alt="" class="star-icon">
                            <img v-for="index in x.EmptyStars" loading="lazy"
                                src="https://eventually.com/images/starEmpty.svg" alt="" class="star-icon">
                        </div>
                        <div class="text-size-xsmall color-lightgrey">({{ x.AverageEventReviewRating }})</div>
                    </div>
                    <div class="text-size-xsmall color-grey">
                        {{ x.EventDate }}
                    </div>
                    <div>
                        <h6 class="heading-card home-small-head">
                            {{ x.EventName }}
                        </h6>
                    </div>
                </div>
            </div>
            <div :data-w-id="aDataWId1" class="card-bigger">
                <a target="_blank" :href='x.Event_Slug_v4' class="card-bigger-image-wrapper w-inline-block">
                    <img :src='x.EventImage' alt="event-img" class="full-width-height" width="100%" height="100%"></a>
                <div class="card-bigger-content-wrapper">
                    <div class="blog-card-link">
                        <a href="#">
                            <div class="ratin-wrapper">
                                <div class="stars-wrapper">
                                    <img v-for="index in x.FilledStars" loading="lazy"
                                        src="https://eventually.com/images/starfull.svg" alt="" class="star-icon">
                                    <img v-for="index in x.HalfFilledStars" loading="lazy"
                                        src="https://eventually.com/images/starHalf.svg" alt="" class="star-icon">
                                    <img v-for="index in x.EmptyStars" loading="lazy"
                                        src="https://eventually.com/images/starEmpty.svg" alt="" class="star-icon">
                                </div>
                                <div class="text-size-xsmall color-lightgrey">({{ x.AverageEventReviewRating }})
                                </div>
                            </div>
                        </a>
                        <p class="card-subtitle">
                            {{ x.EventDate }}
                        </p>
                        <h4 class="heading-card home-big-head">
                            <a target="_blank" :href='x.EventSlugV4' class="text-color-main">
                                {{ x.EventName }}
                            </a>
                        </h4>
                        <p class="paragraph-small home-card-para">
                            {{ x.EventDescription }}
                        </p>
                        <div class="flex-spacebetween event-day mb-mob-0 mt-mob-10">
                            <p class="starting-ticker golden-event-label">
                                {{ x.EventStartDateDescription }}
                            </p>
                            <p class="event-type-label-new margin-left-auto blue-event-label">
                                {{ x.Location }}
                            </p>

                        </div>
                        <div class="flex-spacebetween event-day mt-mob-0 pt-mob-0">
                            <p class="event-type-label-new1 golden-event-label">
                                {{ x.EventType }}
                            </p>
                            <p class="event-type-label-new1 blue-event-label">
                                {{ x.City }}
                            </p>


                        </div>
                    </div>
                    <div class="divider blog-card"></div>
                    <div class="blog-card-bottom-content home-card-btn">
                        <div class="blog-post-author">
                            <a :href='x.OrganizerSlug' target="_blank">
                                <img :src='x.OrganizerLogo' alt="" class="blog-card-author-image home-card-img">
                            </a>
                        </div>
                        <a :href='x.CategorySlugV4' target="_blank" class="category-badge hub-category-badge w-button" :innerHTML="x.EventCategory">
                        </a>
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
            eventData: []
        };
    },
    props: {
        route: String,
        categorySlug: String,
        nodeId: String,
        nodeDataWId: String,
        aDataWId1: String
    },
    emits :  ['events-loaded'],
    inject : ['apiUrl'],
    methods: {
        async fetchData() {
            let url = this.apiUrl + '/EventuallyHome/GetEvents?route=' + this.route + "&categorySlug=" + this.categorySlug+ "&currentEventSlug=";
            const response = await fetch(url);
            this.eventData = await response.json();
            this.$emit('events-loaded','events-loaded');
        },
    },

    mounted() {
        this.fetchData();
    },

}
</script>