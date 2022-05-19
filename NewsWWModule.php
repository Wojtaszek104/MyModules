<?php
    
namespace Bonasoft\Modules\NewsWW;

use Bonasoft\Base\Module;
    
class NewsWWModule extends Module
{
    const VERSION = '0.1.0';
    const LAST_COMPATIBLE = '1.0.0';
    
    protected $view;
    protected $hooks = array(
        'EnqueueNewsScriptsHook' => true,
        'FilterEndpointHook' => true,
    );

    protected $gutenbergBlocks = array(
        'NewsWWBlock' => true
  );

    public function init()
    {
        $this->registerHooks();
        $this->registerGutenbergBlocks();
    }
}
