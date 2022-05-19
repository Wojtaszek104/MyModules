<?php
/*
  ! Variables:
  *  - $title - block title
  *  - $numberOfColumns
  *  - $numberOfRows
  *  - $categories
  *  - $sections
  *  - $block_id 
  */
$url = site_url('/en/', 'https');

?>
<div class="bs-news" id="<?php echo $block_id; ?>" data-block="bs-mbp-news">
  <div class="bs-news__titlebar">
    <h3 class="bs-news__titlebar__title"><?php echo $title; ?></h3>
    <div class="bs-news__titlebar__select-wrapper">
      <div class="bs-news__titlebar__select-wrapper__preview"><?php echo __('Filter', 'bonasoft'); ?> <img src="/wp-content/uploads/2021/08/filter-results-button.svg"></div>

      <select id="bs-mbp-news-filter_<?php echo $block_id; ?>" class="bs-news__titlebar__select" data-columns="<?php echo $numberOfColumns; ?>" data-rows="<?php echo $numberOfRows; ?>" data-offset="0">
        <option value=""><?php echo __('All', 'bonasoft'); ?></option>
        <?php
        foreach ($categories as $category) {
          echo "<option value='$category->term_id'>$category->cat_name</option>";
        }
        ?>
      </select>
    </div>

  </div>

  <div class="bs-news__posts-container" id="ms-mbp-news-display_<?php echo $block_id; ?>">
    <?php
    foreach ($sections as $section) :
    ?>
      <div class="bs-news__posts-container__section">
        <?php
        foreach ($section as $post) :
          $post_img =  $post->post_img ? $post->post_img : $post->default_img;
          $post_img_class =  $post->post_img ? "bs-news__posts-container__section__post__img" : "bs-news__posts-container__section__post__img bs-news__posts-container__section__post__img--logo";
        ?>
          <a class="bs-news__posts-container__section__post bs-news__posts-container__section__post--<?php echo $numberOfColumns; ?>" data-news-link data-news-item href="<?php echo $post->permalink; ?>">
            <img class="<?php echo $post_img_class; ?>" alt="Post thumbnail" data-news-img src="<?php echo $post_img; ?>">
            <p class="bs-news__posts-container__section__post__date" data-news-date><?php echo $post->parsed_date; ?></p>
            <p class="bs-news__posts-container__section__post__desc" data-news-desc><?php echo $post->post_title; ?></p>
          </a>
        <?php
        endforeach;
        ?>
      </div>
    <?php
    endforeach;
    ?>
  </div>
  <div class="bs-news__nav">
    <div class="bs-news__nav__pagination">
      <button class="bs-news__nav__pagination__button bs-news__nav__pagination__button-prev" data-block-id="<?php echo $block_id; ?>"></button>

      <div class="bs-news__nav__pagination__radio-box" data-offset='0' data-pages="<?php echo count($sections); ?>" data-block-id="<?php echo $block_id; ?>">
        <?php foreach ($sections as $index => $section) :
          $isChecked = ($index == 0) ? 'bs-news__nav__pagination__radio-box__label__control bs-news__nav__pagination__radio-box__label__control--checked' : 'bs-news__nav__pagination__radio-box__label__control';
        ?>
          <label class="bs-news__nav__pagination__radio-box__label" data-block-id="<?php echo $block_id; ?>">
            <input class="bs-news__nav__pagination__radio-box__label__input" type="radio" name="offset_<?php echo $block_id; ?>" value="<?php echo $index; ?>" data-block-id="<?php echo $block_id; ?>">
            <span class="<?php echo $isChecked; ?>" data-value="<?php echo $index; ?>" data-block-id="<?php echo $block_id; ?>">
            </span>
          </label>
        <?php endforeach; ?>
      </div>

      <button class="bs-news__nav__pagination__button bs-news__nav__pagination__button-next" data-block-id="<?php echo $block_id; ?>"></button>
    </div>
    <a class="bs-news__nav__read-more"><?php echo __('See more', 'bonasoft'); ?></a>
  </div>
</div>