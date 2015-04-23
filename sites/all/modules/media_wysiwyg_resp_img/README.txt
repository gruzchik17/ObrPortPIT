
Description:
Adds option on Media WYSIWYG to make the selected inline image responsive using the 
picture module. This simply adds 'data-picture-group="<your breakpoints group>"' 
and 'data-picture-mapping="<your picture mapping>"' attributes on the inline image.

Requirements:
Drupal 7.x
Picture
Media WYSIWYG

Installation:
1. Copy the extracted media_wysiwyg_resp_img directory to your Drupal sites/all/modules directory.
2. Login as an administrator. Enable the module at http://www.example.com/?q=admin/modules.
3. Create breakpoints at http://www.example.com/?q=admin/config/media/breakpoints.
4. Add breakpoints group at http://www.example.com/?q=admin/config/media/breakpoints/groups/add.
5. Create image styles at http://www.example.com/?q=admin/config/media/image-styles/add that you
will associate with the created breakpoints.
6. Add picture mapping at http://www.example.com/?q=admin/config/media/picture/add and assign 
image style for each breakpoint.
7. Assign picture mapping for the image's field at 
http://www.example.com/?q=admin/structure/file-types/manage/image/fields/field_file_image_use_picture_tag
and click "Save".

Support:
Please use the issue queue for filing bugs with this module at
http://drupal.org/project/issues/media_wysiwyg_resp_img