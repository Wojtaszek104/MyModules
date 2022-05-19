<?php
namespace Bonasoft\Modules\NewsWW\Hooks;

use Bonasoft\Base\Hook;

class EnqueueNewsScriptsHook extends Hook
{
    protected $tag = 'wp_enqueue_scripts';

    public function handler()
    {
        wp_enqueue_script('bs_enqueue_mbp_filters_script', $this->module->url . '/assets/js/script.build.js', array(), null, true);
    }
}
