class Video {
  constructor(
    id,
    title,
    thumbnailUrl,
    author,
    authorImageUrl,
    numberOfViews,
    createdAt,
    duration
  ) {
    this.id = id;
    this.title = title;
    this.thumbnailUrl = thumbnailUrl;
    this.author = author;
    this.authorImageUrl = authorImageUrl;
    this.numberOfViews = numberOfViews;
    this.createdAt = createdAt;
    this.duration = duration;
  }
}

export default Video;
