<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if ($this->app->environment() == 'development') {
            $this->app->register('Laracasts\Generators\GeneratorsServiceProvider');
        }
        $this->app->register(\Tymon\JWTAuth\Providers\LaravelServiceProvider::class);
    }
}
