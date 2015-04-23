/**
 *  @file
 *  File with utilities to handle media in html editing.
 */
(function ($) {
  Drupal.media.filter = Drupal.media.filter || {};
  var syncAttributesToFields = Drupal.media.filter.syncAttributesToFields;
  Drupal.media.filter.syncAttributesToFields = function(file_info) {
    var fileInfo = syncAttributesToFields(file_info);
    // If the picture field has changed, ensure the picture attribute is updated.
    var dataPictureGroup   = fileInfo.attributes['data-picture-group'] || false;
    var dataPictureMapping = fileInfo.attributes['data-picture-mapping'] || false;
    var pictureField = Boolean(fileInfo.fields['field_file_image_use_picture_tag[und]']);
    if (dataPictureGroup == '' && dataPictureMapping == '' && pictureField) {
      fileInfo.attributes['data-picture-group']   = Drupal.settings.media_wysiwyg_resp_img.pictureGroup;
      fileInfo.attributes['data-picture-mapping'] = Drupal.settings.media_wysiwyg_resp_img.pictureMapping;
    }
    else if (dataPictureGroup && dataPictureMapping && !pictureField) {
      delete fileInfo.attributes['data-picture-group'];
      delete fileInfo.attributes['data-picture-mapping'];
    }
    return fileInfo;
  };
})(jQuery);