<?php

namespace Database\Seeders;

use App\Models\Chapter;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ChapterSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $chapters = [
      [
        'image' => '/images/chap 2.webp',
        'name' => 'Chapter 1',
        'title' => 'The Oath & Introduction',
        'description' => 'It is about the oath taken by a new Canadian citizen. It symbolizes their commitment to Canada and its values.',
        'questions' => 20,
        'mistakes' => 5,
        'step' => 2,
      ],
      [
        'image' => '/images/chap 3.webp',
        'name' => 'Chapter 2',
        'title' => 'Rights and Responsibility',
        'description' => "Know about Canada's fundamental rights, such as voting, freedom of expression, laws, taxes, etc., so that you can uphold them.",
        'questions' => 20,
        'mistakes' => 5,
        'step' => 2,
      ],
      [
        'image' => '/images/chap 4.webp',
        'name' => 'Chapter 3',
        'title' => ' Who We are',
        'description' => 'Learn about what Canada is known for: its diverse population, multiculturalism, Heritage, inclusive society, and more.',
        'questions' => 20,
        'mistakes' => 5,
        'step' => 2,
      ],
      [
        'image' => '/images/chap 5.webp',
        'name' => 'Chapter 4',
        'title' => "Canada's History",
        'description' => 'This chapter discusses the history and journey of European settlers in Canada. Know about the key events that shaped the nation.',
        'questions' => 20,
        'mistakes' => 5,
        'step' => 2,
      ],
      [
        'image' => '/images/chap 6.webp',
        'name' => 'Chapter 5',
        'title' => 'Modern Canada',
        'description' => "The post-war recovery of Canada's economy and international engagement. Know about how the country excels in languages, arts, sports, and values.",
        'questions' => 20,
        'mistakes' => 5,
        'step' => 2,
      ],
      [
        'image' => '/images/chap 7.webp',
        'name' => 'Chapter 6',
        'title' => 'How Canada Governs',
        'description' => "Gain deeper knowledge of Canada's democratic system of government. Understand the Prime Minister's role, Parliament's role, and the Constitution's division of power.",
        'questions' => 20,
        'mistakes' => 5,
        'step' => 2,
      ],
      [
        'image' => '/images/chap 8.webp',
        'name' => 'Chapter 7',
        'title' => 'Federal Elections',
        'description' => 'Explore how federal elections are conducted in Canada. It is important to know voting procedures, political parties, and civic engagement.',
        'questions' => 20,
        'mistakes' => 5,
        'step' => 2,
      ],
      [
        'image' => '/images/chap 9.webp',
        'name' => 'Chapter 8',
        'title' => 'The Justice System ',
        'description' => "Introduce yourself to the country's legal system. Get detailed information about the principles of justice, the court system, and the protection of rights and freedoms.",
        'questions' => 20,
        'mistakes' => 5,
        'step' => 2,
      ],
      [
        'image' => '/images/chap 10.webp',
        'name' => 'Chapter 9',
        'title' => 'Canadian Symbols',
        'description' => "Introduce yourself to Canada's most important national symbols, such as the maple leaf, flag, coat of arms, and significant landmarks.",
        'questions' => 20,
        'mistakes' => 5,
        'step' => 2,
      ],
      [
        'image' => '/images/chap 11.webp',
        'name' => 'Chapter 10',
        'title' => "Canada's Economy",
        'description' => "Canada has always been a trading nation. Learn about its natural resources, manufacturing, technology, trade, and the importance of economic diversity.",
        'questions' => 20,
        'mistakes' => 5,
        'step' => 2,
      ],
      [
        'image' => '/images/chap 12.webp',
        'name' => 'Chapter 11',
        'title' => "Canada's Region",
        'description' => "Canada has five distinct regions. Discover the unique landscapes, climates, cultures, and contributions of these regions.",
        'questions' => 20,
        'mistakes' => 5,
        'step' => 2,
      ],
      [
        'image' => '/images/chap 1.webp',
        'name' => 'Free Simulation Test',
        'title' => 'Free Simulation Test',
        'description' => "Take part in our free diagnostic Canadian citizenship test practice to assess your current knowledge and skills. It will help you tailor your study plan for maximum effectiveness.",
        'questions' => 20,
        'mistakes' => 5,
        'step' => 1,
      ],
      [
        'image' => '/images/chap 13.webp',
        'name' => 'Exam Simulator',
        'title' => 'Exam Simulator',
        'description' => 'We offer realistic simulations of the Canadian Citizenship test. Providing a real-life testing experience will help you build confidence and find out your weaknesses.',
        'questions' => 20,
        'mistakes' => 5,
        'step' => 3,
      ],
    ];

    foreach ($chapters as $data) {
      Chapter::create($data);
    }
  }
}
