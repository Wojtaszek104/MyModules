<?php

namespace Bonasoft\Modules\NewsWW\Helper;

class PostDataExtenderHelper
{

    /**
     * @param Object $post - post data passed by reference
     */
    private static function addImage(&$post)
    {
        $image = get_the_post_thumbnail_url($post->ID);
        if ($image) {
            $post->post_img = $image;
        } else {
            $logo = get_theme_mod('custom_logo');
            $imageLogo = wp_get_attachment_image_src($logo, 'full');
            $post->default_img = $imageLogo[0];
        }
    }

    /**
     * @param Object $post - post data passed by reference
     */
    private static function addTrimmedContent(&$post)
    {
        $content = get_the_content(null, false, $post->ID);
        if ($content) {
            $trim_words = wp_trim_words($content, 10, '...');
            $post->post_content = $trim_words;
        }
    }

    /**
     * @param Object $post - post data passed by reference
     */
    private static function addParsedDate(&$post)
    {
        $date = date_parse($post->post_date);
        $day = ($date['day'] < 10) ? "0" . $date['day'] : "" . $date['day'];
        $month = ($date['month'] < 10) ? "0" . $date['month'] : "" . $date['month'];
        $post->parsed_date = $day . '.' . $month . '.' . $date['year'];
    }

    /**
     * @param Object $post - post data
     */
    private static function addLanguageInformation($post)
    {
        $post_language_information = apply_filters('wpml_post_language_details', null, $post->ID);
        return $post_language_information['locale'];
    }

    /**
     * @param String $category
     */
    private static function getArguments($category)
    {
        if ($category === 'all') {
            $args = ['numberposts' => 50, "order" => 'DESC', "order_by" => 'date'];
        } else {
            $args = ['numberposts' => 50, 'category' => $category, "order" => 'DESC', "order_by" => 'date'];
        }
        return $args;
    }

    /**
     * @param Object $post - post data passed by reference
     */
    private static function addPermalink(&$post)
    {
        $url = get_permalink($post->ID);
        $post->permalink = $url;
    }


    /**
     * @param String $category
     * @param String $lang
     */
    public static function getPostsFilteredByLanguage($category, $lang)
    {
        $args = self::getArguments($category, $lang);
        $posts = get_posts($args);

        $filteredPosts = [];
        foreach ($posts as $post) {
            if (self::addLanguageInformation($post) == $lang) {
                self::addParsedDate($post);
                self::addTrimmedContent($post);
                self::addImage($post);
                self::addPermalink($post);
                array_push($filteredPosts, $post);
            }
        }

        return $filteredPosts;
    }
}
