<?php
namespace Bonasoft\Modules\NewsWW\Hooks;

use Bonasoft\Base\Hook;
use Bonasoft\Modules\NewsWW\Helper\PostDataExtenderHelper;

class FilterEndpointHook extends Hook
{
    protected $tag = 'rest_api_init';

    public function handler()
    {
        register_rest_route('bs/v1', '/news/subpage', array(
      'methods' => 'POST',
      'permission_callback' => '__return_true',
      'callback' => array($this,'handleRequest')
    ));
    }

    /**
     * @param Object $data
     */
    public function handleRequest($data)
    {
        $category = isset($data['category']) ? $data['category'] : 0;
        $lang = isset($data['lang']) ? $data['lang'] : 'pl_PL';

        $posts = PostDataExtenderHelper::getPostsFilteredByLanguage($category, $lang);
        
        return ['posts' => $posts];
    }
}
