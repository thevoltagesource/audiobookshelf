class AudioFileMetadata {
  constructor(metadata) {
    this.tagAlbum = null
    this.tagArtist = null
    this.tagGenre = null
    this.tagTitle = null
    this.tagTrack = null
    this.tagSubtitle = null
    this.tagAlbumArtist = null
    this.tagDate = null
    this.tagComposer = null
    this.tagPublisher = null
    this.tagComment = null
    this.tagDescription = null
    this.tagEncoder = null
    this.tagEncodedBy = null

    if (metadata) {
      this.construct(metadata)
    }
  }

  toJSON() {
    // Only return the tags that are actually set
    var json = {}
    for (const key in this) {
      if (key.startsWith('tag') && this[key]) {
        json[key] = this[key]
      }
    }
    return json
  }

  construct(metadata) {
    this.tagAlbum = metadata.tagAlbum || null
    this.tagArtist = metadata.tagArtist || null
    this.tagGenre = metadata.tagGenre || null
    this.tagTitle = metadata.tagTitle || null
    this.tagTrack = metadata.tagTrack || null
    this.tagSubtitle = metadata.tagSubtitle || null
    this.tagAlbumArtist = metadata.tagAlbumArtist || null
    this.tagDate = metadata.tagDate || null
    this.tagComposer = metadata.tagComposer || null
    this.tagPublisher = metadata.tagPublisher || null
    this.tagComment = metadata.tagComment || null
    this.tagDescription = metadata.tagDescription || null
    this.tagEncoder = metadata.tagEncoder || null
    this.tagEncodedBy = metadata.tagEncodedBy || null
  }

  // Data parsed in prober.js
  setData(payload) {
    this.tagAlbum = payload.file_tag_album || null
    this.tagArtist = payload.file_tag_artist || null
    this.tagGenre = payload.file_tag_genre || null
    this.tagTitle = payload.file_tag_title || null
    this.tagTrack = payload.file_tag_track || null
    this.tagSubtitle = payload.file_tag_subtitle || null
    this.tagAlbumArtist = payload.file_tag_albumartist || null
    this.tagDate = payload.file_tag_date || null
    this.tagComposer = payload.file_tag_composer || null
    this.tagPublisher = payload.file_tag_publisher || null
    this.tagComment = payload.file_tag_comment || null
    this.tagDescription = payload.file_tag_description || null
    this.tagEncoder = payload.file_tag_encoder || null
    this.tagEncodedBy = payload.file_tag_encodedby || null
  }
}
module.exports = AudioFileMetadata