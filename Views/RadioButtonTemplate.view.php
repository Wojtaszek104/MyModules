<?php 
  /**
   ** Radio button template
   *! Variables:
   * - $block_id 
  */
?>
  <template id="bs_template__mbp_news_radio-button">
    <label class="bs-news__nav__pagination__radio-box__label" data-block-id="<?php echo $block_id; ?>">
      <input class="bs-news__nav__pagination__radio-box__label__input" type="radio" name="offset_<?php echo $block_id; ?>" value="0" data-block-id="<?php echo $block_id; ?>">
      <span class="bs-news__nav__pagination__radio-box__label__control" data-value="0" data-block-id="<?php echo $block_id; ?>">
      </span>
    </label>
  </template>
