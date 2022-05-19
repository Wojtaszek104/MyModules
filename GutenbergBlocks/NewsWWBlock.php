<?php

namespace Bonasoft\Modules\NewsWW\GutenbergBlocks;

use Bonasoft\Base\GutenbergBlock;
use Bonasoft\Modules\NewsWW\Helper\PostDataExtenderHelper;

class NewsWWBlock extends GutenbergBlock
{
    protected $name = 'bona-mbp-news';
    // protected $blockName = 'bona-mbp-news';

    public function blockFrontendRender($att)
    {
        $viewAttr = [];
        $block_id = uniqid('bs-news');

        $numberOfPostsPerSection = $att['numberOfRows'] * $att['numberOfColumns'];
        $categories = get_categories();
        $viewAttr['categories'] = $categories;
        $sections = $this->getSections($numberOfPostsPerSection);

        $this->addAttribute($viewAttr, 'title', $att['title'], '');
        $this->addAttribute($viewAttr, 'numberOfColumns', $att['numberOfColumns'], '');
        $this->addAttribute($viewAttr, 'numberOfRows', $att['numberOfRows'], '');
        $this->addAttribute($viewAttr, 'block_id', $block_id, 'bs-news');
        $this->addAttribute($viewAttr, 'sections', $sections, []);

        $itemTemplate = $this->renderHTML('NewsItemTemplate');
        $radioButtonTemplate = $this->renderHTML('RadioButtonTemplate', ['block_id' => $block_id]);
        $sectionTemplate = $this->renderHTML('SectionTemplate');
        $view = $this->renderHTML('NewsWWView', $viewAttr);
        $html = $view . $itemTemplate . $sectionTemplate . $radioButtonTemplate;
        return $html;
    }

    /**
     * @param Int $postsPerSection
     */
    private function getSections($postsPerSection)
    {
        $current_language_code = get_locale();
        $posts = PostDataExtenderHelper::getPostsFilteredByLanguage(null, $current_language_code);

        $sections = array_chunk($posts, $postsPerSection);
        return array_slice($sections, 0, 5);
    }

    /**
     * @param Array &$viewAttr - array of arguments passed by reference
     * @param String $attributeName
     * @param String $attributeValue
     * @param Mixed $defaultValue
     */
    private function addAttribute(&$viewAttr, $attributeName, $attributeValue, $defaultValue)
    {
        if (!empty($attributeValue)) {
            $viewAttr[$attributeName] = $attributeValue;
        } else {
            $viewAttr[$attributeName] = $defaultValue;
        }
    }
}
