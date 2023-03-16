<?php
namespace App\Console\Commands;
use Illuminate\Console\Command;

class CreateSpacing extends Command
{
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'create:spacing';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Creates an array for spacing';

  /**
   * Execute the console command.
   *
   * @return int
   */
  public function handle()
  {
    for($i = 0; $i <= 90; $i++)
    { 
      $v = $i * 0.0625;
      echo "'{$i}' : '{$v}rem',\n";
    }
  }
}
