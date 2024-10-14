<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Chapter;
use App\Models\Test;
use App\Models\Topic;
use App\Models\Answer;
use App\Models\Flashcard;
use App\Models\Package;
use App\Models\Question;
use App\Models\SimulationAnswer;
use App\Models\SimulationQuestion;
use App\Models\SimulationTest;
use Illuminate\Support\Facades\Log;

class DatabaseSeeder extends Seeder
{
  public function run(): void
  {
    DB::transaction(function () {
      $chapters = collect(
        [
          [
            'image' => '/images/chap 2.png',
            'name' => 'Chapter 1',
            'title' => 'The Oath & Introduction',
            'description' => 'It is about the oath taken by a new Canadian citizen. It symbolizes their commitment to Canada and its values.',
            'questions' => 20,
            'mistakes' => 5,
            'step' => 2,
            'tests' => [
              [
                'name' => 'Practice Test 1.1',
                'info' => 'Practice Test 1.1',
                'questions' => [
                  [
                    'text' => 'What will you promise when you take the oath of citizenship?',
                    'answers' => [
                      ['text' => 'Carry out responsibilities as a Canadian citizen'],
                      ['text' => 'Pledge allegiance to the queen or King'],
                      ['text' => 'Promise to obey the constitution of Canada'],
                      ['text' => 'Pledge loyalty to the queen or King, observe the laws and fulfill the duties of a Canadian'],
                    ],
                    'correctAnswerId' => 4,
                    'explanation' => 'I swear (or affirm) that I will be faithful, observe the laws and fulfill the duties of a Canadian. (Discover Canada - P2)'
                  ],
                  [
                    'text' => 'To whom do we profess our loyalty to in Canada?',
                    'answers' => [
                      ['text' => 'The Canadian flag'],
                      ['text' => 'A person who represents all Canadians'],
                      ['text' => 'Geopolitical entities'],
                      ['text' => 'The Canadian Constitution'],
                    ],
                    'correctAnswerId' => 6,
                    'explanation' => 'In Canada, we profess our loyalty to a person who represents all Canadians and not to a document such as a constitution, a banner such as a flag, or a geopolitical entity such as a country. (Discover Canada - P2)'
                  ],
                  [
                    'text' => 'What is Canada\'s system of political governance called?',
                    'answers' => [
                      ['text' => 'Monarchy'],
                      ['text' => 'Parliamentary government'],
                      ['text' => 'Democratic process'],
                      ['text' => 'Benevolent dictatorship'],
                    ],
                    'correctAnswerId' => 10,
                    'explanation' => 'Canada is a constitutional monarchy, a parliamentary democracy and a federal state. Canadians are bound together by a shared commitment to the rule of law and to the institutions of parliamentary government. (Discover Canada - P3).'
                  ],
                  [
                    'text' => 'Which of these statements is true?',
                    'answers' => [
                      ['text' => 'Canada has welcomed immigrants for years to build a free, just, and affluent society.'],
                      ['text' => 'Canadians haven\'t given up anything to protect their way of life'],
                      ['text' => 'Canada is a Republic'],
                      ['text' => 'Immigrants between the ages of 21 and 54 must learn about voting laws in order to become Canadian citizens'],
                    ],
                    'correctAnswerId' => 13,
                    'explanation' => 'Canada has welcomed generations of newcomers to our shores to help us build a free, law-abiding and prosperous society. (Discover Canada - P3)'
                  ],
                  [
                    'text' => 'Is the Citizenship Test written or an interview?',
                    'answers' => [
                      ['text' => 'Always in the form of an interview'],
                      ['text' => 'Written and taken in person'],
                      ['text' => 'Always a written test'],
                      ['text' => 'It\'s a written test, but it can also be an interview.'],
                    ],
                    'correctAnswerId' => 20,
                    'explanation' => 'The citizenship test is usually a written test but it could be an interview. You will be tested on the knowledge of Canada and of the rights and responsibilities of citizenship, and you will also be tested to ensure you have adequate knowledge of English or French. (P6)'
                  ],
                  [
                    'text' => 'In Canada, the constitution, the flag and the country are not encompassed by the Sovereign.',
                    'answers' => [
                      ['text' => 'True'],
                      ['text' => 'False'],
                    ],
                    'correctAnswerId' => 22,
                    'explanation' => 'In Canada, we profess our loyalty to a person who represents all Canadians and not to a document such as a constitution, a banner such as a flag, or a geopolitical entity such as a country. In our constitutional monarchy, these elements are encompassed by the Sovereign (Queen or King). It is a remarkably simple yet powerful principle: Canada is personified by the Sovereign just as the Sovereign is personified by Canada.'
                  ],
                  [
                    'text' => 'Which of the following statements is false?',
                    'answers' => [
                      ['text' => 'Canada is a federal state'],
                      ['text' => 'Canada is a constitutional monarchy'],
                      ['text' => 'Canada is a theocracy'],
                      ['text' => 'Canada is a parliamentary democracy'],
                    ],
                    'correctAnswerId' => 25,
                    'explanation' => 'Canada is a constitutional monarchy, a parliamentary democracy and a federal state. Canadians are bound together by a shared commitment to the rule of law and to the institutions of parliamentary government. (P3)'
                  ],
                  [
                    'text' => 'Which of the following statements is false?',
                    'answers' => [
                      ['text' => 'During your citizenship ceremony, you\'ll be invited to join the Canadian Army.'],
                      ['text' => 'During your citizenship ceremony, you\'ll sign the oath form.'],
                      ['text' => 'During your citizenship ceremony, you\'ll get your Citizenship Certificate.'],
                      ['text' => 'During your citizenship ceremony, you\'ll take the Oath of Citizenship.'],
                    ],
                    'correctAnswerId' => 27,
                    'explanation' => 'At the ceremony, you will take the Oath of Citizenship; sign the oath form; and receive your Canadian Citizenship Certificate. If you do not pass the test, you will receive a notification indicating the next steps. (P7)'
                  ],
                  [
                    'text' => 'What languages do you need to demonstrate proficiency in to become a Canadian citizen?',
                    'answers' => [
                      ['text' => 'Either Spanish or English'],
                      ['text' => 'Either English or French'],
                      ['text' => 'Both English and French'],
                      ['text' => 'Either Spanish or French'],
                    ],
                    'correctAnswerId' => 32,
                    'explanation' => 'In order to apply for Canadian citizenship, you must provide proof that you know how to speak and write in 1 of Canada\'s official languages (either English or French). (P3)'
                  ],
                  [
                    'text' => 'Canada does not personify the Sovereign.',
                    'answers' => [
                      ['text' => 'True'],
                      ['text' => 'False'],
                    ],
                    'correctAnswerId' => 36,
                    'explanation' => 'Canada personifies a King or Queen; however, our government is a democracy. (P2)'
                  ],
                  [
                    'text' => 'In Canada, to whom do we formally pledge allegiance?',
                    'answers' => [
                      ['text' => 'We pledge allegiance to the Sovereign (King or Queen).'],
                      ['text' => 'The province of Ontario'],
                      ['text' => 'The United Kingdom'],
                      ['text' => 'The Prime Minister'],
                    ],
                    'correctAnswerId' => 37,
                    'explanation' => 'In Canada, we profess our loyalty to a person who represents all Canadians and not to a document such as a constitution, a banner such as a flag, or a geopolitical entity such as a country. (P2)'
                  ],
                  [
                    'text' => 'Which of the following statements is false?',
                    'answers' => [
                      ['text' => 'Canadians enjoy many rights and freedoms'],
                      ['text' => 'Canadians are exempt from upholding others\' freedom and rights'],
                      ['text' => 'Canadians have obligations as well as rights'],
                      ['text' => 'The laws of Canada must be followed by Canadians'],
                    ],
                    'correctAnswerId' => 42,
                    'explanation' => 'Canadian citizens enjoy many rights, but Canadians also have responsibilities. They must obey Canada’s laws and respect the rights and freedoms of others. (P3)'
                  ],
                  [
                    'text' => 'Which of these statements about citizenship applications is not true?',
                    'answers' => [
                      ['text' => 'Officials will verify that you are not prohibited from applying'],
                      ['text' => 'Officials will examine your status'],
                      ['text' => 'Officials will make sure you adhere to the rules.'],
                      ['text' => 'Officials will request gifts or money from you.'],
                    ],
                    'correctAnswerId' => 48,
                    'explanation' => 'When you apply for citizenship, officials will check your status, verify that you are not prohibited from applying, and ensure that you meet the requirements. (P6)'
                  ],
                  [
                    'text' => 'What type of government is there in Canada?',
                    'answers' => [
                      ['text' => 'Canada is a Confederation'],
                      ['text' => 'Canada is a Constitutional Monarchy.'],
                      ['text' => 'Canada is a Oligarchy'],
                      ['text' => 'Canada is a Republic'],
                    ],
                    'correctAnswerId' => 50,
                    'explanation' => 'Canada is a constitutional monarchy, a parliamentary democracy and a federal state. Canadians are bound together by a shared commitment to the rule of law and to the institutions of parliamentary government. (P3)'
                  ],
                  [
                    'text' => 'How long have settlers and immigrants contributed to the diversity and wealth of Canada?',
                    'answers' => [
                      ['text' => '200 Years'],
                      ['text' => '300 Years'],
                      ['text' => '400 Years'],
                      ['text' => '500 Years'],
                    ],
                    'correctAnswerId' => 55,
                    'explanation' => 'For 400 years, settlers and immigrants have contributed to the diversity and richness of Canada, which is built on a proud history and a strong identity. (P3)'
                  ],
                  [
                    'text' => 'What are the two basic requirements for citizenship testing in Canada?',
                    'answers' => [
                      ['text' => 'Knowledge of Canadian history and language proficiency'],
                      ['text' => 'Knowledge of Canadian laws and cultural integration'],
                      ['text' => 'Knowledge of Canadian rights and responsibilities, and language proficiency'],
                      ['text' => 'Knowledge of Canadian geography and cultural diversity'],
                    ],
                    'correctAnswerId' => 59,
                    'explanation' => 'You will be tested on two basic requirements for citizenship: 1) knowledge of Canada and of the rights and responsibilities of citizenship, and 2) adequate knowledge of English or French. (P6)'
                  ],
                  [
                    'text' => 'Who is exempted from writing the citizenship test in Canada?',
                    'answers' => [
                      ['text' => 'Applicants aged 60 and above'],
                      ['text' => 'Applicants aged 50 and above'],
                      ['text' => 'Applicants aged 55 and above'],
                      ['text' => 'Applicants aged 65 and above'],
                    ],
                    'correctAnswerId' => 63,
                    'explanation' => 'Adult applicants 55 years of age and over do not need to write the citizenship test. (P6)'
                  ],
                  [
                    'text' => 'What age group of immigrants must demonstrate adequate knowledge of English or French to become Canadian citizens?',
                    'answers' => [
                      ['text' => '16 to 50'],
                      ['text' => '18 to 54'],
                      ['text' => '20 to 60'],
                      ['text' => '22 to 58'],
                    ],
                    'correctAnswerId' => 66,
                    'explanation' => 'Immigrants between the ages of 18 and 54 must have adequate knowledge of English or French in order to become Canadian citizens. (P3)'
                  ],
                  [
                    'text' => 'Which of the following topics must immigrants learn about to fulfill the requirements for Canadian citizenship?',
                    'answers' => [
                      ['text' => 'World history and politics'],
                      ['text' => 'Canadian wildlife and ecology'],
                      ['text' => 'Canada\'s history, symbols, and democratic institutions'],
                      ['text' => 'International trade agreements'],
                    ],
                    'correctAnswerId' => 71,
                    'explanation' => 'Canada’s history, symbols, democratic institutions, geography, and the rights and responsibilities of citizenship. (P3)'
                  ],
                  [
                    'text' => 'What oath must Canadian citizens take to pledge allegiance?',
                    'answers' => [
                      ['text' => 'Pledge of loyalty to the Prime Minister'],
                      ['text' => 'Pledge of loyalty to the Canadian flag'],
                      ['text' => 'Pledge of allegiance to the Canadian Constitution and its recognition of Indigenous rights'],
                      ['text' => 'Pledge of allegiance to the United Nations'],
                    ],
                    'correctAnswerId' => 75,
                    'explanation' => 'Excerpt from Oath: "I will faithfully observe the laws of Canada, including the Constitution which recognizes and affirms the Aboriginal and treaty rights of First Nations, Inuit and Métis peoples" (P2)'
                  ],
                ]
              ],
            ],
            'topics' => [
              ['name' => 'The Oath of Citizenship'],
              ['name' => 'A message to new Citizens'],
              ['name' => 'About the Citizenship Test'],
              ['name' => 'Transition of the Crown'],
              ['name' => 'The Timeline'],
            ],
            'flashcards' => [
              [
                'question' => 'Family and friends are not allowed to attend your citizenship ceremony. Is this statement True or false?',
                'answer' => 'False',
                'explanation' => 'If you pass the test and meet all the other requirements, you will receive a Notice to Appear to Take the Oath of Citizenship. You are encouraged to bring your family and friends to celebrate this occasion.'
              ],
              [
                'question' => 'Is the Citizenship Test a written test or an interview?',
                'answer' => 'It is a written test, but it could also be an interview.',
                'explanation' => 'The citizenship test is usually a written test but it could be an interview. You will be tested on the knowledge of Canada and of the rights and responsibilities of citizenship, and you will also be tested to ensure you have adequate knowledge of English or French.'
              ],
              [
                'question' => 'In Canada, to whom do we formally pledge allegiance?',
                'answer' => 'We pledge allegiance to the Sovereign (King or Queen).',
                'explanation' => 'In Canada, we profess our loyalty to a person who represents all Canadians and not to a document such as a constitution, a banner such as a flag, or a geopolitical entity such as a country.'
              ],
              [
                'question' => 'What year was Magna Carta signed?',
                'answer' => 'The year 1215',
                'explanation' => 'Magna Carta (also known as the Great Charter of Freedoms) was signed in England in the year 1215.'
              ],
              [
                'question' => 'What do you swear as you take the Oath of Citizenship?',
                'answer' => 'You pledge loyalty to the King or Queen, abide by Canadian law, and carry out your citizenship obligations.',
                'explanation' => 'During this important moment, you must pledge loyalty to the King or Queen, abide by Canadian law, and carry out your citizenship obligations.'
              ],
              [
                'question' => 'In order to become a Canadian Citizen, you have to provide proof that you speak and write in which languages?',
                'answer' => 'Either English or French',
                'explanation' => 'In order to apply for Canadian citizenship, you must provide proof that you know how to speak and write in 1 of Canada\'s official languages (either English or French).'
              ],
              [
                'question' => 'What does the Canadian citizenship Test assess?',
                'answer' => 'It assess your knowledge of Canada and the rights and responsibilities of citizenship',
                'explanation' => 'You will be tested your knowledge of Canada and of the rights and responsibilities of citizenship, and you will also be tested to ensure your have adequate knowledge of English or French.'
              ],
              [
                'question' => 'What are Mobility Rights?',
                'answer' => 'Canadians are free to enter and leave the nation at will, live and work anywhere they choose, and apply for passports.',
                'explanation' => 'Canadians can live and work anywhere they choose in Canada, enter and leave the country freely, and apply for a passport.'
              ],
              [
                'question' => 'How long have settlers and immigrants contributed to the diversity and wealth of Canada?',
                'answer' => '400 Years',
                'explanation' => 'For 400 years, settlers and immigrants have contributed to the diversity and richness of Canada, which is built on a proud history and a strong identity.'
              ],
              [
                'question' => 'What type of government is there in Canada?',
                'answer' => 'Canada has a constitutional monarchy.',
                'explanation' => 'Canada is a constitutional monarchy, a parliamentary democracy and a federal state. Canadians are bound together by a shared commitment to the rule of law and to the institutions of parliamentary government.'
              ]
            ]
          ],
          [
            'image' => '/images/chap 3.png',
            'name' => 'Chapter 2',
            'title' => 'Rights & Responsibilities',
            'description' => "Know about Canada's fundamental rights, such as voting, freedom of expression, laws, taxes, etc., so that you can uphold them.",
            'questions' => 20,
            'mistakes' => 5,
            'step' => 2,
            'tests' => [
              [
                'name' => 'Practice Test 2.1',
                'info' => 'Practice Test 2.1',
                'questions' => [
                  [
                    'text' => 'With which words does the Canadian Charter of Rights and Freedoms begin?',
                    'answers' => [
                      ['text' => '“Canadian citizens have rights and responsibilities”'],
                      ['text' => '“Oh Canada! our home and native land!”'],
                      ['text' => '“Canada is a free country and home of the Braves”'],
                      ['text' => '“Whereas Canada is founded upon principles that recognize the supremacy of God and the rule of law”'],
                    ],
                    'correctAnswerId' => 80,
                    'explanation' => 'The Constitution of Canada was amended in 1982 to entrench the Canadian Charter of Rights and Freedoms, which begins with the words, “Whereas Canada is founded upon principles that recognize the supremacy of God and the rule of law.”(P8)'
                  ],
                  [
                    'text' => 'Which of the following is NOT a responsibility of Canadian citizens?',
                    'answers' => [
                      ['text' => 'Learning to speak both official languages'],
                      ['text' => 'Voting in elections'],
                      ['text' => 'Obeying the law'],
                      ['text' => 'Taking responsibility for oneself and one\'s family'],
                    ],
                    'correctAnswerId' => 81,
                    'explanation' => 'Learning to speak both official languages is not a responsibility of Canadian citizens. (P9)'
                  ],
                  [
                    'text' => 'Which two fundamental freedoms are protected by the Canadian Charter of Rights and Freedoms?',
                    'answers' => [
                      ['text' => 'Freedom of belief and freedom of religion'],
                      ['text' => 'Equal employment rights and opportunities'],
                      ['text' => 'Basic living rights and Obey laws'],
                      ['text' => 'Aboriginal people\'s rights and to volunteer'],
                    ],
                    'correctAnswerId' => 85,
                    'explanation' => 'Freedom of belief and freedom of religion are two fundamental freedoms protected by the Canadian Charter of Rights and Freedoms. (P8)'
                  ],
                  [
                    'text' => 'Which of the following are the responsibilities of Canadian citizenship?',
                    'answers' => [
                      ['text' => 'Protect the Canadian environment and vote in elections'],
                      ['text' => 'Obey the law, find work in the government and serve in the Canadian Army'],
                      ['text' => 'Serve in the Canadian Army, obey the law and take responsibilities for oneself and one\'s family'],
                      ['text' => 'Obey the law, serve on a jury, vote in elections and help others in the community'],
                    ],
                    'correctAnswerId' => 90,
                    'explanation' => 'Obey the law, serve on a jury, vote in elections, and help others in the community are responsibilities of Canadian citizenship. (P9)'
                  ],
                  [
                    'text' => 'Who has the right to apply for a Canadian passport?',
                    'answers' => [
                      ['text' => 'British citizens'],
                      ['text' => 'Canadian citizens'],
                      ['text' => 'Any immigrant who has stayed a minimum of three years in Canada'],
                      ['text' => 'Wealthy citizens'],
                    ],
                    'correctAnswerId' => 94,
                    'explanation' => 'Canadian citizens have the right to apply for a Canadian passport. Canadians can live and work anywhere they choose in Canada, enter and leave the country freely, and apply for a passport. (P8)'
                  ],
                  [
                    'text' => 'Who proclaimed the amended constitution of Canada in 1982?',
                    'answers' => [
                      ['text' => 'The Senate'],
                      ['text' => 'Queen Elizabeth II'],
                      ['text' => 'The people of Canada'],
                      ['text' => 'The Prime Minister'],
                    ],
                    'correctAnswerId' => 98,
                    'explanation' => 'Queen Elizabeth II proclaimed the amended Constitution, Ottawa, 1982. (P8)'
                  ],
                  [
                    'text' => 'What are the two principles upon which Canada is founded?',
                    'answers' => [
                      ['text' => 'The supremacy of God and the rule of law'],
                      ['text' => 'The supremacy of God and freedom of speech'],
                      ['text' => 'The supremacy of law and the rule of God'],
                      ['text' => 'Mobility right and the rule of law'],
                    ],
                    'correctAnswerId' => 101,
                    'explanation' => 'Canada is founded upon principles that recognize the supremacy of God and the rule of law. (P8)'
                  ],
                  [
                    'text' => 'Since when has the protocol for the amendment of the Canadian Constitution existed?',
                    'answers' => [
                      ['text' => '1962'],
                      ['text' => '1982'],
                      ['text' => '1885'],
                      ['text' => '1972'],
                    ],
                    'correctAnswerId' => 106,
                    'explanation' => 'The Constitution of Canada was amended in 1982 to entrench the Canadian Charter of Rights and Freedoms. (P8)'
                  ],
                  [
                    'text' => 'Who can enter and leave the country freely without time constraints?',
                    'answers' => [
                      ['text' => 'Canadian citizens and landed immigrants'],
                      ['text' => 'Commonwealth citizens'],
                      ['text' => 'Canadian citizens'],
                      ['text' => 'British citizens'],
                    ],
                    'correctAnswerId' => 111,
                    'explanation' => 'Canadian citizens can enter and leave the country freely. (P8)'
                  ],
                  [
                    'text' => 'What is the great Charter of Freedom also known as?',
                    'answers' => [
                      ['text' => 'Habeas corpus'],
                      ['text' => 'Dominion of Canada'],
                      ['text' => 'Canadian Constitution'],
                      ['text' => 'Magna Carta'],
                    ],
                    'correctAnswerId' => 116,
                    'explanation' => 'The Magna Carta is also known as the Great Charter of Freedoms. (P8)'
                  ],
                  [
                    'text' => 'What forms a jury?',
                    'answers' => [
                      ['text' => 'Politicians'],
                      ['text' => 'Immigrants'],
                      ['text' => 'Judges'],
                      ['text' => 'A jury is made up of citizens'],
                    ],
                    'correctAnswerId' => 120,
                    'explanation' => 'A jury is made up of citizens. Serving on a jury is a privilege that makes the justice system work as it depends on impartial juries made up of citizens. (P9)'
                  ],
                  [
                    'text' => 'When did the Canadian Charter of Rights and Freedoms become part of the Constitution?',
                    'answers' => [
                      ['text' => '1892'],
                      ['text' => '1872'],
                      ['text' => '1982'],
                      ['text' => '1782'],
                    ],
                    'correctAnswerId' => 123,
                    'explanation' => 'The Canadian Charter of Rights and Freedoms became part of the Constitution in 1982. (P8)'
                  ],
                  [
                    'text' => 'Canadians have rights and fundamental freedoms such as:',
                    'answers' => [
                      ['text' => 'Thought and belief'],
                      ['text' => 'Opinion and expression'],
                      ['text' => 'Freedom of religion'],
                      ['text' => 'All of the above'],
                    ],
                    'correctAnswerId' => 128,
                    'explanation' => 'Canadians have rights and fundamental freedoms such as thought and belief, opinion and expression, and freedom of religion. (P8)'
                  ],
                  [
                    'text' => 'When was the Constitution of Canada amended to include the Charter of Rights and Freedoms?',
                    'answers' => [
                      ['text' => '1902'],
                      ['text' => '1859'],
                      ['text' => '1982'],
                      ['text' => '1949'],
                    ],
                    'correctAnswerId' => 131,
                    'explanation' => 'The Constitution of Canada was amended in 1982 to entrench the Canadian Charter of Rights and Freedoms. (P8)'
                  ],
                  [
                    'text' => 'Which is the fundamental characteristic of Canadian Heritage and identity?',
                    'answers' => [
                      ['text' => 'Multiculturalism'],
                      ['text' => 'French culture'],
                      ['text' => 'Canadian festivals'],
                      ['text' => 'English culture'],
                    ],
                    'correctAnswerId' => 133,
                    'explanation' => 'Multiculturalism is a fundamental characteristic of Canadian heritage and identity. (P8)'
                  ],
                  [
                    'text' => 'Post-war, Canada became a more flexible and open society. Which of the following was this based on?',
                    'answers' => [
                      ['text' => 'Equality of men and women'],
                      ['text' => 'Inequality of women'],
                      ['text' => 'Inequality of men and women'],
                      ['text' => 'Equality of men'],
                    ],
                    'correctAnswerId' => 137,
                    'explanation' => 'Post-war, Canada became a more flexible and open society based on the equality of men and women. (P9)'
                  ],
                  [
                    'text' => 'Which three rights are included in the Canadian Charter of Rights and Freedoms?',
                    'answers' => [
                      ['text' => 'Freedom of expression rights, property rights and fair trial rights'],
                      ['text' => 'Mobility rights, Aboriginal people\'s rights and official language rights'],
                      ['text' => 'Aboriginal people\'s Rights, Voting Rights and official language rights'],
                      ['text' => 'Employment rights, Mobility rights and freedom rights'],
                    ],
                    'correctAnswerId' => 142,
                    'explanation' => 'The Canadian Charter of Rights and Freedoms includes mobility rights, Aboriginal people\'s rights and official language rights. (P8)'
                  ],
                  [
                    'text' => 'Who has the right to enter and leave Canada at will?',
                    'answers' => [
                      ['text' => 'Prisoners'],
                      ['text' => 'Members of the Commonwealth'],
                      ['text' => 'Canadian citizens'],
                      ['text' => 'Job Seekers'],
                    ],
                    'correctAnswerId' => 147,
                    'explanation' => 'Canadian citizens have the right to enter and leave Canada at will. (P8)'
                  ],
                  [
                    'text' => 'What does “mobility rights” mean?',
                    'answers' => [
                      ['text' => 'Being able to use any mobile phone service in Canada'],
                      ['text' => 'Being able to live and work anywhere in Canada'],
                      ['text' => 'Being able to live and fish anywhere in Canada'],
                      ['text' => 'Being able to play hockey anywhere in Canada'],
                    ],
                    'correctAnswerId' => 150,
                    'explanation' => 'Mobility rights mean being able to live and work anywhere in Canada. (P8)'
                  ],
                  [
                    'text' => 'Sarah is a new immigrant to Canada. Why can she choose to take a job like any man?',
                    'answers' => [
                      ['text' => 'Because of the equality between French and English'],
                      ['text' => 'Because she came from the United Kingdom'],
                      ['text' => 'Because of the equality of women and men in Canada'],
                      ['text' => 'Because she has a University degree'],
                    ],
                    'correctAnswerId' => 155,
                    'explanation' => 'Sarah can choose to take a job like any man because of the equality of women and men in Canada. (P9)'
                  ]
                ]
              ],
              [
                'name' => 'Practice Test 2.2',
                'info' => 'Practice Test 2.2',
                'questions' => [
                  [
                    "text" => "When was the Magna Carta signed?",
                    "answers" => [
                      ["text" => "1649"],
                      ["text" => "1215"],
                      ["text" => "1425"],
                      ["text" => "1615"]
                    ],
                    'correctAnswerId' => 158,
                    "explanation" => "Together, these secure for Canadians an 800-year old tradition of ordered liberty, which dates back to the signing of Magna Carta in 1215 in England. (P8)"
                  ],
                  [
                    "text" => "What is “Habeas corpus”?",
                    "answers" => [
                      ["text" => "the right to live and work anywhere in Canada"],
                      ["text" => "the right for peaceful assembly"],
                      ["text" => "the right to speak freely"],
                      ["text" => "the right to challenge unlawful detention by the state"]
                    ],
                    'correctAnswerId' => 164,
                    "explanation" => "Habeas corpus, the right to challenge unlawful detention by the state, comes from English common law. (P8)"
                  ],
                  [
                    "text" => "Who out of the following is above the law in Canada?",
                    "answers" => [
                      ["text" => "Judges"],
                      ["text" => "Police"],
                      ["text" => "Politicians"],
                      ["text" => "No one"]
                    ],
                    'correctAnswerId' => 168,
                    "correctAnswer" => "No one",
                    "explanation" => "No person or group is above the law. (P9)"
                  ],
                  [
                    "text" => "Which of the following lists contains four rights that Canadians have?",
                    "answers" => [
                      ["text" => "The right to go to school, to work, to have a bank account, and to travel"],
                      ["text" => "The right to be educated in either official language, to vote, to apply for a Canadian passport, and to enter and leave Canada freely"],
                      ["text" => "The right to travel, to live anywhere, to work anywhere, and to get married"],
                      ["text" => "The right to have a job, to vote, to drive, and to go to school"]
                    ],
                    'correctAnswerId' => 170,
                    "correctAnswer" => "The right to be educated in either official language, to vote, to apply for a Canadian passport, and to enter and leave Canada freely",
                    "explanation" => "The rights to receive education in either official language, to vote, to apply for a Canadian passport, and to freely enter and leave Canada are addressed in Mobility Rights, Aboriginal Peoples’ Rights, Official Language Rights and Minority Language Educational Rights, and Multiculturalism. (P8)"
                  ],
                  [
                    "text" => "What does “official language rights and minority language educational rights” mean?",
                    "answers" => [
                      ["text" => "English is more important than French in Canada"],
                      ["text" => "A French is more important in Quebec and English is more important in other provinces"],
                      ["text" => "All languages have equal status in Canada's government"],
                      ["text" => "French and English have equal status in Parliament and throughout the government"]
                    ],
                    'correctAnswerId' => 176,
                    "correctAnswer" => "French and English have equal status in Parliament and throughout the government",
                    "explanation" => "Official Language Rights and Minority Language Educational Rights – French and English have equal status in Parliament and throughout the government. (P8)"
                  ],
                  [
                    "text" => "What are some of the rights and privileges of a Canadian citizen?",
                    "answers" => [
                      ["text" => "The right to be a candidate"],
                      ["text" => "The right to vote in federal provincial and territorial election"],
                      ["text" => "The right to enter remain in or leave Canada"],
                      ["text" => "All of the above"]
                    ],
                    'correctAnswerId' => 180,
                    "correctAnswer" => "All of the above",
                    "explanation" => "Canadians have the right to run for office, to vote in federal, provincial, and territorial elections, and to enter, remain in, or leave Canada. (P8)"
                  ],
                  [
                    "text" => "What part of the Constitution legally protects basic rights and freedom of Canadians?",
                    "answers" => [
                      ["text" => "The Canada Charter of responsibilities"],
                      ["text" => "The Canada Charter of Rights and Freedoms"],
                      ["text" => "The Canadian Charter of Rights and Freedoms"],
                      ["text" => "The Canadian Charter of Rights and free will"]
                    ],
                    'correctAnswerId' => 183,
                    "correctAnswer" => "The Canadian Charter of Rights and Freedoms",
                    "explanation" => "The Constitution of Canada was amended in 1982 to entrench the Canadian Charter of Rights and Freedoms, which begins with the words, “Whereas Canada is founded upon principles that recognize the supremacy of God and the rule of law.” (P8)"
                  ],
                  [
                    "text" => "Canadians work hard to respect:",
                    "answers" => [
                      ["text" => "Marxism"],
                      ["text" => "Pluralism"],
                      ["text" => "Capitalism"],
                      ["text" => "Individualism"]
                    ],
                    'correctAnswerId' => 186,
                    "correctAnswer" => "Pluralism",
                    "explanation" => "Canadians celebrate the gift of one another’s presence and work hard to respect pluralism and live in harmony. (P8)"
                  ],
                  [
                    "text" => "What is a fundamental characteristic of Canadian Heritage and identity?",
                    "answers" => [
                      ["text" => "Maple syrup"],
                      ["text" => "Multiculturalism"],
                      ["text" => "Habeas corpus"],
                      ["text" => "Hockey"]
                    ],
                    'correctAnswerId' => 190,
                    "correctAnswer" => "Multiculturalism",
                    "explanation" => "Multiculturalism – A fundamental characteristic of the Canadian heritage and identity. Canadians celebrate the gift of one another’s presence and work hard to respect pluralism and live in harmony. (P8)"
                  ],
                  [
                    "text" => "Which of the following represents protecting and enjoying the Heritage and environment in Canada?",
                    "answers" => [
                      ["text" => "Government responsibilities"],
                      ["text" => "Citizenship responsibilities and the laws of Canada"],
                      ["text" => "Laws of Canada"],
                      ["text" => "Citizenship responsibilities"]
                    ],
                    'correctAnswerId' => 196,
                    "correctAnswer" => "Citizenship responsibilities",
                    "explanation" => "A fundamental characteristic of the Canadian heritage and identity. Canadians celebrate the gift of one another’s presence and work hard to respect pluralism and live in harmony. (P9)"
                  ],
                  [
                    "text" => "How are your rights and freedoms protected?",
                    "answers" => [
                      ["text" => "By the Charter of Rights and Freedoms"],
                      ["text" => "By the king"],
                      ["text" => "By citizenship"],
                      ["text" => "None of the above"]
                    ],
                    'correctAnswerId' => 197,
                    "correctAnswer" => "By the Charter of Rights and Freedoms",
                    "explanation" => "The Constitution of Canada was amended in 1982 to entrench the Canadian Charter of Rights and Freedoms, which begins with the words, “Whereas Canada is founded upon principles that recognize the supremacy of God and the rule of law.” (P8)"
                  ],
                  [
                    "text" => "Name one source of Canadian law",
                    "answers" => [
                      ["text" => "United States common law"],
                      ["text" => "Irish common law"],
                      ["text" => "English common law"],
                      ["text" => "The military code of France"]
                    ],
                    'correctAnswerId' => 203,
                    "correctAnswer" => "English common law",
                    "explanation" => "Canadian law is derived from a variety of sources, including laws passed by Parliament and provincial legislatures, English common law, the French civil code, and the unwritten constitution that we inherited from the United Kingdom."
                  ],
                  [
                    "text" => "Who is the King of Canada?",
                    "answers" => [
                      ["text" => "Her Majesty Queen Elizabeth the Second"],
                      ["text" => "His Majesty King Charles the Third"],
                      ["text" => "Her Majesty Queen Anne the Second"],
                      ["text" => "Her Majesty Queen Victoria"]
                    ],
                    'correctAnswerId' => 206,
                    "correctAnswer" => "His Majesty King Charles the Third",
                    "explanation" => "Canada is a constitutional monarchy whereby the Sovereign is Canada’s Head of State. King Charles III automatically became Sovereign of Canada on the passing of his predecessor, Queen Elizabeth II."
                  ],
                  [
                    "text" => "Who proclaimed the amended Constitution of Canada in 1982?",
                    "answers" => [
                      ["text" => "The people of Canada"],
                      ["text" => "The Prime Minister"],
                      ["text" => "The Senate"],
                      ["text" => "Queen Elizabeth II"]
                    ],
                    'correctAnswerId' => 212,
                    "correctAnswer" => "Queen Elizabeth II",
                    "explanation" => "The Canadian Constitution was amended in 1982 to include the Canadian Charter of Rights and Freedoms."
                  ],
                  [
                    "text" => "When called to do so, serving on a jury is:",
                    "answers" => [
                      ["text" => "An option"],
                      ["text" => "A legal requirement"]
                    ],
                    'correctAnswerId' => 214,
                    "correctAnswer" => "A legal requirement",
                    "explanation" => "When called to do so, you are legally required to serve. Serving on a jury is a privilege that makes the justice system work as it depends on impartial juries made up of citizens."
                  ],
                  [
                    "text" => "Obeying the law is:",
                    "answers" => [
                      ["text" => "A right"],
                      ["text" => "A responsibility"]
                    ],
                    'correctAnswerId' => 216,
                    "correctAnswer" => "A responsibility",
                    "explanation" => "One of Canada’s founding principles is the rule of law. Individuals and governments are regulated by laws and not by arbitrary actions. No person or group is above the law."
                  ],
                  [
                    "text" => "What is a great way to make acquaintances, create contacts, and learn useful skills?",
                    "answers" => [
                      ["text" => "Volunteer"],
                      ["text" => "Serve on a jury"],
                      ["text" => "Pluralism"],
                      ["text" => "Serve in the Air Force"]
                    ],
                    'correctAnswerId' => 217,
                    "correctAnswer" => "Volunteer",
                    "explanation" => "Millions of volunteers freely donate their time to help others without pay. Helping people in need, assisting at your child’s school, volunteering at a food bank or other charity, or encouraging newcomers to integrate are all excellent ways to gain useful skills and develop friends and contacts."
                  ],
                  [
                    "text" => "What are Mobility Rights?",
                    "answers" => [
                      ["text" => "Canadians are free to enter and leave the nation at will, live and work anywhere they choose, and apply for passports."],
                      ["text" => "Canadians are free to enter and leave the nation at will and live and work anywhere they choose"],
                      ["text" => "Canadians may enter and leave the country freely, and apply for passports"],
                      ["text" => "Canadians have freedom of speech"]
                    ],
                    'correctAnswerId' => 221,
                    "correctAnswer" => "Canadians are free to enter and leave the nation at will, live and work anywhere they choose, and apply for passports.",
                    "explanation" => "Canadians can live and work anywhere they choose in Canada, enter and leave the country freely, and apply for a passport."
                  ],
                  [
                    "text" => "Which statement correctly reflects the relationship between the Charter and Aboriginal peoples' rights as described in the paragraph?",
                    "answers" => [
                      ["text" => "The Charter guarantees rights that override any treaty or other rights of Aboriginal peoples."],
                      ["text" => "Aboriginal peoples' rights and freedoms are unaffected by the rights guaranteed in the Charter."],
                      ["text" => "The Charter does not guarantee any rights to Aboriginal peoples."],
                      ["text" => "The rights of Aboriginal peoples are secondary to the rights guaranteed in the Charter."]
                    ],
                    'correctAnswerId' => 226,
                    "correctAnswer" => "Aboriginal peoples' rights and freedoms are unaffected by the rights guaranteed in the Charter.",
                    "explanation" => "Aboriginal Peoples’ Rights — The rights guaranteed in the Charter will not adversely affect any treaty or other rights or freedoms of Aboriginal peoples. (P8)"
                  ]
                ]
              ],
            ],
            'topics' => [
              ['name' => 'Rights and Responsibilities'],
              ['name' => 'The Timeline'],
            ],
            'flashcards' => [
              [
                'question' => 'What are the two guiding principles of Canada?',
                'answer' => 'The supremacy of God and the rule of law',
                'explanation' => '“Whereas Canada is founded upon principles that recognize the supremacy of God and the rule of law.” This phrase underlines the importance of religious traditions to Canadian society and the dignity and worth of the human person.'
              ],
              [
                'question' => 'What is the origin of Habeas corpus?',
                'answer' => 'English common law',
                'explanation' => 'Habeas corpus, the right to challenge unlawful detention by the state, comes from English common law.'
              ],
              [
                'question' => 'What is a noble way to contribute to Canada and an excellent career choice?',
                'answer' => 'Serve in the Canadian Forces',
                'explanation' => 'There is no compulsory military service in Canada. However, serving in the regular Canadian Forces (navy, army and air force) is a noble way to contribute to Canada and an excellent career choice (www.forces.ca).'
              ],
              [
                'question' => 'In Canada, who do we profess loyalty to?',
                'answer' => 'To a person who represents all Canadians',
                'explanation' => 'In Canada, we profess our loyalty to a person who represents all Canadians and not to a document such as a constitution, a banner such as a flag, or a geopolitical entity such as a country. In our constitutional monarchy, these elements are encompassed by the Sovereign (Queen or King).'
              ],
              [
                'question' => 'What type of government is there in Canada?',
                'answer' => 'Canada has a constitutional monarchy.',
                'explanation' => 'Canada is a constitutional monarchy, a parliamentary democracy and a federal state. Canadians are bound together by a shared commitment to the rule of law and to the institutions of parliamentary government.'
              ],
              [
                'question' => 'What is "Habeas corpus"?',
                'answer' => 'The right to challenge unlawful detention by the state',
                'explanation' => 'Habeas corpus, the right to challenge unlawful detention by the state, comes from English common law.'
              ],
              [
                'question' => 'The "right to contest unlawful detention by the state" is known as what?',
                'answer' => 'Habeas corpus',
                'explanation' => 'Habeas corpus, the right to challenge unlawful detention by the state, comes from English common law.'
              ],
              [
                'question' => 'Which section of the Constitution summarize fundamental freedoms while also setting out additional rights?',
                'answer' => 'The Canadian Charter of Rights and Freedoms',
                'explanation' => 'The Charter attempts to summarize fundamental freedoms while also setting out additional rights which includes:
            - Mobility Rights
            - Aboriginal Peoples’ Rights
            - Official Language Rights
            - Multiculturalism'
              ],
              [
                'question' => 'What are Mobility Rights?',
                'answer' => 'Canadians are free to enter and leave the nation at will, live and work anywhere they choose, and apply for passports.',
                'explanation' => 'Canadians can live and work anywhere they choose in Canada, enter and leave the country freely, and apply for a passport.'
              ],
              [
                'question' => 'Why can a woman have the same education as any guy as a new immigrant to Canada?',
                'answer' => 'Because in Canada, men and women are equal under the law',
                'explanation' => 'In Canada, men and women are equal under the law. Canada’s openness and generosity do not extend to barbaric cultural practices that tolerate spousal abuse.'
              ],
              [
                'question' => 'Which elections as a Canadian citizen are you required to participate in?',
                'answer' => 'Federal, provincial or territorial and local elections',
                'explanation' => 'Living in a democracy, Canadian citizens have the right and the responsibility to participate in making decisions that affect them. It is important for Canadians aged 18 or more to participate in their democracy by voting in federal, provincial or territorial and municipal elections.'
              ],
              [
                'question' => 'When was Magna Carta signed?',
                'answer' => '1215',
                'explanation' => 'Magna Carta (also known as the Great Charter of Freedoms) was signed in 1215 in England.'
              ],
              [
                'question' => 'What is "Magna Carta"?',
                'answer' => 'The Great Charter of Freedoms',
                'explanation' => 'Magna Carta is another name for "The Great Charter of Freedoms" which was signed in the year 1215.'
              ],
              [
                'question' => 'Who is the King of Canada?',
                'answer' => 'His Majesty King Charles the Third',
                'explanation' => 'Canada is a constitutional monarchy whereby the Sovereign is Canada’s Head of State. King Charles III automatically became Sovereign of Canada on the passing of his predecessor, Queen Elizabeth II.'
              ],
              [
                'question' => 'Name one source of Canadian law',
                'answer' => 'English common law',
                'explanation' => 'Canadian law is derived from a variety of sources, including laws passed by Parliament and provincial legislatures, English common law, the French civil code, and the unwritten constitution that we inherited from the United Kingdom.'
              ],
              [
                'question' => 'Who is permitted unrestricted entry and exit from Canada?',
                'answer' => 'Canadian citizens',
                'explanation' => 'Canadians can live and work anywhere they choose in Canada, enter and leave the country freely, and apply for a passport.'
              ],
              [
                'question' => 'What does the Great Charter of Freedom include?',
                'answer' => 'Freedom of conscience and religion',
                'explanation' => 'Magna Carta (also known as the Great Charter of Freedoms) includes:
            - Freedom of conscience and religion;
            - Freedom of thought, belief, opinion and expression, including freedom of speech and of the press.
            - Freedom of peaceful assembly
            - Freedom of association'
              ],
              [
                'question' => 'What is a great way to make acquaintances, create contacts, and learn useful skills?',
                'answer' => 'Volunteer',
                'explanation' => 'Millions of volunteers freely donate their time to help others without pay. Helping people in need, assisting at your child’s school, volunteering at a food bank or other charity, or encouraging newcomers to integrate are all excellent ways to gain useful skills and develop friends and contacts.'
              ],
              [
                'question' => 'What does "equality of men and women" mean in Canada?',
                'answer' => 'Both Men and women are equal under the law',
                'explanation' => 'In Canada, men and women are equal under the law. Canada’s openness and generosity do not extend to barbaric cultural practices that tolerate spousal abuse.'
              ],
              [
                'question' => 'How long have settlers and immigrants contributed to the diversity and wealth of Canada?',
                'answer' => '400 Years',
                'explanation' => 'For 400 years, settlers and immigrants have contributed to the diversity and richness of Canada, which is built on a proud history and a strong identity.'
              ],
              [
                'question' => 'Who proclaimed the amended Constitution of Canada in 1982?',
                'answer' => 'Queen Elizabeth II',
                'explanation' => 'The Canadian Constitution was amended in 1982 to include the Canadian Charter of Rights and Freedoms.'
              ]
            ]
          ],
          [
            'image' => '/images/chap 4.png',
            'name' => 'Chapter 3',
            'title' => 'Who We are',
            'description' => 'Learn about what Canada is known for: its diverse population, multiculturalism, Heritage, inclusive society, and more.',
            'questions' => 20,
            'mistakes' => 5,
            'step' => 2,
            'tests' => [
              [
                'name' => 'Practice Test 3.1',
                'info' => 'Practice Test 3.1',
                'questions' => [
                  [
                    "text" => "Which province has the most bilingual Canadians?",
                    "answers" => [
                      ["text" => "British Columbia"],
                      ["text" => "Quebec"],
                      ["text" => "Ontario"],
                      ["text" => "Prince Edward Island"]
                    ],
                    'correctAnswerId' => 230,
                    "correctAnswer" => "Quebec",
                    "explanation" => "(P11,47)"
                  ],
                  [
                    "text" => "Where is Canada located?",
                    "answers" => [
                      ["text" => "Central America"],
                      ["text" => "Europe"],
                      ["text" => "North America"],
                      ["text" => "South America"]
                    ],
                    'correctAnswerId' => 235,
                    "correctAnswer" => "North America",
                    "explanation" => "Canada is known around the world as a strong and free country. Canadians are proud of their unique identity. We have inherited the oldest continuous constitutional tradition in the world. We are the only constitutional monarchy in North America. (P10)"
                  ],
                  [
                    "text" => "Who are the Metis?",
                    "answers" => [
                      ["text" => "The distinct Aboriginal people of Atlantic Canada"],
                      ["text" => "A people of mixed Inuit or First Nations ancestry most of whom live on the Prairies"],
                      ["text" => "First Nations people speaking the Mischif dialect"],
                      ["text" => "A distinct people of mixed Aboriginal and European ancestry"]
                    ],
                    'correctAnswerId' => 240,
                    "correctAnswer" => "A distinct people of mixed Aboriginal and European ancestry",
                    "explanation" => "The Metis are a distinct people of mixed Aboriginal and European ancestry, the majority of whom live in the Prairie provinces. (P11)"
                  ],
                  [
                    "text" => "Where do the majority Metis live in Canada?",
                    "answers" => [
                      ["text" => "Central Canada"],
                      ["text" => "The North"],
                      ["text" => "Prairie Provinces"],
                      ["text" => "The Maritimes"]
                    ],
                    'correctAnswerId' => 243,
                    "correctAnswer" => "Prairie Provinces",
                    "explanation" => "The Metis are a distinct people of mixed Aboriginal and European ancestry, the majority of whom live in the Prairie provinces. (P11)"
                  ],
                  [
                    "text" => "Who are the Aboriginal peoples in Canada?",
                    "answers" => [
                      ["text" => "The first settlers of Newfoundland"],
                      ["text" => "The first European settlers to arrive in Canada"],
                      ["text" => "The descendants of the first Australian immigrants to Canada"],
                      ["text" => "The first inhabitants of Canada"]
                    ],
                    'correctAnswerId' => 248,
                    "correctAnswer" => "The first inhabitants of Canada",
                    "explanation" => "The ancestors of Aboriginal peoples are believed to have migrated from Asia many thousands of years ago. They were well established here long before explorers from Europe first came to North America. (P10)"
                  ],
                  [
                    "text" => "Who are the Acadians?",
                    "answers" => [
                      ["text" => "English-speaking refugees who settled in Ontario"],
                      ["text" => "The descendants of French colonists who began settling in what are now the Maritime Provinces in 1604."],
                      ["text" => "French-speaking Catholics who live in Ontario"],
                      ["text" => "Aboriginal people of the Arctic."]
                    ],
                    'correctAnswerId' => 252,
                    "correctAnswer" => "The descendants of French colonists who began settling in what are now the Maritime Provinces in 1604.",
                    "explanation" => "The Acadians are the descendants of French colonists who began settling in what are now the Maritime provinces in 1604. (P11)"
                  ],
                  [
                    "text" => "What principles out of the following is Canada's constitution based on?",
                    "answers" => [
                      ["text" => "Multiculturalism peace and Order"],
                      ["text" => "Peace order and good government"],
                      ["text" => "War order and good government"],
                      ["text" => "Mobility rights order and good government"]
                    ],
                    'correctAnswerId' => 254,
                    "correctAnswer" => "Peace, order and good government",
                    "explanation" => "Our institutions uphold a commitment to Peace, Order and Good Government, a key phrase in Canada’s original constitutional document in 1867, the British North America Act. (P10)"
                  ],
                  [
                    "text" => "What does the word “Inuit” mean?",
                    "answers" => [
                      ["text" => "“Eskimo” in the Inuktitut language."],
                      ["text" => "“Home” in English."],
                      ["text" => "“The people” in the Inuktitut language."],
                      ["text" => "“The Arctic Land” in Inuktitut language."]
                    ],
                    'correctAnswerId' => 259,
                    "correctAnswer" => "“The people” in the Inuktitut language",
                    "explanation" => "The Inuit, which means “the people” in the Inuktitut language, live in small, scattered communities across the Arctic. (P11)"
                  ],
                  [
                    "text" => "Which group of Aboriginal peoples has the largest population in Canada?",
                    "answers" => [
                      ["text" => "Acadians"],
                      ["text" => "First Nations"],
                      ["text" => "Indians"],
                      ["text" => "Metis"]
                    ],
                    'correctAnswerId' => 262,
                    "correctAnswer" => "First Nations",
                    "explanation" => "About 65% of the Aboriginal people are First Nations, while 30% are Metis and 4% Inuit. (P11)"
                  ],
                  [
                    "text" => "To which of the following communities do the majority of Canadians belong?",
                    "answers" => [
                      ["text" => "Christian"],
                      ["text" => "Jewish"],
                      ["text" => "Muslim"],
                      ["text" => "Hindu"]
                    ],
                    'correctAnswerId' => 265,
                    "correctAnswer" => "Christian",
                    "explanation" => "The great majority of Canadians identify as Christians. (P13)"
                  ],
                  [
                    "text" => "The ancestors of the Aboriginals are believed to have migrated from which of the following continents?",
                    "answers" => [
                      ["text" => "Asia"],
                      ["text" => "America"],
                      ["text" => "Europe"],
                      ["text" => "Australia"]
                    ],
                    'correctAnswerId' => 269,
                    "correctAnswer" => "Asia",
                    "explanation" => "The ancestors of Aboriginal peoples are believed to have migrated from Asia many thousands of years ago. (P10)"
                  ],
                  [
                    "text" => "Where have most immigrants come from since the 1970s?",
                    "answers" => [
                      ["text" => "Asia"],
                      ["text" => "England"],
                      ["text" => "France"],
                      ["text" => "USA"]
                    ],
                    'correctAnswerId' => 273,
                    "correctAnswer" => "Asia",
                    "explanation" => "Since the 1970s, most immigrants have come from Asian countries. (P12)"
                  ],
                  [
                    "text" => "Which of the following are the three founding peoples of Canada?",
                    "answers" => [
                      ["text" => "American, French and British"],
                      ["text" => "Aboriginal, French and British"],
                      ["text" => "French, American and Indian"],
                      ["text" => "British, American and Aboriginal"]
                    ],
                    'correctAnswerId' => 278,
                    "correctAnswer" => "Aboriginal, French and British",
                    "explanation" => "To understand what it means to be Canadian, it is important to know about our three founding peoples – Aboriginal, French and British. (P10)"
                  ],
                  [
                    "text" => "From whom are the Acadians descended?",
                    "answers" => [
                      ["text" => "Metis and Inuit"],
                      ["text" => "First Nations who began settling in what are now the Prairie Provinces in 1600s"],
                      ["text" => "British colonists who began settling in what are now the Maritime Provinces in 1604"],
                      ["text" => "French colonists who began settling in what are now the Maritime Provinces in 1604."]
                    ],
                    'correctAnswerId' => 284,
                    "correctAnswer" => "French colonists who began settling in what are now the Maritime Provinces in 1604.",
                    "explanation" => "The Acadians are the descendants of French colonists who began settling in what are now the Maritime provinces in 1604. (P11)"
                  ],
                  [
                    "text" => "Which countries fought in the War of 1812?",
                    "answers" => [
                      ["text" => "United Kingdom and United States of America"],
                      ["text" => "France and United Kingdom"],
                      ["text" => "Canada and United States of America"],
                      ["text" => "France, Great Britain and United States of America"]
                    ],
                    'correctAnswerId' => 285,
                    "correctAnswer" => "United Kingdom and United States of America",
                    "explanation" => "Believing it would be easy to conquer Canada, the United States launched an invasion in June 1812. The Americans were mistaken. Canadian volunteers and First Nations, including Shawnee led by Chief Tecumseh, supported British soldiers in Canada’s defence. (P17)"
                  ],
                  [
                    "text" => "Who are the Quebecers?",
                    "answers" => [
                      ["text" => "European settlers in the 1600s"],
                      ["text" => "Descendants of the French colonists"],
                      ["text" => "Descendants of the anglophones"],
                      ["text" => "People of Quebec"]
                    ],
                    'correctAnswerId' => 292,
                    "correctAnswer" => "People of Quebec",
                    "explanation" => "Quebecers are the people of Quebec, the vast majority French-speaking. (P11)"
                  ],
                  [
                    "text" => "Where do Inuit people live?",
                    "answers" => [
                      ["text" => "Ontario"],
                      ["text" => "Reserve Land"],
                      ["text" => "In scattered communities across the Arctic"],
                      ["text" => "Prairie Provinces"]
                    ],
                    'correctAnswerId' => 295,
                    "correctAnswer" => "In scattered communities across the Arctic",
                    "explanation" => "The Inuit, which means “the people” in the Inuktitut language, live in small, scattered communities across the Arctic. (P10)"
                  ],
                  [
                    "text" => "What is the largest religious affiliation in Canada?",
                    "answers" => [
                      ["text" => "Roman Catholic"],
                      ["text" => "Hindu"],
                      ["text" => "Muslim"],
                      ["text" => "Jewish"]
                    ],
                    'correctAnswerId' => 297,
                    "correctAnswer" => "Roman Catholic",
                    "explanation" => "The largest religious affiliation is Catholic, followed by various Protestant churches. (P13)"
                  ],
                  [
                    "text" => "What are the Metis people a mixture of?",
                    "answers" => [
                      ["text" => "Aboriginal and European ancestry"],
                      ["text" => "European and American ancestry"],
                      ["text" => "American and Indian ancestry"],
                      ["text" => "Inuit and Indian ancestry"]
                    ],
                    'correctAnswerId' => 301,
                    "correctAnswer" => "Aboriginal and European ancestry",
                    "explanation" => "The Metis are a distinct people of mixed Aboriginal and European ancestry, the majority of whom live in the Prairie provinces. (P11)"
                  ],
                  [
                    "text" => "Who were the English-speaking settlers?",
                    "answers" => [
                      ["text" => "Australians and British"],
                      ["text" => "English, Irish and French"],
                      ["text" => "English, Welsh, Scottish and Metis"],
                      ["text" => "English, Welsh, Scottish and Irish"]
                    ],
                    'correctAnswerId' => 308,
                    "correctAnswer" => "English, Welsh, Scottish and Irish",
                    "explanation" => "The basic way of life in English-speaking areas was established by hundreds of thousands of English, Welsh, Scottish and Irish settlers, soldiers and migrants from the 1600s to the 20th century."
                  ]
                ]

              ],
              [
                'name' => 'Practice Test 3.2',
                'info' => 'Practice Test 3.2',
                'questions' => [
                  [
                    "text" => "Who were the first people (Aboriginal people) living in Canada?",
                    "answers" => [
                      ["text" => "American and British"],
                      ["text" => "Spanish"],
                      ["text" => "French and Chinese"],
                      ["text" => "Indians (First Nations) and Inuits (Eskimos)"]
                    ],
                    'correctAnswerId' => 312,
                    "correctAnswer" => "Indians (First Nations) and Inuits (Eskimos)",
                    "explanation" => "About 65% of the Aboriginal people are First Nations, while 30% are Metis and 4% Inuit. (P11)"
                  ],
                  [
                    "text" => "What are the three main groups of Aboriginal peoples?",
                    "answers" => [
                      ["text" => "Metis, Inuit and United Empire loyalists"],
                      ["text" => "Acadians, Metis and First Nations"],
                      ["text" => "Early French settlers, Metis and Indian"],
                      ["text" => "Metis, First Nations and Inuit"]
                    ],
                    'correctAnswerId' => 316,
                    "correctAnswer" => "Metis, First Nations and Inuit",
                    "explanation" => "About 65% of the Aboriginal people are First Nations, while 30% are Metis and 4% Inuit. (P11)"
                  ],
                  [
                    "text" => "What poets and songwriters hailed Canada?",
                    "answers" => [
                      ["text" => "“Peace, Order and Good Government”"],
                      ["text" => "The Great Outdoors"],
                      ["text" => "The great Dominion"],
                      ["text" => "The land of the Brave"]
                    ],
                    'correctAnswerId' => 319,
                    "correctAnswer" => "The great Dominion",
                    "explanation" => "A belief in ordered liberty, enterprise, hard work and fair play has enabled Canadians to build a prosperous society in a rugged environment from our Atlantic shores to the Pacific Ocean and to the Arctic Circle – so much so that poets and songwriters have hailed Canada as the “Great Dominion” (P10)."
                  ],
                  [
                    "text" => "Which of the following was a key phrase in the British North America Act Canada's original constitutional document in 1867?",
                    "answers" => [
                      ["text" => "Geopolitical entity"],
                      ["text" => "Trade and Communications"],
                      ["text" => "Peace, order and good government"],
                      ["text" => "Discipline, education and good public"]
                    ],
                    'correctAnswerId' => 323,
                    "correctAnswer" => "Peace, order and good government",
                    "explanation" => "Our institutions uphold a commitment to Peace, Order and Good Government, a key phrase in Canada’s original constitutional document in 1867, the British North America Act. (P10)"
                  ],
                  [
                    "text" => "Who are the Quebecois?",
                    "answers" => [
                      ["text" => "All the french-speaking people in Canada are called Quebecois."],
                      ["text" => "They form a nation within a United Canada."],
                      ["text" => "They are descendants of British settlers who live in Quebec."],
                      ["text" => "They are the Canadians who only speak French."]
                    ],
                    'correctAnswerId' => 326,
                    "correctAnswer" => "They form a nation within a United Canada.",
                    "explanation" => "The House of Commons recognized in 2006 that the Quebecois form a nation within a united Canada. (P11)"
                  ],
                  [
                    "text" => "Maria is a descendant of French colonists in the maritime province. What is she called?",
                    "answers" => [
                      ["text" => "Metis"],
                      ["text" => "Acadian"],
                      ["text" => "Inuit"],
                      ["text" => "Indian"]
                    ],
                    'correctAnswerId' => 330,
                    "correctAnswer" => "Acadian",
                    "explanation" => "The Acadians are the descendants of French colonists who began settling in what are now the Maritime provinces in 1604. (P11)"
                  ],
                  [
                    "text" => "Why is the Constitution Act of 1982 important in Canadian history?",
                    "answers" => [
                      ["text" => "Canada can modify the Constitution without the approval from the British government"],
                      ["text" => "The queen or King has more power in Canadian government"],
                      ["text" => "It lets Canadians enjoy more freedom"],
                      ["text" => "It made changes to the Citizenship Act"]
                    ],
                    'correctAnswerId' => 333,
                    "correctAnswer" => "Canada can modify the Constitution without the approval from the British government",
                    "explanation" => "The Constitution Act of 1982 allowed Canada to amend its own Constitution without requiring approval from the British government. (P12)"
                  ],
                  [
                    "text" => "What does the Great Charter of Freedom include?",
                    "answers" => [
                      ["text" => "Aboriginal people's rights"],
                      ["text" => "Employment rights"],
                      ["text" => "Freedom of conscience and religion"],
                      ["text" => "Freedom from taxes"]
                    ],
                    'correctAnswerId' => 339,
                    "correctAnswer" => "Freedom of conscience and religion",
                    "explanation" => "The Great Charter of Freedoms includes freedom of conscience and religion; freedom of thought, belief, opinion and expression, including freedom of speech and of the press; freedom of peaceful assembly; and freedom of association. (P11)"
                  ],
                  [
                    "text" => "What is the significance of serving on a jury?",
                    "answers" => [
                      ["text" => "It makes the justice system work by eliminating the need of judges"],
                      ["text" => "It makes the justice system work as it depends on impartial juries made up of citizens"],
                      ["text" => "Your police record is cleared afterwards"],
                      ["text" => "You get paid very generously"]
                    ],
                    'correctAnswerId' => 342,
                    "correctAnswer" => "It makes the justice system work as it depends on impartial juries made up of citizens",
                    "explanation" => "Serving on a jury is a privilege that makes the justice system work as it depends on impartial juries made up of citizens. When called to do so, you are legally required to serve. (P14)"
                  ],
                  [
                    "text" => "The Great Charter of Freedoms was signed in:",
                    "answers" => [
                      ["text" => "Ireland"],
                      ["text" => "England"],
                      ["text" => "France"],
                      ["text" => "Canada"]
                    ],
                    'correctAnswerId' => 346,
                    "correctAnswer" => "England",
                    "explanation" => "Magna Carta (also known as the Great Charter of Freedoms) was signed in the year 1215 in England. (P11)"
                  ],
                  [
                    "text" => "Who are generally referred to as 'English Canadians'?",
                    "answers" => [
                      ["text" => "French Immigrants"],
                      ["text" => "The Anglophones"],
                      ["text" => "The British People"],
                      ["text" => "The Aboriginal People"]
                    ],
                    'correctAnswerId' => 350,
                    "correctAnswer" => "The Anglophones",
                    "explanation" => "Generations of pioneers and builders of British origins, as well as other groups, invested and endured hardship in laying the foundations of our country. This helps explain why Anglophones (English speakers) are generally referred to as English Canadians. (P15)"
                  ],
                  [
                    "text" => "When did the federal government place many Aboriginal children in residential schools?",
                    "answers" => [
                      ["text" => "From the 1700s until the 1980s"],
                      ["text" => "From the 1800s until the 1980s"],
                      ["text" => "From the 1700s until the 1970s"],
                      ["text" => "From the beginning of the 1900s until the 1980s"]
                    ],
                    'correctAnswerId' => 354,
                    "correctAnswer" => "From the 1800s until the 1980s",
                    "explanation" => "From the 1800s until the 1980s, the federal government placed many Aboriginal children in residential schools to educate and assimilate them into mainstream Canadian culture. The schools were poorly funded and inflicted hardship on the students. Ottawa formally apologized to the former students. (P17)"
                  ],
                  [
                    "text" => "In Canada, how are individuals and governments regulated?",
                    "answers" => [
                      ["text" => "By force"],
                      ["text" => "By traditions"],
                      ["text" => "By arbitrary actions"],
                      ["text" => "By laws"]
                    ],
                    'correctAnswerId' => 360,
                    "correctAnswer" => "By laws",
                    "explanation" => "One of Canada’s founding principles is the rule of law. Individuals and governments are regulated by laws and not by arbitrary actions. No person or group is above the law. (P17)"
                  ],
                  [
                    "text" => "Who is Marjorie Turner-Bailey?",
                    "answers" => [
                      ["text" => "The first Canadian female athlete"],
                      ["text" => "An Olympian and descendant of black Loyalists"],
                      ["text" => "A famous Canadian settler"],
                      ["text" => "The first woman to become Prime Minister"]
                    ],
                    'correctAnswerId' => 362,
                    "correctAnswer" => "An Olympian and descendant of black Loyalists",
                    "explanation" => "Olympian Marjorie Turner-Bailey of Nova Scotia is a descendant of black Loyalists, escaped slaves and freed men and women of African origin who in the 1780s fled to Canada from America, where slavery remained legal until 1863. (P19)"
                  ],
                  [
                    "text" => "What percentage of Aboriginal people are First Nations?",
                    "answers" => [
                      ["text" => "50"],
                      ["text" => "60"],
                      ["text" => "65"],
                      ["text" => "80"]
                    ],
                    'correctAnswerId' => 367,
                    "correctAnswer" => "65",
                    "explanation" => "About 65% of the Aboriginal people are First Nations, while 30% are Métis and 4% Inuit. (P11)"
                  ],
                  [
                    "text" => "Which province is the only official bilingual province?",
                    "answers" => [
                      ["text" => "Manitoba"],
                      ["text" => "Quebec"],
                      ["text" => "Alberta"],
                      ["text" => "New Brunswick"]
                    ],
                    'correctAnswerId' => 372,
                    "correctAnswer" => "New Brunswick",
                    "explanation" => "While the majority of Francophones live in the province of Quebec, one million Francophones live in Ontario, New Brunswick and Manitoba, with a smaller presence in other provinces. New Brunswick is the only officially bilingual province. (P20)"
                  ],
                  [
                    "text" => "How many Francophones are there in Canada today?",
                    "answers" => [
                      ["text" => "7 million"],
                      ["text" => "10 million"],
                      ["text" => "5 million"],
                      ["text" => "50 million"]
                    ],
                    'correctAnswerId' => 373,
                    "correctAnswer" => "7 million",
                    "explanation" => "Today, there are 18 million Anglophones—people who speak English as a first language—and seven million Francophones—people who speak French as their first language. (P20)"
                  ],
                  [
                    "text" => "The Great Charter of Freedoms is also known as:",
                    "answers" => [
                      ["text" => "Canadian Constitution"],
                      ["text" => "Habeas Corpus"],
                      ["text" => "Magna Carta"],
                      ["text" => "Dominion of Canada"]
                    ],
                    'correctAnswerId' => 379,
                    "correctAnswer" => "Magna Carta",
                    "explanation" => "Magna Carta (also known as the Great Charter of Freedoms) was signed in the year 1215 in England. (P19)"
                  ],
                  [
                    "text" => "Who are generally referred to as 'English Canadians'?",
                    "answers" => [
                      ["text" => "French Immigrants"],
                      ["text" => "The Anglophones"],
                      ["text" => "The British People"],
                      ["text" => "The Aboriginal People"]
                    ],
                    'correctAnswerId' => 382,
                    "correctAnswer" => "The Anglophones",
                    "explanation" => "Generations of pioneers and builders of British origins, as well as other groups, invested and endured hardship in laying the foundations of our country. This helps explain why Anglophones (English speakers) are generally referred to as English Canadians. (P20)"
                  ],
                  [
                    "text" => "When did the federal government place many Aboriginal children in residential schools?",
                    "answers" => [
                      ["text" => "From the 1700s until the 1980s"],
                      ["text" => "From the 1800s until the 1980s"],
                      ["text" => "From the 1700s until the 1970s"],
                      ["text" => "From the beginning of the 1900s until the 1980s"]
                    ],
                    'correctAnswerId' => 386,
                    "correctAnswer" => "From the 1800s until the 1980s",
                    "explanation" => "From the 1800s until the 1980s, the federal government placed many Aboriginal children in residential schools to educate and assimilate them into mainstream Canadian culture. The schools were poorly funded and inflicted hardship on the students. Ottawa formally apologized to the former students. (P21)"
                  ],
                  [
                    "text" => "In Canada, how are individuals and governments regulated?",
                    "answers" => [
                      ["text" => "By force"],
                      ["text" => "By traditions"],
                      ["text" => "By arbitrary actions"],
                      ["text" => "By laws"]
                    ],
                    'correctAnswerId' => 392,
                    "correctAnswer" => "By laws",
                    "explanation" => "One of Canada’s founding principles is the rule of law. Individuals and governments are regulated by laws and not by arbitrary actions. No person or group is above the law. (P21)"
                  ],
                  [
                    "text" => "Who is Marjorie Turner-Bailey?",
                    "answers" => [
                      ["text" => "The first Canadian female athlete"],
                      ["text" => "An Olympian and descendant of black Loyalists"],
                      ["text" => "A famous Canadian settler"],
                      ["text" => "The first woman to become Prime Minister"]
                    ],
                    'correctAnswerId' => 394,
                    "correctAnswer" => "An Olympian and descendant of black Loyalists",
                    "explanation" => "Olympian Marjorie Turner-Bailey of Nova Scotia is a descendant of black Loyalists, escaped slaves and freed men and women of African origin who in the 1780s fled to Canada from America, where slavery remained legal until 1863. (P22)"
                  ]
                ]

              ],
              [
                'name' => 'Practice Test 3.3',
                'info' => 'Practice Test 3.3',
                'questions' =>  [
                  [
                    'text' => 'What kind of commitment do Canadian institutions uphold?',
                    'answers' => [
                      ['text' => 'Peace, Order, and Mobility Rights'],
                      ['text' => 'Peace, Order, and Good Government'],
                      ['text' => 'Work, Order and Home Ownership'],
                      ['text' => 'Work, Order, and Good Government'],
                    ],
                    'correctAnswerId' => 398,
                    'correct_answer' => 'B',
                    'explanation' => 'Canada’s institutions uphold a commitment to Peace, Order and Good Government, a key phrase in Canada’s original constitutional document in 1867, the British North America Act.',
                  ],

                  [
                    'text' => 'Where does the majority of the Métis live?',
                    'answers' => [
                      ['text' => 'Atlantic provinces'],
                      ['text' => 'Southern provinces'],
                      ['text' => 'Northern provinces'],
                      ['text' => 'Prairie provinces'],
                    ],
                    'correctAnswerId' => 404,
                    'correct_answer' => 'D',
                    'explanation' => 'The Métis are a distinct people of mixed Aboriginal and European ancestry, the majority of whom live in the Prairie provinces. They come from both French and English-speaking backgrounds and speak their own dialect, Michif.',
                  ],

                  [
                    'text' => 'From which civilization does Canadian society stem largely from?',
                    'answers' => [
                      ['text' => 'Chinese'],
                      ['text' => 'Aboriginal'],
                      ['text' => 'Acadian'],
                      ['text' => 'English-speaking and French-speaking Christians'],
                    ],
                    'correctAnswerId' => 408,
                    'correct_answer' => 'D',
                    'explanation' => 'The great majority of Canadians identify as Christians. The largest religious affiliation is Catholic, followed by various Protestant churches. The numbers of Muslims, Jews, Hindus, Sikhs and members of other religions, as well as people who state “no religion” are also growing.',
                  ],

                  [
                    'text' => 'Anglo-Quebecers have a heritage of:',
                    'answers' => [
                      ['text' => '350 years'],
                      ['text' => '250 years'],
                      ['text' => '150 years'],
                      ['text' => '100 years'],
                    ],
                    'correctAnswerId' => 410,
                    'correct_answer' => 'B',
                    'explanation' => 'The House of Commons recognized in 2006 that the Quebecois form a nation within a united Canada. One million Anglo-Quebecers have a heritage of 250 years and form a vibrant part of the Quebec fabric.',
                  ],

                  [
                    'text' => 'What are the three responsibilities of Canadian citizenship?',
                    'answers' => [
                      ['text' => 'Being loyal to Canada, recycling all waste, and serving in the Canadian Forces.'],
                      ['text' => 'Learning both official languages, voting in elections, and belonging to a union'],
                      ['text' => 'Buying Canadian products, owning your own house, and using less water'],
                      ['text' => 'Obeying the law, taking responsibility for oneself and one\'s family, and serving on a jury'],
                    ],
                    'correctAnswerId' => 416,
                    'correct_answer' => 'D',
                    'explanation' => 'In Canada, rights come with responsibilities. These include obeying the law, taking responsibility for oneself and one’s family, and serving on a jury.',
                  ],

                  [
                    'text' => 'What is the linguistic background of the Métis population?',
                    'answers' => [
                      ['text' => 'Both French and English'],
                      ['text' => 'French'],
                      ['text' => 'Acadian'],
                      ['text' => 'English'],
                    ],
                    'correctAnswerId' => 417,
                    'correct_answer' => 'A',
                    'explanation' => 'The Métis are a distinct people of mixed Aboriginal and European ancestry, the majority of whom live in the Prairie provinces. They come from both French- and English-speaking backgrounds and speak their own dialect, Michif.',
                  ],

                  [
                    'text' => 'What is the name of the Métis dialect?',
                    'answers' => [
                      ['text' => 'Michif'],
                      ['text' => 'Inuit'],
                      ['text' => 'Acadian'],
                      ['text' => 'Frenglish'],
                    ],
                    'correctAnswerId' => 421,
                    'correct_answer' => 'A',
                    'explanation' => 'The Métis are a distinct people of mixed Aboriginal and European ancestry, the majority of whom live in the Prairie provinces. They come from both French- and English-speaking backgrounds and speak their own dialect, Michif.',
                  ],

                  [
                    'text' => 'In which province do most Francophones live?',
                    'answers' => [
                      ['text' => 'Quebec'],
                      ['text' => 'Manitoba'],
                      ['text' => 'Alberta'],
                      ['text' => 'New Brunswick'],
                    ],
                    'correctAnswerId' => 425,
                    'correct_answer' => 'A',
                    'explanation' => 'The majority of Francophones live in the province of Quebec. One million Francophones live in Ontario, New Brunswick and Manitoba, with a smaller presence in other provinces.',
                  ],

                  [
                    'text' => 'What are the three rights included in the Canadian Charter of Rights and Freedoms?',
                    'answers' => [
                      ['text' => 'Aboriginal Peoples\' rights, voting rights and official language rights'],
                      ['text' => 'Employment rights, mobility rights, and freedom rights'],
                      ['text' => 'Freedom of expression rights, property rights and fair trial rights'],
                      ['text' => 'Mobility rights, Aboriginal Peoples\' rights, and official language rights'],
                    ],
                    'correctAnswerId' => 432,
                    'correct_answer' => 'D',
                    'explanation' => 'The Charter attempts to summarize fundamental freedoms while also setting out additional rights. The most important of these include Mobility Rights, Aboriginal Peoples’ Rights, Official Language Rights and Minority Language Educational Rights and Multiculturalism.',
                  ],

                  [
                    'text' => 'Aboriginal and Treaty rights are not included in the Constitution',
                    'answers' => [
                      ['text' => 'False'],
                      ['text' => 'True'],
                    ],
                    'correctAnswerId' => 433,
                    'correct_answer' => 'A',
                    'explanation' => 'Aboriginal and treaty rights are in the Canadian Constitution. Territorial rights were first guaranteed through the Royal Proclamation of 1763 by King George III, and established the basis for negotiating treaties with the newcomers— treaties that were not always fully respected.',
                  ],
                  [
                    'text' => 'What is the meaning of the word "Inuit"?',
                    'answers' => [
                      ['text' => 'The land'],
                      ['text' => '"The people"'],
                      ['text' => 'The far North'],
                      ['text' => 'The village'],
                    ],
                    'correctAnswerId' => 436,
                    'correct_answer' => 'B',
                    'explanation' => 'The Inuit, which means “the people” in the Inuktitut language, live in small, scattered communities across the Arctic.',
                  ],

                  [
                    'text' => 'Quebecers are the descendants of what groups?',
                    'answers' => [
                      ['text' => 'French settlers from the 1600s and 1700s'],
                      ['text' => 'Metis and Inuit'],
                      ['text' => 'British colonists who began settling in the 1600s in what are now the Maritime provinces'],
                      ['text' => 'Acadians'],
                    ],
                    'correctAnswerId' => 439,
                    'correct_answer' => 'A',
                    'explanation' => 'Quebecers are the people of Quebec, the vast majority French-speaking. Most are descendants of 8,500 French settlers from the 1600s and 1700s and maintain a unique identity, culture and language.',
                  ],

                  [
                    'text' => 'What is the second most spoken non-official language in Canadian households after English?',
                    'answers' => [
                      ['text' => 'Chinese'],
                      ['text' => 'Punjabi'],
                      ['text' => 'Spanish'],
                      ['text' => 'French'],
                    ],
                    'correctAnswerId' => 443,
                    'correct_answer' => 'A',
                    'explanation' => 'Non-official languages are widely spoken in Canadian homes. Chinese languages are the second most-spoken at home, after English, in two of Canada’s biggest cities. In Vancouver, 13% of the population speak Chinese languages at home; in Toronto, the number is 7%.',
                  ],

                  [
                    'text' => 'In Canada, gay and lesbian individuals are fully protected and treated equally under the law, which includes having access to civil marriage.',
                    'answers' => [
                      ['text' => 'False'],
                      ['text' => 'True'],
                    ],
                    'correctAnswerId' => 448,
                    'correct_answer' => 'B',
                    'explanation' => 'Canada’s diversity includes gay and lesbian Canadians, who enjoy the full protection of and equal treatment under the law, including access to civil marriage. Together, these diverse groups, sharing a common Canadian identity, make up today’s multicultural society.',
                  ],

                  [
                    'text' => 'How many English speakers are there in Canada today?',
                    'answers' => [
                      ['text' => '5 million'],
                      ['text' => '50 million'],
                      ['text' => '18 million'],
                      ['text' => '10 million'],
                    ],
                    'correctAnswerId' => 451,
                    'correct_answer' => 'C',
                    'explanation' => 'Today, there are 18 million Anglophones—people who speak English as a first language—and seven million Francophones—people who speak French as their first language.',
                  ],

                  [
                    'text' => 'During the war between Britain and France, how many Acadians were forced to leave their homeland?',
                    'answers' => [
                      ['text' => 'About half'],
                      ['text' => 'More than two thirds'],
                      ['text' => 'About one-third'],
                      ['text' => 'All of them'],
                    ],
                    'correctAnswerId' => 454,
                    'correct_answer' => 'B',
                    'explanation' => 'Between 1755 and 1763, during the war between Britain and France, more than two-thirds of the Acadians were deported from their homeland.',
                  ],

                  [
                    'text' => 'How many First Nations people reside on reserve land presently?',
                    'answers' => [
                      ['text' => 'About half'],
                      ['text' => 'About two thirds'],
                      ['text' => 'About one third'],
                      ['text' => '1'],
                    ],
                    'correctAnswerId' => 475,
                    'correct_answer' => 'A',
                    'explanation' => 'Today, about half of First Nations people live on reserve land in about 600 communities while the other half live off-reserve, mainly in urban centers.',
                  ],

                  [
                    'text' => 'With which words does the Canadian Charter of Rights and Freedoms begin?',
                    'answers' => [
                      ['text' => 'Oh Canada! Our home and native land!'],
                      ['text' => '"Whereas Canada is founded upon principles that recognize the supremacy of God and the rule of law"'],
                      ['text' => 'Canada is a free country and home of the braves'],
                      ['text' => 'Canadian citizens have rights and responsibilities'],
                    ],
                    'correctAnswerId' => 462,
                    'correct_answer' => 'B',
                    'explanation' => 'The Constitution of Canada was amended in 1982 to entrench the Canadian Charter of Rights and Freedoms, which begins with the words, “Whereas Canada is founded upon principles that recognize the supremacy of God and the rule of law.”',
                  ],

                  [
                    'text' => 'What was the "Great Upheaval"?',
                    'answers' => [
                      ['text' => 'The great earthquake that ravaged Canada\'s East Coast during the 18th century'],
                      ['text' => 'The deportation of more than two-thirds of Acadians from their homeland between 1755 and 1763'],
                      ['text' => 'The deportation of more than two-thirds of Aboriginal from their homeland between 1755 and 1763'],
                      ['text' => 'The deportation of more than two-thirds of Inuit from their homeland between 1755 and 1763'],
                    ],
                    'correctAnswerId' => 466,
                    'correct_answer' => 'B',
                    'explanation' => 'Between 1755 and 1763, during the war between Britain and France, more than two-thirds of the Acadians were deported from their homeland. Despite this ordeal, known as the “Great Upheaval,” the Acadians survived and maintained their unique identity.',
                  ],

                  [
                    'text' => 'Who was John Buchan?',
                    'answers' => [
                      ['text' => 'A famous Canadian general'],
                      ['text' => 'A popular Governor General of Canada'],
                      ['text' => 'One of the Fathers of Confederation'],
                      ['text' => 'A victorious Canadian army General'],
                    ],
                    'correctAnswerId' => 470,
                    'correct_answer' => 'B',
                    'explanation' => 'John Buchan, the 1st Baron Tweedsmuir, was a popular Governor General of Canada (1935–40). Immigrant groups, he said, “should retain their individuality and each make its contribution to the national character.”',
                  ],


                ]
              ],
              [
                'name' => 'Practice Test 3.4',
                'info' => 'Practice Test 3.4',
                'questions' =>  [
                  [
                    "text" => "Where have the majority of Canadians been born since the 1800s?",
                    "answers" => [
                      ["text" => "Canada"],
                      ["text" => "China"],
                      ["text" => "England"],
                      ["text" => "India"]
                    ],
                    'correctAnswerId' => 473,
                    "correctAnswer" => "Canada",
                    "explanation" => "The majority of Canadians were born in this country and this has been true since the 1800s. However, Canada is often referred to as a land of immigrants because, over the past 200 years, millions of newcomers have helped to build and defend our way of life."
                  ],
                  [
                    "text" => "What was John Buchan's stance on immigration during his tenure as Governor General of Canada in the 1930s?",
                    "answers" => [
                      ["text" => "Unity in diversity"],
                      ["text" => "No diversity"],
                      ["text" => "No unity"],
                      ["text" => "Complete cultural assimilation"]
                    ],
                    'correctAnswerId' => 477,
                    "correctAnswer" => "Unity in diversity",
                    "explanation" => "John Buchan, the 1st Baron Tweedsmuir, was a popular Governor General of Canada (1935–40). Immigrant groups, he said, “should retain their individuality and each make its contribution to the national character.”"
                  ],
                  [
                    "text" => "When did the House of Commons acknowledge that the Québécois constitute a nation within a united Canada?",
                    "answers" => [
                      ["text" => "1986"],
                      ["text" => "2001"],
                      ["text" => "2006"],
                      ["text" => "1972"]
                    ],
                    'correctAnswerId' => 483,
                    "correctAnswer" => "2006",
                    "explanation" => "The House of Commons recognized in 2006 that the Quebecois form a nation within a united Canada."
                  ],
                  [
                    "text" => "When was Canada's original constitutional document drafted?",
                    "answers" => [
                      ["text" => "1867"],
                      ["text" => "1720"],
                      ["text" => "1980"],
                      ["text" => "2000"]
                    ],
                    'correctAnswerId' => 485,
                    "correctAnswer" => "1867",
                    "explanation" => "Canada’s original constitutional document was created in 1867, the British North America Act."
                  ],
                  [
                    "text" => "When were Aboriginal Territorial Rights initially guaranteed?",
                    "answers" => [
                      ["text" => "1988"],
                      ["text" => "1763"],
                      ["text" => "2000"],
                      ["text" => "1900s"]
                    ],
                    'correctAnswerId' => 490,
                    "correctAnswer" => "1763",
                    "explanation" => "Aboriginal and treaty rights are in the Canadian Constitution. Territorial rights were first guaranteed through the Royal Proclamation of 1763 by King George III, and established the basis for negotiating treaties with the newcomers—treaties that were not always fully respected."
                  ],
                  [
                    "text" => "When was the term 'First Nations' first introduced?",
                    "answers" => [
                      ["text" => "In the 1960s"],
                      ["text" => "In the 1980s"],
                      ["text" => "Never"],
                      ["text" => "In the 1970s"]
                    ],
                    'correctAnswerId' => 496,
                    "correctAnswer" => "In the 1970s",
                    "explanation" => "Indian refers to all Aboriginal people who are not Inuit or Métis. In the 1970s, the term First Nations began to be used."
                  ],
                  [
                    "text" => "In which language is the Canadian Charter of Rights and Freedoms written?",
                    "answers" => [
                      ["text" => "English and French"],
                      ["text" => "Chinese and English"],
                      ["text" => "English, French and Chinese"],
                      ["text" => "English only"]
                    ],
                    'correctAnswerId' => 487,
                    "correctAnswer" => "English and French",
                    "explanation" => "English and French define the reality of day-to-day life for most people and are the country’s official languages. The federal government is required by law to provide services throughout Canada in English and French."
                  ],
                  [
                    "text" => "Which religious affiliation do the vast majority of Canadians identify with?",
                    "answers" => [
                      ["text" => "Jewish"],
                      ["text" => "Christian"],
                      ["text" => "Hinduism"],
                      ["text" => "Muslim"]
                    ],
                    'correctAnswerId' => 502,
                    "correctAnswer" => "Christian",
                    "explanation" => "The great majority of Canadians identify as Christians. The largest religious affiliation is Catholic, followed by various Protestant churches. The numbers of Muslims, Jews, Hindus, Sikhs and members of other religions, as well as people who state 'no religion' are also growing."
                  ],
                  [
                    "text" => "What percentage of Aboriginal people identify as Inuit?",
                    "answers" => [
                      ["text" => "65"],
                      ["text" => "20"],
                      ["text" => "4"],
                      ["text" => "30"]
                    ],
                    'correctAnswerId' => 507,
                    "correctAnswer" => "4",
                    "explanation" => "About 65% of the Aboriginal people are First Nations, while 30% are Métis and 4% are Inuit."
                  ],
                  [
                    "text" => "What does the term 'Indians' typically refer to?",
                    "answers" => [
                      ["text" => "All aboriginal peoples who are not Inuit or Metis"],
                      ["text" => "Early settlers, Metis and Inuit"],
                      ["text" => "Metis and Inuit"],
                      ["text" => "Acadians, Metis and First Nations"]
                    ],
                    'correctAnswerId' => 509,
                    "correctAnswer" => "All aboriginal peoples who are not Inuit or Metis",
                    "explanation" => "Indian refers to all Aboriginal people who are not Inuit or Métis. In the 1970s, the term First Nations began to be used."
                  ],
                  [
                    "text" => "What is the name of Canada's first constitutional document?",
                    "answers" => [
                      ["text" => "The Confederation Act"],
                      ["text" => "The Constitutional Act"],
                      ["text" => "The Legislative Act"],
                      ["text" => "The British North America Act"]
                    ],
                    'correctAnswerId' => 516,
                    "correctAnswer" => "The British North America Act",
                    "explanation" => "Canada’s original constitutional document was created in 1867, the British North America Act."
                  ],
                  [
                    "text" => "What are Canada’s two official languages?",
                    "answers" => [
                      ["text" => "English and First Nations"],
                      ["text" => "English and French"],
                      ["text" => "French and British"],
                      ["text" => "First Nations and French"]
                    ],
                    'correctAnswerId' => 518,
                    "correctAnswer" => "English and French",
                    "explanation" => "English and French are the two official languages and are important symbols of identity. English speakers (Anglophones) and French speakers (Francophones) have lived together in partnership and creative tension for more than 300 years."
                  ],
                  [
                    "text" => "Who recognized in 2006 that the Quebecois form a nation within a united Canada?",
                    "answers" => [
                      ["text" => "The Prime Minister"],
                      ["text" => "The Senate"],
                      ["text" => "The House of Commons"],
                      ["text" => "The Cabinet Ministers"]
                    ],
                    'correctAnswerId' => 523,
                    "correctAnswer" => "The House of Commons",
                    "explanation" => "The House of Commons recognized in 2006 that the Quebecois form a nation within a united Canada."
                  ],
                  [
                    "text" => "What are three beliefs that have helped Canadians develop a prosperous society in a challenging environment?",
                    "answers" => [
                      ["text" => "Enterprise, hard work and driving cars"],
                      ["text" => "Ordered liberty, enterprise and buying houses"],
                      ["text" => "Outdoor life, hard work, and fair play"],
                      ["text" => "Hard work, fair play and ordered liberty"]
                    ],
                    'correctAnswerId' => 528,
                    "correctAnswer" => "Hard work, fair play and ordered liberty",
                    "explanation" => "A belief in ordered liberty, enterprise, hard work and fair play has enabled Canadians to build a prosperous society in a rugged environment from our Atlantic shores to the Pacific Ocean and to the Arctic Circle—so much so that poets and songwriters have hailed Canada as the “Great Dominion.”"
                  ],
                  [
                    "text" => "What is the key phrase in Canada’s original constitutional document?",
                    "answers" => [
                      ["text" => "Work, Order and Good Government"],
                      ["text" => "Peace, Order and Good Government"],
                      ["text" => "Government, Work and Good Order"],
                      ["text" => "Peace, Order and Mobility Rights"]
                    ],
                    'correctAnswerId' => 530,
                    "correctAnswer" => "Peace, Order and Good Government",
                    "explanation" => "Canada’s institutions uphold a commitment to Peace, Order and Good Government, a key phrase in Canada’s original constitutional document in 1867, the British North America Act."
                  ],
                  [
                    "text" => "Who are referred to as Francophones?",
                    "answers" => [
                      ["text" => "Aboriginal people in Canada"],
                      ["text" => "People who speak French as a first language"],
                      ["text" => "Native Indian from America"],
                      ["text" => "Young people from France"]
                    ],
                    'correctAnswerId' => 534,
                    "correctAnswer" => "People who speak French as a first language",
                    "explanation" => "English and French are the two official languages and are important symbols of identity. English speakers (Anglophones) and French speakers (Francophones) have lived together in partnership and creative tension for more than 300 years."
                  ],
                  [
                    "text" => "Canada is not the only constitutional monarchy in North America",
                    "answers" => [
                      ["text" => "True"],
                      ["text" => "False"]
                    ],
                    'correctAnswerId' => 538,
                    "correctAnswer" => "False",
                    "explanation" => "Canada is a constitutional monarchy, a parliamentary democracy and a federal state. Canadians are bound together by a shared commitment to the rule of law and to the institutions of parliamentary government."
                  ],
                  [
                    "text" => "How did the native people live when the first Europeans arrived in Canada?",
                    "answers" => [
                      ["text" => "Off the land, some by hunting and gathering, others by raising crops"],
                      ["text" => "Off the land, by hunting and gathering"],
                      ["text" => "By trading fur with other native in North America"],
                      ["text" => "Off the land, by raising crops"]
                    ],
                    'correctAnswerId' => 540,
                    "correctAnswer" => "Off the land, some by hunting and gathering, others by raising crops",
                    "explanation" => "The native people lived off the land, some by hunting and gathering, others by raising crops. The Huron-Wendat of the Great Lakes region, like the Iroquois, were farmers and hunters. The Cree and Dene of the Northwest were hunter-gatherers. The Sioux were nomadic, following the bison (buffalo) herd. The Inuit lived off Arctic wildlife. West Coast natives preserved fish by drying and smoking."
                  ],
                  [
                    "text" => "Who gained control over North America in the 1700s?",
                    "answers" => [
                      ["text" => "The English"],
                      ["text" => "The Spanish"],
                      ["text" => "The French"],
                      ["text" => "The Irish"]
                    ],
                    'correctAnswerId' => 543,
                    "correctAnswer" => "The English",
                    "explanation" => "In the 1700s France and Great Britain battled for control of North America. In 1759, the British defeated the French in the Battle of the Plains of Abraham at Québec City — marking the end of France’s empire in America."
                  ],
                  [
                    "text" => "Which four provinces formed the new country called the Dominion of Canada?",
                    "answers" => [
                      ["text" => "Ontario, Quebec, Manitoba and Nova Scotia"],
                      ["text" => "Manitoba, Quebec, New Brunswick and Nova Scotia"],
                      ["text" => "Ontario, Quebec, New Brunswick and Nova Scotia"],
                      ["text" => "Ontario, Quebec, New Brunswick and British Columbia"]
                    ],
                    'correctAnswerId' => 548,
                    "correctAnswer" => "Ontario, Quebec, New Brunswick and Nova Scotia",
                    "explanation" => "Ontario and Quebec, which, together with New Brunswick and Nova Scotia, formed the new country called the Dominion of Canada."
                  ],
                  [
                    "text" => "When did France and Great Britain battle for control of North America?",
                    "answers" => [
                      ["text" => "In the 1600s"],
                      ["text" => "In the 1700s"],
                      ["text" => "Never"],
                      ["text" => "In the 1800s"]
                    ],
                    'correctAnswerId' => 552,
                    "correctAnswer" => "In the 1700s",
                    "explanation" => "In the 1700s France and Great Britain battled for control of North America."
                  ],
                  [
                    "text" => "What percentage of Aboriginal people are Métis?",
                    "answers" => [
                      ["text" => "4"],
                      ["text" => "65"],
                      ["text" => "40"],
                      ["text" => "30"]
                    ],
                    'correctAnswerId' => 558,
                    "correctAnswer" => "30",
                    "explanation" => "About 65% of the Aboriginal people are First Nations, while 30% are Métis and 4% are Inuit."
                  ],
                  [
                    "text" => "In which year did the American attempt to conquer Canada fail?",
                    "answers" => [
                      ["text" => "1849"],
                      ["text" => "1840"],
                      ["text" => "1814"],
                      ["text" => "1867"]
                    ],
                    'correctAnswerId' => 561,
                    "correctAnswer" => "1814",
                    "explanation" => "By 1814, the American attempt to conquer Canada had failed. The British paid for a costly Canadian defence system, including the Citadels at Halifax and Québec City, the naval drydock at Halifax and Fort Henry at Kingston—today popular historic sites."
                  ],
                  [
                    "text" => "Since the 1970s, where do most immigrants come from?",
                    "answers" => [
                      ["text" => "Asia"],
                      ["text" => "Africa"],
                      ["text" => "Europe"],
                      ["text" => "South America"]
                    ],
                    'correctAnswerId' => 563,
                    "correctAnswer" => "Asia",
                    "explanation" => "The largest groups are the English, French, Scottish, Irish, German, Italian, Chinese, Aboriginal, Ukrainian, Dutch, South Asian and Scandinavian. Since the 1970s, most immigrants have come from Asian countries."
                  ],
                  [
                    "text" => "What were the men who worked together to establish Canada called?",
                    "answers" => [
                      ["text" => "The Fathers of Constitution"],
                      ["text" => "The Fathers of Canada"],
                      ["text" => "The Fathers of Confederation"],
                      ["text" => "The Fathers of Dominion of Canada"]
                    ],
                    'correctAnswerId' => 567,
                    "correctAnswer" => "The Fathers of Confederation",
                    "explanation" => "The Fathers of Confederation established the Dominion of Canada on July 1, 1867, the birth of the country that we know today."
                  ]
                ]
              ],
            ],
            'topics' => [
              ['name' => 'Who We Are'],
              ['name' => 'The Timeline'],
            ],
            'flashcards' => [
              [
                'question' => 'In which province does the majority of Francophones live?',
                'answer' => 'Quebec',
                'explanation' => 'The majority of Francophones live in the province of Quebec. One million Francophones live in Ontario, New Brunswick and Manitoba, with a smaller presence in other provinces.'
              ],
              [
                'question' => 'What is the name of Canada’s original constitutional document?',
                'answer' => 'The British North America Act',
                'explanation' => 'Canada’s original constitutional document was created in 1867, the British North America Act.'
              ],
              [
                'question' => 'What are three responsibilities of Canadian citizenship?',
                'answer' => 'Obeying the law, taking responsibility for oneself and one\'s family, and serving on a jury',
                'explanation' => 'In Canada, rights come with responsibilities. These include:
                - Obeying the law
                - Taking responsibility for oneself and one’s family
                - Serving on a jury
                - Voting in elections
                - Helping others in the community
                - Protecting and enjoying our heritage and environment'
              ],
              [
                'question' => 'Since the 1800s, where were the majority of Canadians born?',
                'answer' => 'Canada',
                'explanation' => 'The majority of Canadians were born in this country and this has been true since the 1800s. However, Canada is often referred to as a land of immigrants because, over the past 200 years, millions of newcomers have helped to build and defend our way of life.'
              ],
              [
                'question' => 'What is the significance of serving on a jury?',
                'answer' => 'It makes the justice system work as it depends on impartial juries made up of citizens',
                'explanation' => 'When called to do so, you are legally required to serve. Serving on a jury is a privilege that makes the justice system work as it depends on impartial juries made up of citizens.'
              ],
              [
                'question' => 'What are the three main groups of Aboriginal peoples?',
                'answer' => 'First Nations, Metis and Inuit',
                'explanation' => 'About 65% of the Aboriginal people are First Nations, while 30% are Métis and 4% Inuit.'
              ],
              [
                'question' => 'How many Anglophones are there in Canada today?',
                'answer' => '18 million',
                'explanation' => 'Today, there are 18 million Anglophones—people who speak English as a first language—and seven million Francophones—people who speak French as their first language.'
              ],
              [
                'question' => 'In which province does the majority of Francophones live?',
                'answer' => 'Quebec',
                'explanation' => 'The majority of Francophones live in the province of Quebec. One million Francophones live in Ontario, New Brunswick and Manitoba, with a smaller presence in other provinces.'
              ],
              [
                'question' => 'What are Canada’s two official languages?',
                'answer' => 'English and French',
                'explanation' => 'English and French are the two official languages and are important symbols of identity. English speakers (Anglophones) and French speakers (Francophones) have lived together in partnership and creative tension for more than 300 years.'
              ],
              [
                'question' => 'Who was John Buchan?',
                'answer' => 'A popular Governor General of Canada',
                'explanation' => 'John Buchan, the 1st Baron Tweedsmuir, was a popular Governor General of Canada (1935–40). Immigrant groups, he said, “should retain their individuality and each make its contribution to the national character.”'
              ],
              [
                'question' => 'Who are generally referred to as "English Canadians"?',
                'answer' => 'The Anglophones',
                'explanation' => 'Generations of pioneers and builders of British origins, as well as other groups, invested and endured hardship in laying the foundations of our country. This helps explain why Anglophones (English speakers) are generally referred to as English Canadians.'
              ],
              [
                'question' => 'Who recognized in 2006 that the Quebecois form a nation within a united Canada?',
                'answer' => 'The House of Commons',
                'explanation' => 'The House of Commons recognized in 2006 that the Quebecois form a nation within a united Canada.'
              ],
              [
                'question' => 'What are three responsibilities of Canadian citizenship?',
                'answer' => 'Obeying the law, taking responsibility for oneself and one\'s family, and serving on a jury',
                'explanation' => 'In Canada, rights come with responsibilities. These include:
                - Obeying the law
                - Taking responsibility for oneself and one’s family
                - Serving on a jury
                - Voting in elections
                - Helping others in the community
                - Protecting and enjoying our heritage and environment'
              ],
              [
                'question' => 'In Canada, how are individuals and governments regulated?',
                'answer' => 'By laws',
                'explanation' => 'One of Canada’s founding principles is the rule of law. Individuals and governments are regulated by laws and not by arbitrary actions. No person or group is above the law.'
              ],
              [
                'question' => 'Who is Marjorie Turner-Bailey?',
                'answer' => 'An Olympian and descendant of black Loyalists',
                'explanation' => 'Olympian Marjorie Turner-Bailey of Nova Scotia is a descendant of black Loyalists, escaped slaves and freed men and women of African origin who in the 1780s fled to Canada from America, where slavery remained legal until 1863.'
              ],
              [
                'question' => 'How many Francophones are there in Canada today?',
                'answer' => '7 million',
                'explanation' => 'Today, there are 18 million Anglophones—people who speak English as a first language—and seven million Francophones—people who speak French as their first language.'
              ],
              [
                'question' => 'From which civilization does Canadian society stem largely from?',
                'answer' => 'English-speaking and French-speaking Christians',
                'explanation' => 'The great majority of Canadians identify as Christians. The largest religious affiliation is Catholic, followed by various Protestant churches. The numbers of Muslims, Jews, Hindus, Sikhs and members of other religions, as well as people who state “no religion” are also growing.'
              ],
              [
                'question' => 'What is the key phrase in Canada’s original constitutional document?',
                'answer' => 'Peace, Order and Good Government',
                'explanation' => 'Canada’s institutions uphold a commitment to Peace, Order and Good Government, a key phrase in Canada’s original constitutional document in 1867, the British North America Act.'
              ],
              [
                'question' => 'Which three rights are included in the Canadian Charter of Rights and Freedoms?',
                'answer' => 'Mobility rights, Aboriginal Peoples\' rights, and official language rights',
                'explanation' => 'The Charter attempts to summarize fundamental freedoms while also setting out additional rights. The most important of these include Mobility Rights, Aboriginal Peoples’ Rights, Official Language Rights and Minority Language Educational Rights and Multiculturalism.'
              ],
              [
                'question' => 'What kind of commitment do Canadian institutions uphold?',
                'answer' => 'Peace, Order, and Good Government',
                'explanation' => 'Canada’s institutions uphold a commitment to Peace, Order and Good Government, a key phrase in Canada’s original constitutional document in 1867, the British North America Act.'
              ],
              [
                'question' => 'Who proclaimed the first territorial right guarantee for the First Nations?',
                'answer' => 'King George III',
                'explanation' => 'Territorial rights were first guaranteed through the Royal Proclamation of 1763 by King George III, and established the basis for negotiating treaties with the newcomers— treaties that were not always fully respected.'
              ],
              [
                'question' => 'What is the speaking background of the Metis population?',
                'answer' => 'Both French and English',
                'explanation' => 'The Métis are a distinct people of mixed Aboriginal and European ancestry, the majority of whom live in the Prairie provinces. They come from both French- and English-speaking backgrounds and speak their own dialect, Michif.'
              ],
              [
                'question' => 'Which province is the only official bilingual province?',
                'answer' => 'New Brunswick',
                'explanation' => 'While the majority of Francophones live in the province of Quebec, one million Francophones live in Ontario, New Brunswick and Manitoba, with a smaller presence in other provinces. New Brunswick is the only officially bilingual province.'
              ],
              [
                'question' => 'What was the "Great Upheaval"?',
                'answer' => 'The deportation of more than two-third of Acadians from their homeland between 1755 and 1763',
                'explanation' => 'Between 1755 and 1763, during the war between Britain and France, more than two-thirds of the Acadians were deported from their homeland. Despite this ordeal, known as the “Great Upheaval,” the Acadians survived and maintained their unique identity.'
              ],
              [
                'question' => 'How many First Nations people live on reserve land today?',
                'answer' => 'About half',
                'explanation' => 'Today, about half of First Nations people live on reserve land in about 600 communities while the other half live off-reserve, mainly in urban centres.'
              ],
              [
                'question' => 'What is the name of Canada’s original constitutional document?',
                'answer' => 'The British North America Act',
                'explanation' => 'Canada’s original constitutional document was created in 1867, the British North America Act.'
              ],
              [
                'question' => 'Quebecers are the descendants of what groups?',
                'answer' => 'French settlers from the 1600s and 1700s',
                'explanation' => 'Quebecers are the people of Quebec, the vast majority French-speaking. Most are descendants of 8,500 French settlers from the 1600s and 1700s and maintain a unique identity, culture and language.'
              ],
              [
                'question' => 'Which group of Aboriginal peoples has the largest population in Canada?',
                'answer' => 'First Nations',
                'explanation' => 'About 65% of the Aboriginal people are First Nations, while 30% are Métis and 4% Inuit.'
              ],
              [
                'question' => 'Who are the three founding peoples of Canada?',
                'answer' => 'Aboriginal, French, and British',
                'explanation' => 'The three founding peoples of Canada are the Aboriginal, French and British.'
              ],
              [
                'question' => 'What are Quebecers?',
                'answer' => 'The people of Quebec',
                'explanation' => 'Quebecers are the people of Quebec, the vast majority French-speaking. Most are descendants of 8,500 French settlers from the 1600s and 1700s and maintain a unique identity, culture and language.'
              ],
              [
                'question' => 'Where does the majority of the Métis live?',
                'answer' => 'Prairie provinces',
                'explanation' => 'The Métis are a distinct people of mixed Aboriginal and European ancestry, the majority of whom live in the Prairie provinces. They come from both French- and English-speaking backgrounds and speak their own dialect, Michif.'
              ],
              [
                'question' => 'To what does the term "Indians" refer?',
                'answer' => 'All aboriginal peoples who are not Inuit or Metis',
                'explanation' => 'Indian refers to all Aboriginal people who are not Inuit or Métis. In the 1970s, the term First Nations began to be used.'
              ],
              [
                'question' => 'With which words does the Canadian Charter of Rights and Freedoms begin?',
                'answer' => '“Whereas Canada is founded upon principles that recognize the supremacy of God and the rule of law”',
                'explanation' => 'The Constitution of Canada was amended in 1982 to entrench the Canadian Charter of Rights and Freedoms, which begins with the words, “Whereas Canada is founded upon principles that recognize the supremacy of God and the rule of law.”'
              ],
              [
                'question' => 'Who are the Métis?',
                'answer' => 'A distinct people of mixed Aboriginal and European ancestry',
                'explanation' => 'The Métis are a distinct people of mixed Aboriginal and European ancestry, the majority of whom live in the Prairie provinces. They come from both French- and English-speaking backgrounds and speak their own dialect, Michif.'
              ],
              [
                'question' => 'Who are Francophones?',
                'answer' => 'People who speak French as a first language',
                'explanation' => 'English and French are the two official languages and are important symbols of identity. English speakers (Anglophones) and French speakers (Francophones) have lived together in partnership and creative tension for more than 300 years.'
              ],
              [
                'question' => 'Where do Inuit people live?',
                'answer' => 'In scattered communities across the Arctic',
                'explanation' => 'The Inuit, which means “the people” in the Inuktitut language, live in small, scattered communities across the Arctic.'
              ],
              [
                'question' => 'What was the view on immigration of John Buchan, a popular Governor General of Canada in the 1930s?',
                'answer' => 'Unity in diversity',
                'explanation' => 'John Buchan, the 1st Baron Tweedsmuir, was a popular Governor General of Canada (1935–40). Immigrant groups, he said, “should retain their individuality and each make its contribution to the national character.”'
              ],
              [
                'question' => 'Name three beliefs that have enabled Canadians to build a prosperous society in a rugged environment?',
                'answer' => 'Hard work, fair play and ordered liberty',
                'explanation' => 'A belief in ordered liberty, enterprise, hard work and fair play has enabled Canadians to build a prosperous society in a rugged environment from our Atlantic shores to the Pacific Ocean and to the Arctic Circle—so much so that poets and songwriters have hailed Canada as the “Great Dominion.”'
              ],
              [
                'question' => 'What is the name of Metis dialect?',
                'answer' => 'Michif',
                'explanation' => 'The Métis are a distinct people of mixed Aboriginal and European ancestry, the majority of whom live in the Prairie provinces. They come from both French- and English-speaking backgrounds and speak their own dialect, Michif.'
              ],
              [
                'question' => 'Who were the English-speaking settlers?',
                'answer' => 'English, Welsh, Scottish and Irish',
                'explanation' => 'The basic way of life in English-speaking areas was established by hundreds of thousands of English, Welsh, Scottish and Irish settlers, soldiers and migrants from the 1600s to the 20th century.'
              ],
              [
                'question' => 'What percentage of Aboriginal people are First Nations?',
                'answer' => '65',
                'explanation' => 'About 65% of the Aboriginal people are First Nations, while 30% are Métis and 4% Inuit.'
              ],
              [
                'question' => 'What is a fundamental characteristic of the Canadian heritage and identity?',
                'answer' => 'Multiculturalism',
                'explanation' => 'A fundamental characteristic of the Canadian heritage and identity. Canadians celebrate the gift of one another’s presence and work hard to respect pluralism and live in harmony.'
              ],
              [
                'question' => 'What does the word "Inuit" mean?',
                'answer' => '“The people”',
                'explanation' => 'The Inuit, which means “the people” in the Inuktitut language, live in small, scattered communities across the Arctic.'
              ],
              [
                'question' => 'To which religious affiliation do the great majority of Canadians identify?',
                'answer' => 'Christian',
                'explanation' => 'The great majority of Canadians identify as Christians. The largest religious affiliation is Catholic, followed by various Protestant churches. The numbers of Muslims, Jews, Hindus, Sikhs and members of other religions, as well as people who state “no religion” are also growing.'
              ],
              [
                'question' => 'After English, what is the second most-spoken non-official language in Canadian homes?',
                'answer' => 'Chinese',
                'explanation' => 'Non-official languages are widely spoken in Canadian homes. Chinese languages are the second most-spoken at home, after English, in two of Canada’s biggest cities. In Vancouver, 13% of the population speak Chinese languages at home; in Toronto, the number is 7%.'
              ],
              [
                'question' => 'Acadians are the descendants of what groups?',
                'answer' => 'French colonists who began settling in what are now the Maritime provinces in 1604',
                'explanation' => 'The Acadians are the descendants of French colonists who began settling in what are now the Maritime provinces in 1604.'
              ]
            ]

          ],
          [
            'image' => '/images/chap 5.png',
            'name' => 'Chapter 4',
            'title' => "Canada's History",
            'description' => 'This chapter discusses the history and journey of European settlers in Canada. Know about the key events that shaped the nation.',
            'questions' => 20,
            'mistakes' => 5,
            'step' => 2,
            'tests' => [
              [
                'name' => 'Practice Test 4.1',
                'info' => 'Practice Test 4.1',
                'questions' => [
                  [
                    'text' => 'What was the name of the new country formed in Confederation?',
                    'answers' => [
                      ['text' => 'Britain'],
                      ['text' => 'Canada'],
                      ['text' => 'Canadian Confederation'],
                      ['text' => 'Dominion of Canada'],
                    ],
                    'correctAnswerId' => 574,
                    'correct_answer' => 'D',
                    'explanation' => 'The old Province of Canada was split into two new provinces: Ontario and Quebec, which, together with New Brunswick and Nova Scotia, formed the new country called the Dominion of Canada.',
                  ],

                  [
                    'text' => 'Who led Quebec into Confederation?',
                    'answers' => [
                      ['text' => 'Sir Louis-Hippolyte LaFontaine'],
                      ['text' => 'Sir George-Etienne Cartier'],
                      ['text' => 'Sir Wilfred Laurier'],
                      ['text' => 'Sir John A. Macdonald'],
                    ],
                    'correctAnswerId' => 576,
                    'correct_answer' => 'B',
                    'explanation' => 'Sir George-Etienne Cartier was the key architect of confederation from Quebec. A railway lawyer, Montrealer, close ally of Macdonald and patriotic Canadien, Cartier led Quebec into confederation and helped negotiate the entry of the Northwest Territories, Manitoba and British Columbia into Canada.',
                  ],

                  [
                    'text' => 'In World War II, in which aspect did Canada contribute more to the Allied air effort than any other Commonwealth country?',
                    'answers' => [
                      ['text' => 'Trained 130,000 allied air crew'],
                      ['text' => 'Deployed paratroopers in France'],
                      ['text' => 'Provided ammunition'],
                      ['text' => 'Sent 130,000 soldiers to take France back from the Germans'],
                    ],
                    'correctAnswerId' => 579,
                    'correct_answer' => 'A',
                    'explanation' => 'In World War II, Canada contributed more to the Allied air effort than any other Commonwealth country, with over 130,000 Allied air crew trained in Canada under the British Commonwealth Air Training Plan.',
                  ],

                  [
                    'text' => 'What was the “Underground Railroad”?',
                    'answers' => [
                      ['text' => 'An anti-slavery Network that helped thousands of slaves escape the United States and settle in Canada'],
                      ['text' => 'A railroad through the Rockies that was mainly through Mountain tunnels'],
                      ['text' => 'A network for Traders used to transport beaver pelts to the United States'],
                      ['text' => 'The first underground Subway tunnel in Toronto'],
                    ],
                    'correctAnswerId' => 583,
                    'correct_answer' => 'A',
                    'explanation' => 'Thousands of slaves escaped from the United States, followed “the North Star” and settled in Canada via the Underground Railroad, a Christian anti-slavery network.',
                  ],

                  [
                    'text' => 'When is Canada Day?',
                    'answers' => [
                      ['text' => 'November 5th every year'],
                      ['text' => 'July 1st every year'],
                      ['text' => 'June 30th every year'],
                      ['text' => 'July 31st every year'],
                    ],
                    'correctAnswerId' => 588,
                    'correct_answer' => 'B',
                    'explanation' => 'Until 1982, July 1 was celebrated as “Dominion Day” to commemorate the day that Canada became a self-governing Dominion. Today it is officially known as Canada Day.',
                  ],

                  [
                    'text' => 'In what year did Canada become a country?',
                    'answers' => [
                      ['text' => '1867'],
                      ['text' => '1687'],
                      ['text' => '1786'],
                      ['text' => '1678'],
                    ],
                    'correctAnswerId' => 591,
                    'correct_answer' => 'A',
                    'explanation' => 'The Dominion of Canada was officially born on July 1, 1867.',
                  ],

                  [
                    'text' => 'Which act granted for the first time in Canada, legislative assemblies elected by the people?',
                    'answers' => [
                      ['text' => 'The constitutional act of 1982'],
                      ['text' => 'The constitutional act of 1891'],
                      ['text' => 'The constitutional act of 1791'],
                      ['text' => 'The constitutional act of 1972'],
                    ],
                    'correctAnswerId' => 597,
                    'correct_answer' => 'C',
                    'explanation' => 'The Constitutional Act of 1791 divided the Province of Quebec into Upper Canada (later Ontario), which was mainly Loyalist, Protestant and English-speaking, and Lower Canada (later Quebec), heavily Catholic and French-speaking.',
                  ],

                  [
                    'text' => 'What did the suffrage movement achieve?',
                    'answers' => [
                      ['text' => 'Quebec experienced an era of Rapid change'],
                      ['text' => 'The suffrage movement abolished slavery in Canada'],
                      ['text' => 'The suffrage movement led to the introduction of employment insurance'],
                      ['text' => 'Women achieved the right to vote'],
                    ],
                    'correctAnswerId' => 602,
                    'correct_answer' => 'D',
                    'explanation' => 'The effort by women to achieve the right to vote is known as the women’s suffrage movement.',
                  ],

                  [
                    'text' => 'When did settlers from France first establish communities on the St. Lawrence River?',
                    'answers' => [
                      ['text' => 'Late 1600s'],
                      ['text' => 'Early 1700s'],
                      ['text' => 'Late 1700s'],
                      ['text' => 'Early 1600s'],
                    ],
                    'correctAnswerId' => 606,
                    'correct_answer' => 'D',
                    'explanation' => 'In 1604, the first European settlement north of Florida was established by French explorers Pierre de Monts and Samuel de Champlain.',
                  ],

                  [
                    'text' => 'What do Canadians remember on Remembrance Day?',
                    'answers' => [
                      ['text' => 'Canadian victory in World War One'],
                      ['text' => 'Canadian victory in the Battle of Vimi Ridge'],
                      ['text' => 'Canadian victory in World War II'],
                      ['text' => 'Sacrifices made by Canadian veterans and brave soldiers in Wars'],
                    ],
                    'correctAnswerId' => 610,
                    'correct_answer' => 'D',
                    'explanation' => 'Canadians remember the sacrifices of our veterans and brave fallen in all wars up to the present day in which Canadians took part, each year on November 11: Remembrance Day.',
                  ],
                  [
                    'text' => 'Why was the Canadian Pacific Railway built?',
                    'answers' => [
                      ['text' => 'The railway made it possible for immigrants to settle in central Canada.'],
                      ['text' => 'British Columbia joined Canada in 1871 after Ottawa promised to build a railway to the West Coast'],
                      ['text' => 'To provide a spectacular tourist excursion across precipitous passes and bridges'],
                      ['text' => 'So British Columbia could handle trade of goods worth billions of dollars all around the world'],
                    ],
                    'correctAnswerId' => 612,
                    'correct_answer' => 'B',
                    'explanation' => 'British Columbia joined Canada in 1871 after Ottawa promised to build a railway to the West Coast.',
                  ],

                  [
                    'text' => 'When is Remembrance Day celebrated?',
                    'answers' => [
                      ['text' => 'July 1st'],
                      ['text' => 'October 6th'],
                      ['text' => 'November 11th'],
                      ['text' => 'November 20th'],
                    ],
                    'correctAnswerId' => 617,
                    'correct_answer' => 'C',
                    'explanation' => 'Canadians remember the sacrifices of our veterans and brave fallen in all wars up to the present day in which Canadians took part, each year on November 11: Remembrance Day.',
                  ],

                  [
                    'text' => 'Which was the last Province to join Canada?',
                    'answers' => [
                      ['text' => 'Prince Edward Island'],
                      ['text' => 'Manitoba'],
                      ['text' => 'Newfoundland'],
                      ['text' => 'Yukon'],
                    ],
                    'correctAnswerId' => 621,
                    'correct_answer' => 'C',
                    'explanation' => 'Newfoundland was the last province to join Canada.',
                  ],

                  [
                    'text' => 'What does the term responsible government mean?',
                    'answers' => [
                      ['text' => 'Each person in each electoral district is responsible for voting'],
                      ['text' => 'The governor-general is responsible for the actions of the Prime Minister'],
                      ['text' => 'The Ministers of the crown must have the support of a majority of the elected representatives in order to govern'],
                      ['text' => 'All Canadians are responsible for each other'],
                    ],
                    'correctAnswerId' => 625,
                    'correct_answer' => 'C',
                    'explanation' => 'The term "responsible government" means that the ministers of the Crown must have the support of a majority of the elected representatives in order to govern.',
                  ],

                  [
                    'text' => 'Who was the first person to draw a map of Canada\'s East Coast?',
                    'answers' => [
                      ['text' => 'Jean Talon'],
                      ['text' => 'Georges Cartier'],
                      ['text' => 'John Cabot'],
                      ['text' => 'Shock Cartier'],
                    ],
                    'correctAnswerId' => 629,
                    'correct_answer' => 'C',
                    'explanation' => 'John Cabot, an Italian immigrant to England, was the first to map Canada’s Atlantic shore, setting foot on Newfoundland or Cape Breton Island in 1497 and claiming the New Founde Land for England.',
                  ],

                  [
                    'text' => 'Who is the father of Manitoba and defender of Metis rights?',
                    'answers' => [
                      ['text' => 'Louis Riel'],
                      ['text' => 'Sir Louis-Hippolyte La Fontaine'],
                      ['text' => 'Sir John A. Macdonald'],
                      ['text' => 'Sir William Riel'],
                    ],
                    'correctAnswerId' => 631,
                    'correct_answer' => 'A',
                    'explanation' => 'Louis Riel is seen by many as a hero, a defender of Metis rights and the father of Manitoba.',
                  ],

                  [
                    'text' => 'When did the United Empire Loyalists come to Canada?',
                    'answers' => [
                      ['text' => 'Late 1600s'],
                      ['text' => 'Early 1600s'],
                      ['text' => 'Early 1700s'],
                      ['text' => 'Late 1700s'],
                    ],
                    'correctAnswerId' => 638,
                    'correct_answer' => 'D',
                    'explanation' => 'The United Empire Loyalists came to Canada in the late 1700s.',
                  ],

                  [
                    'text' => 'What happened at the Battle of the Plains of Abraham?',
                    'answers' => [
                      ['text' => 'The voyagers battled with the British for fur trading rights'],
                      ['text' => 'Americans fought the United Empire Loyalists during the American Revolution'],
                      ['text' => 'The British defeated the French marking the end of France\'s Empire in America'],
                      ['text' => 'The French defeated the British in a battle for Quebec'],
                    ],
                    'correctAnswerId' => 641,
                    'correct_answer' => 'C',
                    'explanation' => 'In 1759, the British defeated the French in the Battle of the Plains of Abraham at Quebec City – marking the end of France’s empire in America.',
                  ],

                  [
                    'text' => 'What is responsible government?',
                    'answers' => [
                      ['text' => 'The government is responsible for the well-being of its people'],
                      ['text' => 'The government must take responsibility for any Act of War it decides to commit'],
                      ['text' => 'A government that is against corruption'],
                      ['text' => 'The government must resign if it loses a confidence vote in the assembly'],
                    ],
                    'correctAnswerId' => 646,
                    'correct_answer' => 'D',
                    'explanation' => 'Responsible government means that the government must resign if it loses a confidence vote in the assembly. This is the system that Canada has today.',
                  ],

                  [
                    'text' => 'What outcome and significance did the War of 1812 with the USA have for Canada?',
                    'answers' => [
                      ['text' => 'Canada formed part of the United States'],
                      ['text' => 'Canada lost a lot of people in the war'],
                      ['text' => 'Canada protected its independence from the United States'],
                      ['text' => 'Canada became an independent country'],
                    ],
                    'correctAnswerId' => 649,
                    'correct_answer' => 'C',
                    'explanation' => 'The War of 1812 with the USA ensured that Canada would protect its independence from the United States, contributing to the formation of the present-day Canada-U.S.A. border.',
                  ],

                ]
              ],
              [
                'name' => 'Practice Test 4.2',
                'info' => 'Practice Test 4.2',
                'questions' => [
                  [
                    'text' => 'In which type of industry did most early European settlers work?',
                    'answers' => [
                      ['text' => 'Fur trading'],
                      ['text' => 'Oil'],
                      ['text' => 'Gold mining'],
                      ['text' => 'Hunting'],
                    ],
                    'correctAnswerId' => 651,
                    'correct_answer' => 'A',
                    'explanation' => 'The French and Aboriginal people collaborated in the vast fur-trade economy, driven by the demand for beaver pelts in Europe.',
                  ],

                  [
                    'text' => 'From where did the first European settlers in Canada come?',
                    'answers' => [
                      ['text' => 'Germany'],
                      ['text' => 'England'],
                      ['text' => 'France'],
                      ['text' => 'Iceland'],
                    ],
                    'correctAnswerId' => 657,
                    'correct_answer' => 'C',
                    'explanation' => 'In 1604, the first European settlement north of Florida was established by French explorers Pierre de Monts and Samuel de Champlain.',
                  ],

                  [
                    'text' => 'Who was Sir George-Etienne Cartier?',
                    'answers' => [
                      ['text' => 'A railway lawyer and Montrealer'],
                      ['text' => 'The first French-Canadian Prime Minister'],
                      ['text' => 'The first head of a responsible government'],
                      ['text' => 'Canada\'s first prime minister'],
                    ],
                    'correctAnswerId' => 659,
                    'correct_answer' => 'A',
                    'explanation' => 'Sir George-Etienne Cartier was a key architect of Confederation from Quebec, a railway lawyer, Montrealer, and close ally of Macdonald who led Quebec into Confederation.',
                  ],

                  [
                    'text' => 'Who led an armed uprising and seized Fort Garry?',
                    'answers' => [
                      ['text' => 'John A. Macdonald'],
                      ['text' => 'Louis Riel'],
                      ['text' => 'Sam Steele'],
                      ['text' => 'George-Etienne Cartier'],
                    ],
                    'correctAnswerId' => 664,
                    'correct_answer' => 'B',
                    'explanation' => 'Louis Riel led an armed uprising and seized Fort Garry, the territorial capital.',
                  ],

                  [
                    'text' => 'If the government loses a confidence vote in the assembly, they:',
                    'answers' => [
                      ['text' => 'Call for by-elections'],
                      ['text' => 'Can continue'],
                      ['text' => 'Do nothing'],
                      ['text' => 'Must resign'],
                    ],
                    'correctAnswerId' => 670,
                    'correct_answer' => 'D',
                    'explanation' => 'If the government loses a confidence vote in the assembly, they must resign. This is the system of responsible government in Canada.',
                  ],

                  [
                    'text' => 'Which province was the first to grant voting rights to women?',
                    'answers' => [
                      ['text' => 'Quebec'],
                      ['text' => 'Ontario'],
                      ['text' => 'Nova Scotia'],
                      ['text' => 'Manitoba'],
                    ],
                    'correctAnswerId' => 674,
                    'correct_answer' => 'D',
                    'explanation' => 'In 1916, Manitoba became the first province to grant voting rights to women.',
                  ],

                  [
                    'text' => 'Who is General Sir Arthur Currie?',
                    'answers' => [
                      ['text' => 'Canada\'s greatest soldier in the First World War'],
                      ['text' => 'A great frontier hero'],
                      ['text' => 'An explorer of western Canada'],
                      ['text' => 'A military leader of the Metis in the 19th century'],
                    ],
                    'correctAnswerId' => 675,
                    'correct_answer' => 'A',
                    'explanation' => 'General Sir Arthur Currie is considered Canada\'s greatest soldier in the First World War.',
                  ],

                  [
                    'text' => 'Which province was split into two at Confederation?',
                    'answers' => [
                      ['text' => 'Lower Canada'],
                      ['text' => 'Newfoundland'],
                      ['text' => 'Upper Canada'],
                      ['text' => 'The province of Canada'],
                    ],
                    'correctAnswerId' => 682,
                    'correct_answer' => 'D',
                    'explanation' => 'The old Province of Canada was split into two new provinces: Ontario and Quebec, which, together with New Brunswick and Nova Scotia, formed the new country called the Dominion of Canada.',
                  ],

                  [
                    'text' => 'Who had played an important part in building the Canadian Pacific Railway (CPR)?',
                    'answers' => [
                      ['text' => 'Acadian railroad workers'],
                      ['text' => 'Afro-American slaves'],
                      ['text' => 'American railroad engineers'],
                      ['text' => 'Chinese railroad workers'],
                    ],
                    'correctAnswerId' => 686,
                    'correct_answer' => 'D',
                    'explanation' => 'Chinese railroad workers played a significant role in building the Canadian Pacific Railway (CPR), which was completed in 1885.',
                  ],

                  [
                    'text' => 'On what date did Nunavut become a territory?',
                    'answers' => [
                      ['text' => 'April 1st, 1999'],
                      ['text' => 'May 1st, 1998'],
                      ['text' => 'July 1st, 1867'],
                      ['text' => 'July 31st, 1820'],
                    ],
                    'correctAnswerId' => 687,
                    'correct_answer' => 'A',
                    'explanation' => 'Nunavut became a territory on April 1st, 1999.',
                  ],
                  [
                    'text' => 'Why is the British North America Act important in Canadian history?',
                    'answers' => [
                      ['text' => 'It was agreed to buy the First Nations and Inuit'],
                      ['text' => 'It was written by the British government'],
                      ['text' => 'The Aboriginal people signed the act.'],
                      ['text' => 'It made Confederation legal'],
                    ],
                    'correctAnswerId' => 691,
                    'correct_answer' => 'D',
                    'explanation' => 'The British Parliament passed the British North America Act in 1867, which made Confederation legal. The Dominion of Canada was officially born on July 1, 1867.',
                  ],

                  [
                    'text' => 'Who built the French Empire in North America?',
                    'answers' => [
                      ['text' => 'King Charles the second'],
                      ['text' => 'Jean Talon, Bishop Laval, Count Frontenac'],
                      ['text' => 'Pierre Le Moyne, Sieur Iberville'],
                      ['text' => 'Great Britain'],
                    ],
                    'correctAnswerId' => 696,
                    'correct_answer' => 'B',
                    'explanation' => 'Outstanding leaders like Jean Talon, Bishop Laval, and Count Frontenac built a French Empire in North America that reached from Hudson Bay to the Gulf of Mexico.',
                  ],

                  [
                    'text' => 'Which one is Canada\'s best known symbol and National Police Force?',
                    'answers' => [
                      ['text' => 'RMCP'],
                      ['text' => 'CIA'],
                      ['text' => 'Canadian police'],
                      ['text' => 'RCMP'],
                    ],
                    'correctAnswerId' => 702,
                    'correct_answer' => 'D',
                    'explanation' => 'Today, the Royal Canadian Mounted Police (RCMP) or “the Mounties”) are the national police force and one of Canada’s best known symbols.',
                  ],

                  [
                    'text' => 'What is the significance of the Quebec Act of 1774?',
                    'answers' => [
                      ['text' => 'It allowed Quebec to gain independence'],
                      ['text' => 'It allowed the French to move into Quebec'],
                      ['text' => 'Canada\'s tolerance of religious tradition under the law'],
                      ['text' => 'It gave the French more power'],
                    ],
                    'correctAnswerId' => 705,
                    'correct_answer' => 'C',
                    'explanation' => 'One of the constitutional foundations of Canada, the Quebec Act accommodated the principles of British institutions to the reality of the province. It allowed religious freedom for Catholics and permitted them to hold public office, a practice not then allowed in Britain.',
                  ],

                  [
                    'text' => 'Who were the Voyageurs?',
                    'answers' => [
                      ['text' => 'Montreal-based traders who traveled by canoe'],
                      ['text' => 'Immigrants to Canada in the 18th century'],
                      ['text' => 'Explorers searching for the Northwest Passage'],
                      ['text' => 'Geographers who first charted the coastline of British Columbia'],
                    ],
                    'correctAnswerId' => 707,
                    'correct_answer' => 'A',
                    'explanation' => 'In the fur trade era, the Voyageurs were Montreal-based traders who traveled by canoe, forming strong alliances with First Nations peoples.',
                  ],

                  [
                    'text' => 'Which countries fought in the Battle of Plains of Abraham?',
                    'answers' => [
                      ['text' => 'British and Germany'],
                      ['text' => 'British and France'],
                      ['text' => 'France and China'],
                      ['text' => 'America and British'],
                    ],
                    'correctAnswerId' => 712,
                    'correct_answer' => 'B',
                    'explanation' => 'In 1759, the Battle of the Plains of Abraham was fought between the British and the French, resulting in a decisive British victory and marking the end of France’s empire in North America.',
                  ],

                  [
                    'text' => 'What do Canadians normally wear on Remembrance Day?',
                    'answers' => [
                      ['text' => 'A red poppy'],
                      ['text' => 'A green shirt'],
                      ['text' => 'A black tie'],
                      ['text' => 'A white shirt'],
                    ],
                    'correctAnswerId' => 715,
                    'correct_answer' => 'A',
                    'explanation' => 'Canadians wear a red poppy and observe a moment of silence at the 11th hour of the 11th day of the 11th month to honor the sacrifices of those who served in the military.',
                  ],

                  [
                    'text' => 'What does C.P.R. stand for?',
                    'answers' => [
                      ['text' => 'Canadian Pacific Railway'],
                      ['text' => 'Canadian people Railway'],
                      ['text' => 'Canadian Public Road'],
                      ['text' => 'Canadian people resource'],
                    ],
                    'correctAnswerId' => 719,
                    'correct_answer' => 'A',
                    'explanation' => 'C.P.R. stands for Canadian Pacific Railway, which was completed in 1885 and played a significant role in Canada’s development and unity.',
                  ],

                  [
                    'text' => 'For what product did the first companies formed in Canada compete?',
                    'answers' => [
                      ['text' => 'Timber trade'],
                      ['text' => 'Gold trade'],
                      ['text' => 'Fur trade'],
                      ['text' => 'Fish trade'],
                    ],
                    'correctAnswerId' => 725,
                    'correct_answer' => 'C',
                    'explanation' => 'The first companies in Canada, during the French and British regimes, competed primarily in the fur trade, which was a lucrative industry at the time.',
                  ],

                  [
                    'text' => 'How many Canadians were killed in World War one from 1914 to 1918?',
                    'answers' => [
                      ['text' => '60,000.'],
                      ['text' => '170,000.'],
                      ['text' => '200,000'],
                      ['text' => '70,000'],
                    ],
                    'correctAnswerId' => 727,
                    'correct_answer' => 'A',
                    'explanation' => 'During World War I, approximately 60,000 Canadians were killed, and another 170,000 were wounded.',
                  ],

                ]
              ],
              [
                'name' => 'Practice Test 4.3',
                'info' => 'Practice Test 4.3',
                'questions' => [
                  [
                    'text' => 'Which country was liberated by the Canadian Army in 1944 to 1945?',
                    'answers' => [
                      ['text' => 'Germany'],
                      ['text' => 'Austria'],
                      ['text' => 'The Netherlands'],
                      ['text' => 'Japan'],
                    ],
                    'correctAnswerId' => 733,
                    'correct_answer' => 'C',
                    'explanation' => 'The Canadian Army liberated the Netherlands in 1944–45 and contributed significantly to the end of World War II in Europe.',
                  ],

                  [
                    'text' => 'Who is considered Canada\'s greatest Soldier?',
                    'answers' => [
                      ['text' => 'General Sir Arthur Currie'],
                      ['text' => 'Phil Edwards'],
                      ['text' => 'Sir John A McDonald'],
                      ['text' => 'Rick Hansen'],
                    ],
                    'correctAnswerId' => 735,
                    'correct_answer' => 'A',
                    'explanation' => 'General Sir Arthur Currie is considered Canada’s greatest soldier, particularly for his leadership during World War I.',
                  ],

                  [
                    'text' => 'What is the head tax?',
                    'answers' => [
                      ['text' => 'race-based entry fee charged for Chinese entering Canada'],
                      ['text' => 'Fee charged for anyone entering Canada after 1900.'],
                      ['text' => 'A tax imposed on beer beginning in 1867.'],
                      ['text' => 'Fee charged for moving westward in the early 1900s'],
                    ],
                    'correctAnswerId' => 739,
                    'correct_answer' => 'A',
                    'explanation' => 'The head tax was a race-based entry fee imposed on Chinese immigrants entering Canada, reflecting discriminatory practices of the time.',
                  ],

                  [
                    'text' => 'What is the reason behind the Canada and U.S. border?',
                    'answers' => [
                      ['text' => 'to improve security'],
                      ['text' => 'to maintain distance'],
                      ['text' => 'Canada wishes to remain independent of the United States'],
                      ['text' => 'to prevent war between the two countries'],
                    ],
                    'correctAnswerId' => 745,
                    'correct_answer' => 'C',
                    'explanation' => 'The Canada-U.S. border, partly shaped by the War of 1812, ensured Canada’s independence from the United States.',
                  ],

                  [
                    'text' => 'What was the significance of June 6 1944 invasion of Normandy?',
                    'answers' => [
                      ['text' => 'Canadians made a significant contribution to the defeat of Nazism and fascism in Europe during the second World War'],
                      ['text' => 'It liberated North Africa from Nazi occupation'],
                      ['text' => 'It results in the forcible relocation of Canadians of Japanese origin'],
                      ['text' => 'It led to the establishment of the Juno Awards'],
                    ],
                    'correctAnswerId' => 747,
                    'correct_answer' => 'A',
                    'explanation' => 'The D-Day invasion of Normandy on June 6, 1944, saw Canadians play a crucial role in defeating Nazism and fascism in Europe.',
                  ],

                  [
                    'text' => 'When did the name of “Canada” begin appearing on maps?',
                    'answers' => [
                      ['text' => 'By the 1750s'],
                      ['text' => 'by the 1580s'],
                      ['text' => 'by the 1550s'],
                      ['text' => 'by the 1650s'],
                    ],
                    'correctAnswerId' => 753,
                    'correct_answer' => 'C',
                    'explanation' => 'The name "Canada" began appearing on maps by the 1550s, reflecting early European explorations and settlements.',
                  ],

                  [
                    'text' => 'What is the meaning of the Remembrance Day Poppy?',
                    'answers' => [
                      ['text' => 'to remember our Sovereign Queen Elizabeth II'],
                      ['text' => 'to remember the sacrifice of Canadians who have served or died in wars up to the present day'],
                      ['text' => 'To honor Prime Ministers who have died'],
                      ['text' => 'to celebrate Confederation'],
                    ],
                    'correctAnswerId' => 756,
                    'correct_answer' => 'B',
                    'explanation' => 'The Remembrance Day Poppy is worn to honor the sacrifices of Canadians who have served or died in wars, observed annually on November 11th.',
                  ],

                  [
                    'text' => 'Who was the first prime minister of Canada?',
                    'answers' => [
                      ['text' => 'Sir John Alexander MacDonald'],
                      ['text' => 'Alexander MacKenzie'],
                      ['text' => 'Pierre Elliott Trudeau'],
                      ['text' => 'Sir John McDonald'],
                    ],
                    'correctAnswerId' => 759,
                    'correct_answer' => 'A',
                    'explanation' => 'Sir John Alexander Macdonald became Canada’s first Prime Minister in 1867, a key figure in the country’s early governance.',
                  ],

                  [
                    'text' => 'Why is the Battle of Vimy Ridge important in Canadian history?',
                    'answers' => [
                      ['text' => 'It was the last battle of the first World War'],
                      ['text' => 'it has come to symbolize Canada\'s becoming as a nation'],
                      ['text' => 'it was an important victory in the Boer War'],
                      ['text' => 'out of it was formed the Canadian Corps'],
                    ],
                    'correctAnswerId' => 764,
                    'correct_answer' => 'B',
                    'explanation' => 'The Battle of Vimy Ridge in 1917 is considered a defining moment for Canada, symbolizing national unity and achievement.',
                  ],

                  [
                    'text' => 'From where does the name “Canada” come from?',
                    'answers' => [
                      ['text' => 'From the Inuit word Kanata meaning Nations'],
                      ['text' => 'From Kanata the First Nations word for village'],
                      ['text' => 'From the Inuit word meaning home'],
                      ['text' => 'From the First Nations word meaning land'],
                    ],
                    'correctAnswerId' => 768,
                    'correct_answer' => 'B',
                    'explanation' => 'The name "Canada" originates from the First Nations word "Kanata," meaning village, as recorded by early European explorers.',
                  ],
                  [
                    'text' => 'What important trade did the Hudson Bay Company control?',
                    'answers' => [
                      ['text' => 'Gold'],
                      ['text' => 'oil'],
                      ['text' => 'Fishery'],
                      ['text' => 'Fur'],
                    ],
                    'correctAnswerId' => 774,
                    'correct_answer' => 'D',
                    'explanation' => 'The Hudson’s Bay Company dominated the fur trade in the northwest from trading posts like Fort Garry (Winnipeg) and Fort Edmonton to Fort Langley and Fort Victoria, which later developed into cities.',
                  ],

                  [
                    'text' => 'Who played a key role in defending Canada during the War of 1812, and led a group of Shawnee Warriors in support of British soldiers and Canadian volunteers?',
                    'answers' => [
                      ['text' => 'Major-General Sir Isaac Brock'],
                      ['text' => 'Lieutenant-Colonel Charles de Salaberry'],
                      ['text' => 'Chief Tecumseh'],
                      ['text' => 'Major-General Robert Ross'],
                    ],
                    'correctAnswerId' => 777,
                    'correct_answer' => 'C',
                    'explanation' => 'Chief Tecumseh led Shawnee warriors in support of British and Canadian forces during the War of 1812, contributing significantly to Canada’s defense.',
                  ],

                  [
                    'text' => 'What does Confederation mean?',
                    'answers' => [
                      ['text' => 'the joining of provinces to become a new country'],
                      ['text' => 'the United States Confederate Army came to settle in Canada'],
                      ['text' => 'the combination of neighborhood to build a larger community'],
                      ['text' => 'the merger of colonies to form a province'],
                    ],
                    'correctAnswerId' => 779,
                    'correct_answer' => 'A',
                    'explanation' => 'Confederation refers to the joining of provinces (Ontario, Quebec, New Brunswick, and Nova Scotia) to form the Dominion of Canada in 1867.',
                  ],

                  [
                    'text' => 'In which period did Canada\'s economy and Industry experience a boom?',
                    'answers' => [
                      ['text' => '1880s'],
                      ['text' => '1890s and early 1900s'],
                      ['text' => '1920s'],
                      ['text' => '1860s'],
                    ],
                    'correctAnswerId' => 784,
                    'correct_answer' => 'B',
                    'explanation' => 'Canada’s economy saw significant growth and industrialization during the economic boom of the 1890s and early 1900s.',
                  ],

                  [
                    'text' => 'What is known as the effort by women to achieve the right to vote?',
                    'answers' => [
                      ['text' => 'The suffrage motion of women'],
                      ['text' => 'The women\'s voting law'],
                      ['text' => 'The election law'],
                      ['text' => 'The women\'s suffrage movement'],
                    ],
                    'correctAnswerId' => 790,
                    'correct_answer' => 'D',
                    'explanation' => 'The effort by women to achieve the right to vote is historically known as the women\'s suffrage movement.',
                  ],

                  [
                    'text' => 'Who were the United Empire Loyalists?',
                    'answers' => [
                      ['text' => 'Inuit and First Nations'],
                      ['text' => 'French and British settlers'],
                      ['text' => 'First Nations and British settlers'],
                      ['text' => 'Settlers from the United States during the American Revolution'],
                    ],
                    'correctAnswerId' => 794,
                    'correct_answer' => 'D',
                    'explanation' => 'United Empire Loyalists were settlers who fled the United States during the American Revolution due to their loyalty to the British Crown.',
                  ],

                  [
                    'text' => 'Which four provinces first formed Confederation?',
                    'answers' => [
                      ['text' => 'Ontario, Quebec, Nova Scotia and New Brunswick'],
                      ['text' => 'Ontario, Newfoundland, Quebec and Nova Scotia'],
                      ['text' => 'Ontario, Nova Scotia, New Brunswick and British Columbia'],
                      ['text' => 'Ontario, Quebec, Manitoba and Nova Scotia'],
                    ],
                    'correctAnswerId' => 795,
                    'correct_answer' => 'A',
                    'explanation' => 'Ontario, Quebec, Nova Scotia, and New Brunswick were the four provinces that initially formed Confederation in 1867.',
                  ],

                  [
                    'text' => 'Which region was stormed and captured on D-Day June 6 1944 by the Canadian troops?',
                    'answers' => [
                      ['text' => 'Berlin'],
                      ['text' => 'Juno Beach'],
                      ['text' => 'London'],
                      ['text' => 'Paris'],
                    ],
                    'correctAnswerId' => 800,
                    'correct_answer' => 'B',
                    'explanation' => 'Canadian troops stormed and captured Juno Beach during the D-Day invasion in Normandy on June 6, 1944.',
                  ],

                  [
                    'text' => 'What are the men who established Canada called?',
                    'answers' => [
                      ['text' => 'Fathers of Confederation'],
                      ['text' => 'Fathers of Dominion of Canada'],
                      ['text' => 'Fathers of Canada'],
                      ['text' => 'Fathers of Constitution'],
                    ],
                    'correctAnswerId' => 803,
                    'correct_answer' => 'A',
                    'explanation' => 'The men who worked to establish Canada from 1864 to 1867 are collectively known as the Fathers of Confederation.',
                  ],

                  [
                    'text' => 'In which year was the British Parliament prohibited from buying and selling slaves?',
                    'answers' => [
                      ['text' => '1793'],
                      ['text' => '1877'],
                      ['text' => '1807'],
                      ['text' => '1833'],
                    ],
                    'correctAnswerId' => 809,
                    'correct_answer' => 'C',
                    'explanation' => 'The British Parliament passed laws in 1807 to prohibit the buying and selling of slaves, followed by abolition throughout the Empire in 1833.',
                  ],

                ]


              ],
              [
                'name' => 'Practice Test 4.4',
                'info' => 'Practice Test 4.4',
                'questions' => [
                  [
                    'text' => 'Who became the first French Canadian Prime Minister since the formation of Confederation?',
                    'answers' => [
                      ['text' => 'Sir John Alexander McDonald'],
                      ['text' => 'Sir Wilfred Laurier'],
                      ['text' => 'Sir Georgette Cartier'],
                      ['text' => 'Sir Leonard Tilley'],
                    ],
                    'correctAnswerId' => 812,
                    'correct_answer' => 'B',
                    'explanation' => 'Sir Wilfrid Laurier became the first French-Canadian Prime Minister since Confederation and promoted immigration to Western Canada.',
                  ],

                  [
                    'text' => 'Who were the United Empire Loyalists?',
                    'answers' => [
                      ['text' => 'Settlers from the United States who were loyal to the Crown.'],
                      ['text' => 'The commanders of armies'],
                      ['text' => 'British colonies'],
                      ['text' => 'Aboriginal peoples'],
                    ],
                    'correctAnswerId' => 815,
                    'correct_answer' => 'A',
                    'explanation' => 'United Empire Loyalists were settlers who fled the United States during the American Revolution due to their loyalty to the British Crown, settling primarily in Nova Scotia and Quebec.',
                  ],

                  [
                    'text' => 'When was Canada\'s first financial institution opened?',
                    'answers' => [
                      ['text' => 'Early 16th century'],
                      ['text' => 'Late 19th century'],
                      ['text' => 'Late 18th and early 19th centuries'],
                      ['text' => 'Early 18th century'],
                    ],
                    'correctAnswerId' => 821,
                    'correct_answer' => 'C',
                    'explanation' => 'The first financial institutions in Canada opened in the late 18th and early 19th centuries.',
                  ],

                  [
                    'text' => 'Who was the first leader of a responsible government in Canada in 1849?',
                    'answers' => [
                      ['text' => 'Louis Riel'],
                      ['text' => 'Sir John A MacDonald'],
                      ['text' => 'Sir Louis-Hippolyte LaFontaine'],
                      ['text' => 'Alec Baldwin'],
                    ],
                    'correctAnswerId' => 825,
                    'correct_answer' => 'C',
                    'explanation' => 'Sir Louis-Hippolyte LaFontaine became the first leader of a responsible government in the Canadas in 1849, advocating for democracy and French language rights.',
                  ],

                  [
                    'text' => 'Who recommended that Upper and Lower Canada be merged and given a responsible government?',
                    'answers' => [
                      ['text' => 'Sir Guy Carlton'],
                      ['text' => 'Lord Durham'],
                      ['text' => 'Sir Louis Hippolyte La Fontaine'],
                      ['text' => 'Sir George-Etienne Cartier'],
                    ],
                    'correctAnswerId' =>  828,
                    'correct_answer' => 'B',
                    'explanation' => 'Lord Durham, an English reformer, recommended the merging of Upper and Lower Canada and granting them responsible government after reporting on the rebellions.',
                  ],

                  [
                    'text' => 'How many Canadians served in World War II?',
                    'answers' => [
                      ['text' => 'More than one million'],
                      ['text' => 'Less than 500,000'],
                      ['text' => 'About 900,000'],
                      ['text' => 'About 500,000'],
                    ],
                    'correctAnswerId' => 831,
                    'correct_answer' => 'A',
                    'explanation' => 'More than one million Canadians and Newfoundlanders served in World War II, a significant portion of the country\'s population at that time.',
                  ],

                  [
                    'text' => 'What is the National Police Force of Canada and one of its best known symbols today?',
                    'answers' => [
                      ['text' => 'The Royal Canadian Mounted Police (RCMP)'],
                      ['text' => 'The southeast Mounted Police'],
                      ['text' => 'The military police'],
                      ['text' => 'The Northwest Mounted Police'],
                    ],
                    'correctAnswerId' => 835,
                    'correct_answer' => 'A',
                    'explanation' => 'The Royal Canadian Mounted Police (RCMP or "the Mounties") is Canada\'s national police force and one of its most recognizable symbols.',
                  ],

                  [
                    'text' => 'When did Canada become the official name of the country?',
                    'answers' => [
                      ['text' => '1799'],
                      ['text' => '1773'],
                      ['text' => '1791'],
                      ['text' => '1758'],
                    ],
                    'correctAnswerId' => 841,
                    'correct_answer' => 'C',
                    'explanation' => 'The name Canada became official in 1791 with the passage of the Constitutional Act, which also divided Quebec into Upper and Lower Canada.',
                  ],

                  [
                    'text' => 'When were female Canadian citizens over the age of 21 granted the right to vote in federal elections?',
                    'answers' => [
                      ['text' => '1933'],
                      ['text' => '1928'],
                      ['text' => '1818'],
                      ['text' => '1918'],
                    ],
                    'correctAnswerId' => 846,
                    'correct_answer' => 'D',
                    'explanation' => 'In 1918, most Canadian female citizens aged 21 and over were granted the right to vote in federal elections, following their contributions during World War I.',
                  ],

                  [
                    'text' => 'Who suggested the name Dominion of Canada in 1864?',
                    'answers' => [
                      ['text' => 'Sir Leonard Tilley'],
                      ['text' => 'Lord Elgin'],
                      ['text' => 'La Fontaine'],
                      ['text' => 'Sir John Alexander MacDonald'],
                    ],
                    'correctAnswerId' => 847,
                    'correct_answer' => 'A',
                    'explanation' => 'Sir Leonard Tilley, a Father of Confederation from New Brunswick, suggested the name Dominion of Canada during discussions in 1864.',
                  ],
                  [
                    'text' => 'What was significant about the Canadian Navy at the end of the Second World War?',
                    'answers' => [
                      ['text' => 'It was the third largest Navy in the world'],
                      ['text' => 'It was the fourth largest Navy in the world'],
                      ['text' => 'It was the largest Navy in the world'],
                      ['text' => 'It was the second largest Navy in the world'],
                    ],
                    'correctAnswerId' => 851,
                    'correct_answer' => 'A',
                    'explanation' => 'At the end of the Second World War, Canada had the third largest navy in the world, a testament to its significant naval contributions during the conflict. (P23)',
                  ],

                  [
                    'text' => 'Which was the first province in the Empire to move towards the abolition of slavery?',
                    'answers' => [
                      ['text' => 'South Canada'],
                      ['text' => 'Upper Canada'],
                      ['text' => 'North America'],
                      ['text' => 'Lower Canada'],
                    ],
                    'correctAnswerId' => 856,
                    'correct_answer' => 'B',
                    'explanation' => 'Upper Canada, under Lieutenant-Colonel John Graves Simcoe, was the first province in the British Empire to move towards the abolition of slavery. Simcoe\'s efforts marked a significant step towards ending slavery in Canada. (P16)',
                  ],

                  [
                    'text' => 'Which of the following people is the father of Confederation?',
                    'answers' => [
                      ['text' => 'Stephen Harper'],
                      ['text' => 'Pierre Trudeau'],
                      ['text' => 'Alexander MacKenzie'],
                      ['text' => 'Sir John A. Macdonald'],
                    ],
                    'correctAnswerId' => 862,
                    'correct_answer' => 'D',
                    'explanation' => 'Sir John A. Macdonald is considered a Father of Confederation for his pivotal role in the creation of Canada as a nation. In 1867, he became Canada\'s first Prime Minister. (P18)',
                  ],

                  [
                    'text' => 'When was the first representative assembly in Canada elected?',
                    'answers' => [
                      ['text' => '1791'],
                      ['text' => '1758'],
                      ['text' => '1889'],
                      ['text' => '1609'],
                    ],
                    'correctAnswerId' => 864,
                    'correct_answer' => 'B',
                    'explanation' => 'The first representative assembly in Canada was elected in Halifax, Nova Scotia, in 1758, marking an early milestone in Canadian governance. (P16)',
                  ],

                  [
                    'text' => 'What did the government do to make immigration to western Canada easier?',
                    'answers' => [
                      ['text' => 'Use the Great Lakes and Seaway to Prairies'],
                      ['text' => 'Built a railway across the prairies'],
                      ['text' => 'Built a Highway across the prairies'],
                      ['text' => 'A and C'],
                    ],
                    'correctAnswerId' => 868,
                    'correct_answer' => 'B',
                    'explanation' => 'The government built a railway across the prairies to facilitate immigration to Western Canada, enabling thousands of immigrants to settle and develop the region\'s agricultural sector. (P20)',
                  ],

                  [
                    'text' => 'Who was Sir Louis-Hippolyte La Fontaine?',
                    'answers' => [
                      ['text' => 'A champion of democracy and Aboriginal rights'],
                      ['text' => 'A champion of democracy and French language rights and the first leader of a responsible government in the Canadas'],
                      ['text' => 'The first head of state'],
                      ['text' => 'The first French-speaking Prime Minister'],
                    ],
                    'correctAnswerId' => 872,
                    'correct_answer' => 'B',
                    'explanation' => 'Sir Louis-Hippolyte La Fontaine was a champion of democracy and French language rights. He became the first leader of a responsible government in the Canadas, advocating for political reforms and linguistic equality. (P18)',
                  ],

                  [
                    'text' => 'What document made Confederation legal?',
                    'answers' => [
                      ['text' => 'The Immigration Act'],
                      ['text' => 'The British North America Act'],
                      ['text' => 'The Citizenship Act'],
                      ['text' => 'The Charter of Rights and Freedoms'],
                    ],
                    'correctAnswerId' => 876,
                    'correct_answer' => 'B',
                    'explanation' => 'The British North America Act, passed by the British Parliament in 1867, made Confederation legal and established the Dominion of Canada. (P18)',
                  ],

                  [
                    'text' => 'What did the Canadian Pacific Railway symbolize?',
                    'answers' => [
                      ['text' => 'Easy access to the West Coast'],
                      ['text' => 'What can be achieved by working together'],
                      ['text' => 'Unity'],
                      ['text' => 'Ribbons of Steel'],
                    ],
                    'correctAnswerId' => 881,
                    'correct_answer' => 'C',
                    'explanation' => 'The Canadian Pacific Railway symbolized unity, as its completion in 1885 connected Canada from coast to coast, facilitating national transportation and economic development. (P20)',
                  ],

                  [
                    'text' => 'How many Canadians served in the First World War?',
                    'answers' => [
                      ['text' => 'About 170,000'],
                      ['text' => 'About 10,000'],
                      ['text' => 'More than 60,000'],
                      ['text' => 'More than 600,000'],
                    ],
                    'correctAnswerId' => 886,
                    'correct_answer' => 'D',
                    'explanation' => 'More than 600,000 Canadians served in the First World War, reflecting significant national contribution and sacrifice during the conflict. (P21)',
                  ],

                  [
                    'text' => 'Which phrase embodied the vision for the Dominion of Canada?',
                    'answers' => [
                      ['text' => '“The land of the strong and free”'],
                      ['text' => '“Dominion from sea to sea and from the river to the ends of the Earth”'],
                      ['text' => '“Dominion from Ocean to Ocean”'],
                      ['text' => '“Oh Canada, my home and native land”'],
                    ],
                    'correctAnswerId' => 888,
                    'correct_answer' => 'B',
                    'explanation' => '“Dominion from sea to sea and from the river to the ends of the Earth” embodied the vision for the Dominion of Canada, reflecting the ambition to build a powerful, united, wealthy, and free country across a vast continent. (P18)',
                  ],

                ]
              ],
              [
                'name' => 'Practice Test 4.5',
                'info' => 'Practice Test 4.5',
                'questions' => [
                  [
                    'text' => 'What year was Confederation?',
                    'answers' => [
                      ['text' => '1867'],
                      ['text' => '1687'],
                      ['text' => '1876'],
                      ['text' => '1786'],
                    ],
                    'correctAnswerId' => 891,
                    'correct_answer' => 'A',
                    'explanation' => 'A federation of colonies in British North America - New Brunswick, Nova Scotia, Quebec, and Ontario - joined together to become the Dominion of Canada on July 1, 1867. (P18)',
                  ],

                  [
                    'text' => 'Who was the first female Member of Parliament?',
                    'answers' => [
                      ['text' => 'Agnes Macphail'],
                      ['text' => 'Mary Ann Shadd Cary'],
                      ['text' => 'Laura Secord'],
                      ['text' => 'Alice Munro'],
                    ],
                    'correctAnswerId' => 895,
                    'correct_answer' => 'A',
                    'explanation' => 'In 1921, Agnes Macphail became the first woman MP in Canada, marking a significant milestone for women in Canadian politics. (P21)',
                  ],

                  [
                    'text' => 'In 1939, Canada joined with its democratic allies to fight:',
                    'answers' => [
                      ['text' => 'The USA'],
                      ['text' => 'Japan'],
                      ['text' => 'Nazi'],
                      ['text' => 'Korea'],
                    ],
                    'correctAnswerId' => 901,
                    'correct_answer' => 'C',
                    'explanation' => 'In 1939, Canada joined its democratic allies to fight against Nazi Germany and its Axis powers during the Second World War. (P23)',
                  ],

                  [
                    'text' => 'How many Canadians have died in wars till now?',
                    'answers' => [
                      ['text' => '60,000'],
                      ['text' => '110,000'],
                      ['text' => 'More than one million'],
                      ['text' => '40,000'],
                    ],
                    'correctAnswerId' => 904,
                    'correct_answer' => 'B',
                    'explanation' => 'Over 110,000 Canadians have died in wars, a fact commemorated annually on November 11 with the wearing of the red poppy and a moment of silence. (P22)',
                  ],

                  [
                    'text' => 'Name a Canadian heroine who warned James Fitzgibbon of a planned American attack during the War of 1812.',
                    'answers' => [
                      ['text' => 'Agnes Macphail'],
                      ['text' => 'Mary Ann Shadd Cary'],
                      ['text' => 'Laura Secord'],
                      ['text' => 'Alice Munro'],
                    ],
                    'correctAnswerId' => 909,
                    'correct_answer' => 'C',
                    'explanation' => 'Laura Secord bravely warned Lieutenant James FitzGibbon of a planned American attack during the War of 1812, contributing to a crucial Canadian victory. (P17)',
                  ],

                  [
                    'text' => 'What is celebrated on April 9th?',
                    'answers' => [
                      ['text' => 'Vimy Day'],
                      ['text' => 'Family Day'],
                      ['text' => 'Thanksgiving Day'],
                      ['text' => 'Boxing Day'],
                    ],
                    'correctAnswerId' => 911,
                    'correct_answer' => 'A',
                    'explanation' => 'April 9th is celebrated as Vimy Day in Canada, commemorating the Battle of Vimy Ridge and honoring those who served. (P21)',
                  ],

                  [
                    'text' => 'For how long was the title “Dominion of Canada” officially used?',
                    'answers' => [
                      ['text' => '100 years'],
                      ['text' => '250 years'],
                      ['text' => '50 years'],
                      ['text' => '200 years'],
                    ],
                    'correctAnswerId' => 915,
                    'correct_answer' => 'A',
                    'explanation' => 'The title "Dominion of Canada" was officially used for about 100 years, reflecting its historical significance in Canadian governance and identity. (P18)',
                  ],

                  [
                    'text' => 'Who was Sir Sam Steele?',
                    'answers' => [
                      ['text' => 'A great Frontier hero, mounted policeman and soldier of the queen'],
                      ['text' => 'A military leader of the Métis in the 19th century'],
                      ['text' => 'The first Prime Minister of Canada'],
                      ['text' => 'The father of Manitoba'],
                    ],
                    'correctAnswerId' => 919,
                    'correct_answer' => 'A',
                    'explanation' => 'Sir Sam Steele was renowned as a great Frontier hero, mounted policeman, and soldier of the queen, known for his significant contributions to law enforcement and military service. (P19)',
                  ],

                  [
                    'text' => 'What principle was Canada\'s Constitution founded on?',
                    'answers' => [
                      ['text' => 'Independence and freedom'],
                      ['text' => 'Liberty, equality and fraternity'],
                      ['text' => 'Liberty and pursuit of freedom'],
                      ['text' => 'Peace, order and good government'],
                    ],
                    'correctAnswerId' => 926,
                    'correct_answer' => 'D',
                    'explanation' => 'Canada\'s Constitution was founded on the principle of "Peace, Order and Good Government," which has shaped the country\'s legal and political framework since the British North America Act of 1867. (P16)',
                  ],

                  [
                    'text' => 'Why did the first European explorers call the native peoples "Indians"?',
                    'answers' => [
                      ['text' => 'They thought they had reached Indonesia'],
                      ['text' => 'Because they named their first town "Indianapolis"'],
                      ['text' => 'Because "Indian" means "aboriginal" in Irish'],
                      ['text' => 'They thought they had reached the East Indies'],
                    ],
                    'correctAnswerId' => 930,
                    'correct_answer' => 'D',
                    'explanation' => 'The first European explorers called the native peoples "Indians" because they mistakenly thought they had reached the East Indies. This misnomer has persisted in historical terminology despite the geographical error. ',
                  ],
                  [
                    'text' => 'In becoming Canadian, which principles are newcomers expected to embrace?',
                    'answers' => [
                      ['text' => 'Capitalist'],
                      ['text' => 'Libertarian'],
                      ['text' => 'Democratic'],
                      ['text' => 'Liberalist'],
                    ],
                    'correctAnswerId' => 933,
                    'correct_answer' => 'C',
                    'explanation' => 'Newcomers to Canada are expected to embrace democratic principles such as the rule of law, reflecting Canada\'s commitment to democracy and equality. Violent, extreme, or hateful prejudices are not acceptable. ',
                  ],

                  [
                    'text' => 'Regarding diversity, as what is Canada often referred?',
                    'answers' => [
                      ['text' => 'The Great Outdoors'],
                      ['text' => 'The Great Dominion'],
                      ['text' => 'The land of the strong and free'],
                      ['text' => 'A land of immigrants'],
                    ],
                    'correctAnswerId' => 938,
                    'correct_answer' => 'D',
                    'explanation' => 'Canada is often referred to as a land of immigrants because millions of newcomers have immigrated to Canada over the past 200 years, contributing to its diversity and growth. ',
                  ],

                  [
                    'text' => 'Who passed the Quebec Act of 1774?',
                    'answers' => [
                      ['text' => 'The French majority'],
                      ['text' => 'The Canadian Parliament'],
                      ['text' => 'The British Parliament'],
                      ['text' => 'The Quebec Parliament'],
                    ],
                    'correctAnswerId' => 941,
                    'correct_answer' => 'C',
                    'explanation' => 'The British Parliament passed the Quebec Act of 1774 to govern the French Roman Catholic majority in Quebec, adapting British institutions to accommodate Quebec\'s realities. It is a foundational part of Canada\'s constitutional history.',
                  ],

                  [
                    'text' => 'When were the first companies in Canada formed?',
                    'answers' => [
                      ['text' => 'After the Second World War'],
                      ['text' => 'During the French regime'],
                      ['text' => 'During the French and British regimes'],
                      ['text' => 'During the British regime'],
                    ],
                    'correctAnswerId' => 945,
                    'correct_answer' => 'C',
                    'explanation' => 'The first companies in Canada were formed during the French and British regimes, primarily involved in the fur trade and laying the economic foundations of early Canada.',
                  ],

                  [
                    'text' => 'In what year were Upper and Lower Canada united?',
                    'answers' => [
                      ['text' => '1840'],
                      ['text' => '1759'],
                      ['text' => '1867'],
                      ['text' => '1882'],
                    ],
                    'correctAnswerId' => 947,
                    'correct_answer' => 'A',
                    'explanation' => 'Upper and Lower Canada were united as the Province of Canada in 1840, following a period of political and social reforms led by figures like Sir Louis-Hippolyte La Fontaine and Robert Baldwin.',
                  ],

                  [
                    'text' => 'Who became the first leader of a responsible government in the Canadas?',
                    'answers' => [
                      ['text' => 'Joseph Howe'],
                      ['text' => 'La Fontaine'],
                      ['text' => 'Sir John A. Macdonald'],
                      ['text' => 'Robert Baldwin'],
                    ],
                    'correctAnswerId' => 952,
                    'correct_answer' => 'B',
                    'explanation' => 'Sir Louis-Hippolyte La Fontaine became the first leader of a responsible government (similar to a prime minister) in Canada in 1849, advocating for French language rights and democratic reforms.',
                  ],

                  [
                    'text' => 'Who was a champion of French language rights?',
                    'answers' => [
                      ['text' => 'Sir George-Etienne Cartier'],
                      ['text' => 'Count Frontenac'],
                      ['text' => 'Sir Etienne-Paschal Tache'],
                      ['text' => 'Sir Louis-Hippolyte La Fontaine'],
                    ],
                    'correctAnswerId' => 958,
                    'correct_answer' => 'D',
                    'explanation' => 'Sir Louis-Hippolyte La Fontaine was a prominent advocate for French language rights in Canada and played a crucial role in establishing responsible government in the 19th century.',
                  ],

                  [
                    'text' => 'Which current provinces came out from the Constitutional Act?',
                    'answers' => [
                      ['text' => 'Ontario and Prince Edward Island'],
                      ['text' => 'Ontario and New Brunswick'],
                      ['text' => 'Ontario and Quebec'],
                      ['text' => 'Prince Edward Island and Quebec'],
                    ],
                    'correctAnswerId' => 961,
                    'correct_answer' => 'C',
                    'explanation' => 'The Constitutional Act of 1791 divided the Province of Quebec into Upper Canada (later Ontario), which was primarily Loyalist and English-speaking, and Lower Canada (later Quebec), predominantly Catholic and French-speaking.',
                  ],

                  [
                    'text' => 'What was the Underground Railroad?',
                    'answers' => [
                      ['text' => 'A Christian anti-slavery network'],
                      ['text' => 'The name of a famous circle of Canadian artists in the late 1960s'],
                      ['text' => 'The unofficial railroad network linking small communities across Canada'],
                      ['text' => 'The name of the new railroad linking the East to the West of Canada'],
                    ],
                    'correctAnswerId' => 963,
                    'correct_answer' => 'A',
                    'explanation' => 'The Underground Railroad was a network of routes and safe houses used by enslaved African Americans to escape to free states and Canada. It was supported by abolitionists and played a significant role in the abolition of slavery.',
                  ],

                  [
                    'text' => 'Who contributed more to the Allied air effort than any other Commonwealth country during the Second World War?',
                    'answers' => [
                      ['text' => 'England'],
                      ['text' => 'Canada'],
                      ['text' => 'India'],
                      ['text' => 'Australia'],
                    ],
                    'correctAnswerId' => 967,
                    'correct_answer' => 'B',
                    'explanation' => 'Canada contributed more to the Allied air effort than any other Commonwealth country during World War II, training over 130,000 Allied air crew under the British Commonwealth Air Training Plan.',
                  ],

                ]
              ],
              [
                'name' => 'Practice Test 4.6',
                'info' => 'Practice Test 4.6',
                'questions' => [
                  [
                    'text' => 'In which year was Canada’s first Prime Minister elected?',
                    'answers' => [
                      ['text' => '1867'],
                      ['text' => '1764'],
                      ['text' => '1964'],
                      ['text' => '1869'],
                    ],
                    'correctAnswerId' => 971,
                    'correct_answer' => 'A',
                    'explanation' => 'Sir John Alexander Macdonald became Canada’s first Prime Minister in 1867, the year of Confederation. He played a crucial role in the formation and early governance of Canada.',
                  ],

                  [
                    'text' => 'Who claimed Canadian land for King Francis I of France between 1534 and 1542?',
                    'answers' => [
                      ['text' => 'Samuel de Champlain'],
                      ['text' => 'Pierre de Monts'],
                      ['text' => 'Jacques Cartier'],
                      ['text' => 'John Cabot'],
                    ],
                    'correctAnswerId' => 977,
                    'correct_answer' => 'C',
                    'explanation' => 'Jacques Cartier made three voyages between 1534 and 1542, claiming parts of Canada for King Francis I of France, which laid the foundation for French colonization in North America.',
                  ],

                  [
                    'text' => 'What is the significance of the Quebec Act of 1774?',
                    'answers' => [
                      ['text' => 'It allowed religious freedom for Catholics and permitted them to hold public office'],
                      ['text' => 'It united the Province of Quebec with the rest of Canada'],
                      ['text' => 'It enacted the birth of Canada'],
                      ['text' => 'It provided peace, order and good government'],
                    ],
                    'correctAnswerId' => 979,
                    'correct_answer' => 'A',
                    'explanation' => 'The Quebec Act of 1774 was passed by the British Parliament to better govern the French Roman Catholic majority in Quebec. It granted religious freedoms and permitted Catholics to hold public office, addressing their specific needs and securing British rule in Quebec.',
                  ],

                  [
                    'text' => 'During the Second World War, what was the ratio of Canadians in the Allied forces on D-Day?',
                    'answers' => [
                      ['text' => '1 in 2'],
                      ['text' => '1 in 10'],
                      ['text' => '1 in 3'],
                      ['text' => '1 in 5'],
                    ],
                    'correctAnswerId' => 984,
                    'correct_answer' => 'B',
                    'explanation' => 'Approximately one in ten Allied soldiers on D-Day (June 6, 1944) was Canadian. The Canadian forces played a significant role in the Normandy landings and subsequent operations during the liberation of Europe.',
                  ],

                  [
                    'text' => 'Who refused to surrender Quebec to the English in 1690?',
                    'answers' => [
                      ['text' => 'Count Frontenac'],
                      ['text' => 'Bishop Laval'],
                      ['text' => 'Jean Talon'],
                      ['text' => 'Pierre Le Moyne'],
                    ],
                    'correctAnswerId' => 987,
                    'correct_answer' => 'A',
                    'explanation' => 'Count Frontenac, the Governor of New France, famously refused to surrender Quebec to the English during the Battle of Quebec in 1690, declaring his defiance with the statement, “My only reply will be from the mouths of my cannons!”',
                  ],

                  [
                    'text' => 'When did European exploration begin in Canada?',
                    'answers' => [
                      ['text' => '1497'],
                      ['text' => '1510'],
                      ['text' => '1597'],
                      ['text' => '1610'],
                    ],
                    'correctAnswerId' => 991,
                    'correct_answer' => 'A',
                    'explanation' => 'European exploration of Canada began in 1497 with the expedition of John Cabot, who explored the coast of Newfoundland and claimed it for England.',
                  ],

                  [
                    'text' => 'For what is Laura Secord known?',
                    'answers' => [
                      ['text' => 'She was an anti-slavery activist and the first woman publisher in Canada'],
                      ['text' => 'She made a dangerous thirty km journey on foot to warn of a planned American attack during the War of 1812'],
                      ['text' => 'She was the founder of the women\'s suffrage movement'],
                      ['text' => 'She was the founder of the Canadian feminist movement'],
                    ],
                    'correctAnswerId' => 996,
                    'correct_answer' => 'B',
                    'explanation' => 'Laura Secord is known for making a dangerous 19-mile (30-km) journey on foot to warn Lieutenant James FitzGibbon of an impending American attack during the War of 1812. Her bravery contributed to a crucial victory at the Battle of Beaver Dams.',
                  ],

                  [
                    'text' => 'For centuries, on what was Canada’s economy based?',
                    'answers' => [
                      ['text' => 'Trading with the First Nations'],
                      ['text' => 'Exporting natural resources'],
                      ['text' => 'Farming and exporting natural resources'],
                      ['text' => 'Farming'],
                    ],
                    'correctAnswerId' => 1001,
                    'correct_answer' => 'C',
                    'explanation' => 'For centuries, Canada’s economy was based on farming and exporting natural resources such as fur, fish, and timber. These activities formed the economic backbone of early Canadian settlements and trading posts.',
                  ],

                  [
                    'text' => 'What are leaders like Jean Talon, Bishop Laval, and Count Frontenac famous for?',
                    'answers' => [
                      ['text' => 'They defeated the French armies during the War between France and England'],
                      ['text' => 'They built a British Empire in North America that reached from Hudson Bay to the Gulf of Mexico'],
                      ['text' => 'They built a French Empire in North America that reached from Hudson Bay to the Gulf of Mexico'],
                      ['text' => 'They defeated the British armies during the War between France and England'],
                    ],
                    'correctAnswerId' => 1005,
                    'correct_answer' => 'C',
                    'explanation' => 'Jean Talon, Bishop Laval, and Count Frontenac are famous for their roles in building and expanding the French colonial empire in North America, which extended from Hudson Bay to the Gulf of Mexico.',
                  ],

                  [
                    'text' => 'What was driving the vast fur trade economy?',
                    'answers' => [
                      ['text' => 'The demand for beaver pelts in Europe'],
                      ['text' => 'The demand for beaver pelts in Asia'],
                      ['text' => 'The demand for beaver pelts in Aboriginal communities'],
                      ['text' => 'The needs for beaver pelts in the settlers'],
                    ],
                    'correctAnswerId' => 1007,
                    'correct_answer' => 'A',
                    'explanation' => 'The vast fur trade economy in Canada was primarily driven by the demand for beaver pelts in Europe. The fur trade was a significant economic activity that shaped early interactions between Europeans and Indigenous peoples in Canada.',
                  ],
                  [
                    'text' => 'At the end of the Second World War, Canada’s navy was:',
                    'answers' => [
                      ['text' => 'Canada had no navy at that time'],
                      ['text' => 'The second largest in the world'],
                      ['text' => 'The largest in the world'],
                      ['text' => 'The third largest in the world'],
                    ],
                    'correctAnswerId' => 1014,
                    'correct_answer' => 'D',
                    'explanation' => 'The Royal Canadian Navy (RCN) became the third-largest navy in the world by the end of World War II, due to its significant contributions in the Battle of the Atlantic and other campaigns.',
                  ],

                  [
                    'text' => 'What type of bond did Aboriginals and Europeans form in the first 200 years of coexistence?',
                    'answers' => [
                      ['text' => 'Economic'],
                      ['text' => 'Economic and Military'],
                      ['text' => 'Religious'],
                      ['text' => 'Economic, religious and military'],
                    ],
                    'correctAnswerId' => 1018,
                    'correct_answer' => 'D',
                    'explanation' => 'Aboriginals and Europeans formed strong bonds that were economic, religious, and military in nature during their first 200 years of coexistence, shaping early Canadian history.',
                  ],

                  [
                    'text' => 'Which natives were farmers and hunters?',
                    'answers' => [
                      ['text' => 'The Cree and Dene of the Northwest'],
                      ['text' => 'The Sioux'],
                      ['text' => 'Huron-Wendat of the Great Lakes region and the Iroquois'],
                      ['text' => 'The Inuit'],
                    ],
                    'correctAnswerId' => 1021,
                    'correct_answer' => 'C',
                    'explanation' => 'The Huron-Wendat of the Great Lakes region, along with the Iroquois, were known as farming and hunting communities among the Indigenous peoples of Canada.',
                  ],

                  [
                    'text' => 'Who dominated the fur trade in the North West during the French and British regimes?',
                    'answers' => [
                      ['text' => 'The North Star company'],
                      ['text' => 'The Sears company'],
                      ['text' => 'The Hudson\'s Bay Company'],
                      ['text' => 'The Trading Post company'],
                    ],
                    'correctAnswerId' => 1025,
                    'correct_answer' => 'C',
                    'explanation' => 'The Hudson\'s Bay Company dominated the fur trade in the Northwest during both the French and British colonial periods, establishing a network of trading posts across the region.',
                  ],

                  [
                    'text' => 'When is Canada Day?',
                    'answers' => [
                      ['text' => 'First of November'],
                      ['text' => '11th of November'],
                      ['text' => '11th of September'],
                      ['text' => 'First of July'],
                    ],
                    'correctAnswerId' => 1030,
                    'correct_answer' => 'D',
                    'explanation' => 'Canada Day is celebrated on the 1st of July each year. It commemorates the day in 1867 when the Dominion of Canada was officially established under the British North America Act.',
                  ],

                  [
                    'text' => 'When did English settlement begin in Canada?',
                    'answers' => [
                      ['text' => '1610'],
                      ['text' => '1510'],
                      ['text' => '1720'],
                      ['text' => '1497'],
                    ],
                    'correctAnswerId' => 1031,
                    'correct_answer' => 'A',
                    'explanation' => 'English settlement in Canada began around 1610, with significant efforts to establish permanent colonies and trading posts in various parts of what would become Canada.',
                  ],

                  [
                    'text' => 'Which British Empire province was the first to abolish slavery?',
                    'answers' => [
                      ['text' => 'Ontario'],
                      ['text' => 'Upper Canada'],
                      ['text' => 'Quebec'],
                      ['text' => 'Lower Canada'],
                    ],
                    'correctAnswerId' => 1036,
                    'correct_answer' => 'B',
                    'explanation' => 'Upper Canada, under Lieutenant Governor John Graves Simcoe in 1793, was the first province in the British Empire to pass legislation that began the process of abolishing slavery.',
                  ],

                  [
                    'text' => 'What made it possible for immigrants to settle in Western Canada?',
                    'answers' => [
                      ['text' => 'The completion of the Canadian National Railway'],
                      ['text' => 'The giving of free land to new settlers'],
                      ['text' => 'The completion of the Canadian Pacific Railway'],
                      ['text' => 'The completion of the port of Vancouver'],
                    ],
                    'correctAnswerId' => 1041,
                    'correct_answer' => 'C',
                    'explanation' => 'The completion of the Canadian Pacific Railway in the late 19th century facilitated large-scale immigration and settlement in Western Canada, opening up vast areas for agricultural development and urban growth.',
                  ],

                  [
                    'text' => 'When was the R.C.M.P created?',
                    'answers' => [
                      ['text' => '1869'],
                      ['text' => '1873'],
                      ['text' => '1892'],
                      ['text' => '1864'],
                    ],
                    'correctAnswerId' => 1044,
                    'correct_answer' => 'B',
                    'explanation' => 'The Royal Canadian Mounted Police (RCMP) was established in 1873 as the North West Mounted Police (NWMP) to bring law and order to the Western territories of Canada.',
                  ],

                  [
                    'text' => 'What is the current name of the fortress that Samuel de Champlain built in 1608?',
                    'answers' => [
                      ['text' => 'Montreal'],
                      ['text' => 'Port Royal'],
                      ['text' => 'Ottawa'],
                      ['text' => 'Quebec City'],
                    ],
                    'correctAnswerId' => 1050,
                    'correct_answer' => 'D',
                    'explanation' => 'The fortress that Samuel de Champlain built in 1608 is located in Quebec City. This settlement played a crucial role in the establishment of French presence and influence in Canada.',
                  ],

                ]
              ],
              [
                'name' => 'Practice Test 4.7',
                'info' => 'Practice Test 4.7',
                'questions' => [
                  [
                    'text' => 'When did the Montreal Stock Exchange open?',
                    'answers' => [
                      ['text' => '1832'],
                      ['text' => '1932'],
                      ['text' => '1905'],
                      ['text' => '1887'],
                    ],
                    'correctAnswerId' => 1051,
                    'correct_answer' => 'A',
                    'explanation' => 'The Montreal Stock Exchange opened in 1832, marking the beginning of organized trading in Canada\'s financial markets.',
                  ],

                  [
                    'text' => 'What were the Atlantic colonies and the two Canadas known collectively as in 1791?',
                    'answers' => [
                      ['text' => 'Lower Canada'],
                      ['text' => 'Upper Canada'],
                      ['text' => 'Ontario'],
                      ['text' => 'British North America'],
                    ],
                    'correctAnswerId' => 1058,
                    'correct_answer' => 'D',
                    'explanation' => 'In 1791, the Atlantic colonies (Nova Scotia, New Brunswick, Prince Edward Island, and Newfoundland) along with Upper Canada (Ontario) and Lower Canada (Quebec) were collectively known as British North America.',
                  ],

                  [
                    'text' => 'When did Canadian medical officer Lt. Col. John McCrae compose the poem "In Flanders Fields" that is often recited on Remembrance Day?',
                    'answers' => [
                      ['text' => '1918'],
                      ['text' => '1915'],
                      ['text' => '1812'],
                      ['text' => '1945'],
                    ],
                    'correctAnswerId' => 1060,
                    'correct_answer' => 'B',
                    'explanation' => 'Lt. Col. John McCrae composed the poem "In Flanders Fields" in 1915 during World War I, which has since become an iconic piece recited on Remembrance Day in Canada and other Commonwealth countries.',
                  ],

                  [
                    'text' => 'Who granted the Hudson’s Bay Company exclusive trading rights?',
                    'answers' => [
                      ['text' => 'King Charles II of England'],
                      ['text' => 'King Charles I of England'],
                      ['text' => 'King James'],
                      ['text' => 'King George II'],
                    ],
                    'correctAnswerId' => 1063,
                    'correct_answer' => 'A',
                    'explanation' => 'In 1670, King Charles II of England granted the Hudson’s Bay Company exclusive trading rights over the watershed draining into Hudson Bay, establishing its dominance in the fur trade.',
                  ],

                  [
                    'text' => 'When was the Bank of Canada created?',
                    'answers' => [
                      ['text' => '1934'],
                      ['text' => '1945'],
                      ['text' => '1939'],
                      ['text' => '1942'],
                    ],
                    'correctAnswerId' => 1067,
                    'correct_answer' => 'A',
                    'explanation' => 'The Bank of Canada, Canada\'s central bank responsible for monetary policy and financial stability, was established in 1934 during the Great Depression.',
                  ],

                  [
                    'text' => 'The British territories in the Caribbean Sea are part of Canada.',
                    'answers' => [
                      ['text' => 'False'],
                      ['text' => 'True'],
                    ],
                    'correctAnswerId' => 1071,
                    'correct_answer' => 'A',
                    'explanation' => 'False. While there were discussions in the 1920s about integrating the British West Indies (territories in the Caribbean) into Canada, this did not materialize, although Canada maintains close ties with these territories.',
                  ],

                  [
                    'text' => 'What did Lower Canada mainly consist of?',
                    'answers' => [
                      ['text' => 'Protestant and French-speaking people'],
                      ['text' => 'Loyalist, Protestant and English-speaking people'],
                      ['text' => 'Loyalist, Catholic and English-speaking people'],
                      ['text' => 'Catholic and French-speaking people'],
                    ],
                    'correctAnswerId' => 1076,
                    'correct_answer' => 'D',
                    'explanation' => 'Lower Canada (later Quebec) mainly consisted of Catholic and French-speaking people, distinguishing it from Upper Canada (later Ontario) which had a majority of Loyalist, Protestant, and English-speaking population.',
                  ],

                  [
                    'text' => 'Name 3 Fathers of Confederation',
                    'answers' => [
                      ['text' => 'Jospeh Howe, Robert La Fontaine, and Sir Etienne-Paschal Tache'],
                      ['text' => 'La Fontaine, Robert Baldwin, and Joseph Howe'],
                      ['text' => 'Joseph Brant, Joseph Howe, and James Macdonald'],
                      ['text' => 'Sir Etienne-Paschal Tache, Sir George-Etienne Cartier, and Sir John A. Macdonald'],
                    ],
                    'correctAnswerId' => 1080,
                    'correct_answer' => 'D',
                    'explanation' => 'Sir Etienne-Paschal Tache, Sir George-Etienne Cartier, and Sir John A. Macdonald are considered Fathers of Confederation for their roles in the Confederation conferences and the establishment of Canada as a Dominion in 1867.',
                  ],

                  [
                    'text' => 'The arrival of Europeans in Canada changed the native way of life forever',
                    'answers' => [
                      ['text' => 'False'],
                      ['text' => 'True'],
                    ],
                    'correctAnswerId' => 1082,
                    'correct_answer' => 'B',
                    'explanation' => 'True. The arrival of European traders, missionaries, soldiers, and settlers irreversibly changed the way of life for Indigenous peoples in Canada, impacting their societies, cultures, and population dynamics.',
                  ],

                  [
                    'text' => 'What did the Battle of Trafalgar (1805) represent?',
                    'answers' => [
                      ['text' => 'The defeat of the American fleet'],
                      ['text' => 'The defeat of Major-General Sir Isaac Brock\'s fleet'],
                      ['text' => 'The defeat of Napoleon Bonaparte\'s fleet'],
                      ['text' => 'The defeat of the British fleet'],
                    ],
                    'correctAnswerId' => 1085,
                    'correct_answer' => 'C',
                    'explanation' => 'The Battle of Trafalgar in 1805 represented the decisive defeat of Napoleon Bonaparte\'s fleet by the British Royal Navy, securing British naval supremacy and impacting its global territories including Canada.',
                  ],
                  [
                    'text' => 'What did Upper Canada mainly consist of?',
                    'answers' => [
                      ['text' => 'Loyalist, Protestant and English-speaking people'],
                      ['text' => 'Catholic and French-speaking people'],
                      ['text' => 'Protestant and French-speaking people'],
                      ['text' => 'Loyalist, Catholic and English-speaking people'],
                    ],
                    'correctAnswerId' => 1087,
                    'correct_answer' => 'A',
                    'explanation' => 'Upper Canada (later Ontario) mainly consisted of Loyalist, Protestant, and English-speaking people according to the Constitutional Act of 1791.',
                  ],

                  [
                    'text' => 'In Canada, how did democratic institutions develop?',
                    'answers' => [
                      ['text' => 'Rapidly and with a lot of fighting'],
                      ['text' => 'Rapidly and peacefully'],
                      ['text' => 'Gradually and with a lot of fighting'],
                      ['text' => 'Gradually and peacefully'],
                    ],
                    'correctAnswerId' => 1094,
                    'correct_answer' => 'D',
                    'explanation' => 'Democratic institutions in Canada developed gradually and peacefully. The first representative assembly was elected in Halifax, Nova Scotia, in 1758, marking the early stages of democratic governance.',
                  ],

                  [
                    'text' => 'Regarding the European - Aboriginal relationship, which of the following statements is false?',
                    'answers' => [
                      ['text' => 'Aboriginals and Europeans formed strong economic, religious and military bonds in the first 200 years of coexistence which laid the foundations of Canada'],
                      ['text' => 'Large numbers of Aboriginals died of European diseases to which they lacked immunity'],
                      ['text' => 'European traders, missionaries, soldiers and colonists killed most of the native population in Canada'],
                      ['text' => 'The arrival of European traders, missionaries, soldiers and colonists changed the native way of life forever'],
                    ],
                    'correctAnswerId' => 1097,
                    'correct_answer' => 'C',
                    'explanation' => 'The statement that European traders, missionaries, soldiers, and colonists killed most of the native population in Canada is false. While diseases and conflicts did devastate Indigenous populations, there was not a deliberate extermination effort.',
                  ],

                  [
                    'text' => 'What marked the end of France’s empire in America in the 1700s?',
                    'answers' => [
                      ['text' => 'The French defeated the English in warfare'],
                      ['text' => 'English colonies became more populated than French colonies'],
                      ['text' => 'The British invaded Quebec City'],
                      ['text' => 'The British defeated the French in the Battle of the Plains of Abraham at Quebec City'],
                    ],
                    'correctAnswerId' => 1102,
                    'correct_answer' => 'D',
                    'explanation' => 'The end of France’s empire in America in the 1700s was marked by the British victory in the Battle of the Plains of Abraham at Quebec City in 1759.',
                  ],

                  [
                    'text' => 'What did Great Britain rename the French colony of the 1700s?',
                    'answers' => [
                      ['text' => 'Ontario'],
                      ['text' => 'The "Province of Quebec"'],
                      ['text' => 'Quebec City'],
                      ['text' => 'Acadia'],
                    ],
                    'correctAnswerId' => 1108,
                    'correct_answer' => 'B',
                    'explanation' => 'Following their victory over France, Great Britain renamed the French colony of the 1700s to the "Province of Quebec." This marked the beginning of British rule in the region.',
                  ],

                  [
                    'text' => 'What is the Royal Canadian Mounted Police?',
                    'answers' => [
                      ['text' => 'A national police force'],
                      ['text' => 'A provincial police force'],
                      ['text' => 'A municipal police force'],
                      ['text' => 'Army police'],
                    ],
                    'correctAnswerId' => 1107,
                    'correct_answer' => 'A',
                    'explanation' => 'The Royal Canadian Mounted Police (RCMP or “the Mounties”) are Canada’s national police force, recognized for their iconic role in law enforcement and maintaining order across the country.',
                  ],

                  [
                    'text' => 'What level of government did the Fathers of Confederation create?',
                    'answers' => [
                      ['text' => 'Provincial and territorial'],
                      ['text' => 'Federal and provincial'],
                      ['text' => 'Federal and municipal'],
                      ['text' => 'Provincial and municipal'],
                    ],
                    'correctAnswerId' => 1112,
                    'correct_answer' => 'B',
                    'explanation' => 'The Fathers of Confederation created a system of federal and provincial government in Canada through the Confederation conferences from 1864 to 1867.',
                  ],

                  [
                    'text' => 'When did the British Parliament abolish slavery throughout the Empire?',
                    'answers' => [
                      ['text' => '1833'],
                      ['text' => '1793'],
                      ['text' => '1853'],
                      ['text' => '1807'],
                    ],
                    'correctAnswerId' => 1115,
                    'correct_answer' => 'A',
                    'explanation' => 'The British Parliament abolished slavery throughout the Empire in 1833, following earlier steps in 1807 to prohibit the transatlantic slave trade.',
                  ],

                  [
                    'text' => 'Who battled for control of North America in the 1700s?',
                    'answers' => [
                      ['text' => 'France and the United States'],
                      ['text' => 'Great Britain and the United States'],
                      ['text' => 'France and Ireland'],
                      ['text' => 'France and Great Britain'],
                    ],
                    'correctAnswerId' => 1122,
                    'correct_answer' => 'D',
                    'explanation' => 'In the 1700s, France and Great Britain battled for control of North America, with conflicts such as the French and Indian War (Seven Years\' War) shaping the continent\'s history.',
                  ],

                  [
                    'text' => 'When did the French and the Iroquois make peace?',
                    'answers' => [
                      ['text' => '1754'],
                      ['text' => '1801'],
                      ['text' => '1701'],
                      ['text' => '1601'],
                    ],
                    'correctAnswerId' => 1125,
                    'correct_answer' => 'C',
                    'explanation' => 'The French and the Iroquois made peace in 1701. This agreement was significant in reducing hostilities and establishing diplomatic relations between the French settlers and the powerful Iroquois Confederacy.',
                  ],

                ]
              ],
              [
                'name' => 'Practice Test 4.8',
                'info' => 'Practice Test 4.8',
                'questions' => [
                  [
                    'text' => 'Which natives were nomadic, following the bison (buffalo) herds?',
                    'answers' => [
                      ['text' => 'The Cree and Dene of the Northwest'],
                      ['text' => 'The Inuit'],
                      ['text' => 'The Sioux'],
                      ['text' => 'Huron-Wendat of the Great Lakes region and the Iroquois'],
                    ],
                    'correctAnswerId' => 1129,
                    'correct_answer' => 'C',
                    'explanation' => 'The Sioux were nomadic, following the bison (buffalo) herds across the Great Plains. This lifestyle was integral to their culture and survival in the region.',
                  ],

                  [
                    'text' => 'When did the United States launch an invasion on Canada?',
                    'answers' => [
                      ['text' => '1812'],
                      ['text' => '1867'],
                      ['text' => '1849'],
                      ['text' => '1840'],
                    ],
                    'correctAnswerId' => 1131,
                    'correct_answer' => 'A',
                    'explanation' => 'The United States launched an invasion on Canada in 1812, driven by grievances over British interference with American shipping and the desire to annex Canadian territory.',
                  ],

                  [
                    'text' => 'Which natives lived off Arctic wildlife?',
                    'answers' => [
                      ['text' => 'The Cree and Dene of the Northwest'],
                      ['text' => 'The Inuit'],
                      ['text' => 'The Sioux'],
                      ['text' => 'Huron-Wendat of the Great Lakes region and the Iroquois'],
                    ],
                    'correctAnswerId' => 1136,
                    'correct_answer' => 'B',
                    'explanation' => 'The Inuit lived off Arctic wildlife, relying on hunting and fishing in the harsh Arctic environment for sustenance. Their adaptation to this environment is a testament to their resilience and ingenuity.',
                  ],

                  [
                    'text' => 'What was Pierre Le Moyne famous for?',
                    'answers' => [
                      ['text' => 'He was Upper Canada'],
                      ['text' => 'He was a great hero of New France, winning many victories over the English in the late 17th and early 18th centuries'],
                      ['text' => 'He defeated the Americans in the Battle of Trafalgar'],
                      ['text' => 'He was a great hero of New England, winning many victories over the French in the late 17th and early 18th centuries'],
                    ],
                    'correctAnswerId' => 1140,
                    'correct_answer' => 'B',
                    'explanation' => 'Pierre Le Moyne was a prominent figure in New France, known for his military prowess and leadership in winning numerous victories over the English during the late 17th and early 18th centuries.',
                  ],

                  [
                    'text' => 'When did the British Parliament pass the British North America Act?',
                    'answers' => [
                      ['text' => '1840'],
                      ['text' => '1759'],
                      ['text' => '1982'],
                      ['text' => '1867'],
                    ],
                    'correctAnswerId' => 1146,
                    'correct_answer' => 'D',
                    'explanation' => 'The British Parliament passed the British North America Act in 1867, which established the Dominion of Canada as a self-governing entity within the British Empire.',
                  ],

                  [
                    'text' => 'When did English colonies appear along the Atlantic seaboard?',
                    'answers' => [
                      ['text' => 'The late 1600s'],
                      ['text' => 'The early 1700s'],
                      ['text' => 'The early 1600s'],
                      ['text' => 'The mid 1600s'],
                    ],
                    'correctAnswerId' => 1149,
                    'correct_answer' => 'C',
                    'explanation' => 'English colonies began to appear along the Atlantic seaboard in the early 1600s, marking the initial establishment of permanent English settlements in North America.',
                  ],

                  [
                    'text' => 'What was the name of the free association of states that the British Empire had evolved into after the First World War?',
                    'answers' => [
                      ['text' => 'The British Colonial Dominion'],
                      ['text' => 'The British Armed Nations'],
                      ['text' => 'The British Commonwealth of Nations'],
                      ['text' => 'The British Empire'],
                    ],
                    'correctAnswerId' => 1153,
                    'correct_answer' => 'C',
                    'explanation' => 'After the First World War, the British Empire evolved into a free association of states known as the British Commonwealth of Nations. This association aimed to promote cooperation and mutual support among its members.',
                  ],

                  [
                    'text' => 'What led to the Great Depression in the 1930s?',
                    'answers' => [
                      ['text' => 'Low grain prices and a terrible drought in 1929'],
                      ['text' => 'The stock market crash of 1932'],
                      ['text' => 'The stock market crash of 1929'],
                      ['text' => 'Low grain prices and a terrible drought in 1932'],
                    ],
                    'correctAnswerId' => 1157,
                    'correct_answer' => 'C',
                    'explanation' => 'The Great Depression in the 1930s was primarily caused by the stock market crash of 1929, which triggered a severe economic downturn characterized by widespread unemployment and economic hardship.',
                  ],

                  [
                    'text' => 'Which British North American colony was the first to attain full responsible government?',
                    'answers' => [
                      ['text' => 'New Brunswick'],
                      ['text' => 'Nova Scotia'],
                      ['text' => 'Upper Canada'],
                      ['text' => 'Ontario'],
                    ],
                    'correctAnswerId' => 1160,
                    'correct_answer' => 'B',
                    'explanation' => 'Nova Scotia was the first British North American colony to attain full responsible government in 1847–48, marking an important step towards self-governance in the region.',
                  ],

                  [
                    'text' => 'Where was the new British colony for freed slaves?',
                    'answers' => [
                      ['text' => 'Cape Town (South Africa)'],
                      ['text' => 'Nairobi (East Africa)'],
                      ['text' => 'Sierra Leone (West Africa)'],
                      ['text' => 'Abidjan (West Africa)'],
                    ],
                    'correctAnswerId' => 1165,
                    'correct_answer' => 'C',
                    'explanation' => 'Freetown, Sierra Leone (West Africa), was established as a new British colony for freed slaves in 1792. It provided a settlement for black Loyalists and freedmen seeking a better life after the American Revolutionary War.',
                  ],
                  [
                    'text' => 'Who battled with the French settlements for a century?',
                    'answers' => [
                      ['text' => 'A confederation of three (later four) First Nations'],
                      ['text' => 'A confederation of four (later five) First Nations'],
                      ['text' => 'A confederation of five (later six) First Nations'],
                      ['text' => 'The English'],
                    ],
                    'correctAnswerId' => 1169,
                    'correct_answer' => 'C',
                    'explanation' => 'A confederation of five (later six) First Nations, known as the Iroquois Confederacy, battled with the French settlements for a century from the early 1600s. This conflict shaped early European-native relations in the region.',
                  ],

                  [
                    'text' => 'Whose portrait is on the Canadian $10 bill?',
                    'answers' => [
                      ['text' => 'Sir John Alexander Macdonald'],
                      ['text' => 'Sir Louis-Hippolyte La Fontaine'],
                      ['text' => 'Sir Etienne-Paschal Tache'],
                      ['text' => 'Sir George-Etienne Cartier'],
                    ],
                    'correctAnswerId' => 1171,
                    'correct_answer' => 'A',
                    'explanation' => 'Sir John Alexander Macdonald, a prominent figure in Canadian history and the country’s first Prime Minister, is featured on the Canadian $10 bill. His leadership and contributions to Confederation are widely recognized.',
                  ],

                  [
                    'text' => 'Who was Lieutenant Colonel John Graves Simcoe?',
                    'answers' => [
                      ['text' => 'Lower Canada\'s first Lieutenant Governor and founder of the City of Toronto'],
                      ['text' => 'Upper Canada\'s first Lieutenant Governor and founder of the City of Toronto'],
                      ['text' => 'Lower Canada\'s first Lieutenant Governor and founder of the City of Ottawa'],
                      ['text' => 'The leader of the loyalists'],
                    ],
                    'correctAnswerId' => 1176,
                    'correct_answer' => 'B',
                    'explanation' => 'Lieutenant Colonel John Graves Simcoe was Upper Canada’s first Lieutenant Governor and the founder of the City of York, which later became Toronto. He also played a pivotal role in the abolition of slavery in Upper Canada.',
                  ],

                  [
                    'text' => 'Who was the first European to explore the St. Lawrence River?',
                    'answers' => [
                      ['text' => 'Samuel de Champlain'],
                      ['text' => 'John Cabot'],
                      ['text' => 'Pierre de Monts'],
                      ['text' => 'Jacques Cartier'],
                    ],
                    'correctAnswerId' => 1182,
                    'correct_answer' => 'D',
                    'explanation' => 'Jacques Cartier was the first European to explore the St. Lawrence River in 1534. His explorations paved the way for future French expeditions and the establishment of French colonies in Canada.',
                  ],

                  [
                    'text' => 'Who established the first European settlements?',
                    'answers' => [
                      ['text' => 'The French'],
                      ['text' => 'The Irish'],
                      ['text' => 'The English'],
                      ['text' => 'The Spanish'],
                    ],
                    'correctAnswerId' => 1183,
                    'correct_answer' => 'A',
                    'explanation' => 'The French established the first European settlements in Canada, starting with St. Croix Island in present-day Maine in 1604, followed by Port-Royal in Acadia (Nova Scotia).',
                  ],

                  [
                    'text' => 'Who composed the poem "In Flanders Fields" that is often recited on Remembrance Day?',
                    'answers' => [
                      ['text' => 'The Duke of Wellington'],
                      ['text' => 'Sir Sam Steele'],
                      ['text' => 'Sir Arthur Currie'],
                      ['text' => 'Lt. Col. John McCrae'],
                    ],
                    'correctAnswerId' => 1190,
                    'correct_answer' => 'D',
                    'explanation' => 'Lt. Col. John McCrae, a Canadian medical officer, composed the famous poem "In Flanders Fields" in 1915 during World War I. It has since become an iconic symbol of remembrance for fallen soldiers.',
                  ],

                  [
                    'text' => 'Who defeated Napoleon in 1815?',
                    'answers' => [
                      ['text' => 'Sir John A. Macdonald'],
                      ['text' => 'Lieutenant Colonel John Graves Simcoe'],
                      ['text' => 'The Duke of Wellington'],
                      ['text' => 'Major-General Sir Isaac Brock'],
                    ],
                    'correctAnswerId' => 1194,
                    'correct_answer' => 'C',
                    'explanation' => 'The Duke of Wellington, a British military leader, defeated Napoleon Bonaparte in the Battle of Waterloo in 1815, marking the end of the Napoleonic Wars.',
                  ],

                  [
                    'text' => 'Who started the women\'s suffrage movement in Canada?',
                    'answers' => [
                      ['text' => 'Agnes McPhail'],
                      ['text' => 'Laura Secord'],
                      ['text' => 'Dr. Emily Stowe'],
                      ['text' => 'Madeline Parent'],
                    ],
                    'correctAnswerId' => 1197,
                    'correct_answer' => 'C',
                    'explanation' => 'Dr. Emily Stowe, the first Canadian woman to practice medicine in Canada, initiated the women\'s suffrage movement in Canada. She was a prominent advocate for women\'s rights and suffrage in the late 19th century.',
                  ],

                  [
                    'text' => 'Who were the first Europeans to reach Canada?',
                    'answers' => [
                      ['text' => 'English'],
                      ['text' => 'French'],
                      ['text' => 'Irish'],
                      ['text' => 'Vikings'],
                    ],
                    'correctAnswerId' => 1202,
                    'correct_answer' => 'D',
                    'explanation' => 'The Vikings were the first Europeans to reach Canada around 1000 AD. They established a short-lived settlement in Newfoundland known as l\'Anse aux Meadows, which is now a UNESCO World Heritage site.',
                  ],

                  [
                    'text' => 'Who led thousands of Loyalist Mohawk Indians into Canada in 1776?',
                    'answers' => [
                      ['text' => 'Sir John A. Macdonald'],
                      ['text' => 'Robert Baldwin'],
                      ['text' => 'Joseph Howe'],
                      ['text' => 'Joseph Brant'],
                    ],
                    'correctAnswerId' => 22,
                    'correct_answer' => 'D',
                    'explanation' => 'Joseph Brant, a Mohawk leader and Loyalist, led thousands of Mohawk and other Indigenous peoples to settle in Canada after the American Revolutionary War. He played a significant role in the history of Indigenous-Canadian relations.',
                  ],

                  [
                    'text' => 'With whose expedition did European exploration begin in Canada?',
                    'answers' => [
                      ['text' => 'Pierre de Monts'],
                      ['text' => 'Jacques Cartier'],
                      ['text' => 'John Cabot'],
                      ['text' => 'Samuel de Champlain'],
                    ],
                    'correctAnswerId' => 1205,
                    'correct_answer' => 'C',
                    'explanation' => 'European exploration in Canada began in 1497 with the expedition of John Cabot, an Italian explorer sailing under the English flag. He was the first European to explore and map Canada\'s East Coast.',
                  ],

                ]
              ],
              [
                'name' => 'Practice Test 4.9',
                'info' => 'Practice Test 4.9',
                'questions' => [
                  [
                    'text' => 'Why is the British North America Act important in Canadian history?',
                    'answers' => [
                      ['text' => 'The Act restored British criminal laws'],
                      ['text' => 'The Act granted Canada complete independence from England'],
                      ['text' => 'The Act granted to the Canadas, for the first time, legislative assemblies'],
                      ['text' => 'The Act officially made Canada a self-governing Dominion'],
                    ],
                    'correctAnswerId' => 1210,
                    'correct_answer' => 'D',
                    'explanation' => 'The British North America Act, enacted in 1867, officially made Canada a self-governing Dominion within the British Empire. It laid the foundation for Canada as an independent nation, though still linked to Britain, and is considered a crucial milestone in Canadian history.',
                  ],

                  [
                    'text' => 'Who declared independence in 1776 and formed the United States?',
                    'answers' => [
                      ['text' => 'All the French colonies'],
                      ['text' => 'The ten British colonies to the south of Quebec'],
                      ['text' => 'All British Colonies in Canada'],
                      ['text' => 'The thirteen British colonies to the south of Quebec'],
                    ],
                    'correctAnswerId' => 1218,
                    'correct_answer' => 'D',
                    'explanation' => 'In 1776, the thirteen British colonies to the south of Quebec declared independence from Britain and formed the United States of America, leading to the American Revolution and subsequent changes in North American geopolitics.',
                  ],

                  [
                    'text' => 'Who was known as "habitants" or "Canadiens"?',
                    'answers' => [
                      ['text' => 'The Metis'],
                      ['text' => 'The French-speaking Catholic people'],
                      ['text' => 'The British settlers who spoke French'],
                      ['text' => 'The Acadians'],
                    ],
                    'correctAnswerId' => 1220,
                    'correct_answer' => 'B',
                    'explanation' => 'Following the British conquest of New France, the French-speaking Catholic people of Quebec and surrounding areas were known as "habitants" or "Canadiens". They played a significant role in shaping early Canadian society under British rule.',
                  ],

                  [
                    'text' => 'What was known as "British North America" in 1791?',
                    'answers' => [
                      ['text' => 'Ontario and lower Canada'],
                      ['text' => 'The Atlantic colonies and the two Canadas (upper and lower)'],
                      ['text' => 'The two Canadas (upper and lower)'],
                      ['text' => 'Ontario and upper Canada'],
                    ],
                    'correctAnswerId' => 1224,
                    'correct_answer' => 'B',
                    'explanation' => 'In 1791, "British North America" referred to the Atlantic colonies (such as Nova Scotia and New Brunswick) and the two Canadas (Upper Canada and Lower Canada). This term was used collectively for the British possessions in North America at the time.',
                  ],

                  [
                    'text' => 'What is the "Dominion of Canada"?',
                    'answers' => [
                      ['text' => 'The English-speaking part of Canada'],
                      ['text' => 'The Alliance formed between the English and the French'],
                      ['text' => 'The French-speaking part of Canada'],
                      ['text' => 'The name of the new country formed in 1867 known today as Canada'],
                    ],
                    'correctAnswerId' => 22,
                    'correct_answer' => '1230',
                    'explanation' => 'The Dominion of Canada was the name given to the new country formed in 1867 through the union of Ontario, Quebec, New Brunswick, and Nova Scotia. It marked the beginning of Canada as a self-governing entity within the British Empire.',
                  ],

                  [
                    'text' => 'When did the name Canada begin appearing on maps?',
                    'answers' => [
                      ['text' => '2001'],
                      ['text' => '1998'],
                      ['text' => '1780'],
                      ['text' => '1550'],
                    ],
                    'correctAnswerId' => 1234,
                    'correct_answer' => 'D',
                    'explanation' => 'The name Canada began appearing on maps around the 1550s. It originated from the Iroquoian word "kanata", meaning “village”, as heard by Jacques Cartier during his explorations of the northern North American coast.',
                  ],
                  [
                    'text' => 'Who made Upper Canada the first province in the British Empire to abolish slavery?',
                    'answers' => [
                      ['text' => 'Sir John A. Macdonald'],
                      ['text' => 'Lieutenant Colonel John Graves Simcoe'],
                      ['text' => 'Joseph Howe'],
                      ['text' => 'Joseph Brant'],
                    ],
                    'correctAnswerId' => 1236,
                    'correct_answer' => 'B',
                    'explanation' => 'Lieutenant-Colonel John Graves Simcoe, as Upper Canada’s first Lieutenant Governor, introduced legislation in 1793 that made Upper Canada the first province in the British Empire to abolish slavery. This marked a significant early step towards the abolition of slavery in the British colonies.',
                  ],

                  [
                    'text' => 'Who had the reputation of being the "shock troops of the British Empire"?',
                    'answers' => [
                      ['text' => 'The British troops'],
                      ['text' => 'The Canadian troops'],
                      ['text' => 'The French troops'],
                      ['text' => 'The Caribbean troops'],
                    ],
                    'correctAnswerId' => 1240,
                    'correct_answer' => 'B',
                    'explanation' => 'The Canadian troops, particularly the Canadian Corps, gained a reputation as the "shock troops of the British Empire" during World War I. Their decisive capture of Vimy Ridge in 1917 was a notable achievement, solidifying their reputation for bravery and effectiveness in military operations.',
                  ],

                  [
                    'text' => 'When did the Fathers of Confederation form the Dominion of Canada?',
                    'answers' => [
                      ['text' => '1600'],
                      ['text' => '1999'],
                      ['text' => '1867'],
                      ['text' => '1790'],
                    ],
                    'correctAnswerId' => 1245,
                    'correct_answer' => 'C',
                    'explanation' => 'The Fathers of Confederation, representing Nova Scotia, New Brunswick, and the Province of Canada (Ontario and Quebec), with British support, worked together from 1864 to 1867 to establish the Dominion of Canada. This union formed the basis of modern Canada as a self-governing entity within the British Empire.',
                  ],

                  [
                    'text' => 'When did the name "Canada" become official?',
                    'answers' => [
                      ['text' => '1889'],
                      ['text' => '1758'],
                      ['text' => '1791'],
                      ['text' => '1609'],
                    ],
                    'correctAnswerId' => 1249,
                    'correct_answer' => 'C',
                    'explanation' => 'The name "Canada" became official in 1791 with the enactment of the Constitutional Act, which also established legislative assemblies for the Canadas (Upper and Lower). This marked the formal adoption of the name that has been used ever since to refer to the British colonies in North America.',
                  ],
                  [
                    'text' => 'Who were known as "habitants" or "Canadiens"?',
                    'answers' => [
                      ['text' => 'The Metis'],
                      ['text' => 'The French-speaking Catholic people'],
                      ['text' => 'The British settlers who spoke French'],
                      ['text' => 'The Acadians'],
                    ],
                    'correctAnswerId' => 1252,
                    'correct_answer' => 'B',
                    'explanation' => 'After the British conquest of New France, the French-speaking Catholic people of Quebec and surrounding areas became known as "habitants" or "Canadiens". They played a crucial role in maintaining French cultural and linguistic heritage within the British-controlled territory.',
                  ],

                  [
                    'text' => 'What is the significance of "l’Anse aux Meadows"?',
                    'answers' => [
                      ['text' => 'It is a World Heritage site where can be found the remains of the Vikings from Iceland who reached Labrador and the island of Newfoundland 1,000 years ago'],
                      ['text' => 'It is a World Heritage site where can be found the remains of Jacques Cartier'],
                      ['text' => 'It is a World Heritage site where can be found the remains of the first European town built by the early settlers'],
                      ['text' => 'It is a World Heritage site where can be found the remains of the Battle of Trafalgar'],
                    ],
                    'correctAnswerId' => 1255,
                    'correct_answer' => 'A',
                    'explanation' => 'L’Anse aux Meadows is a significant archaeological site in Newfoundland, Canada, where Norse Vikings from Iceland established a settlement around 1,000 years ago. It is considered evidence of pre-Columbian trans-oceanic contact and is a designated UNESCO World Heritage site.',
                  ],

                  [
                    'text' => 'When was slavery abolished?',
                    'answers' => [
                      ['text' => '1833'],
                      ['text' => '1899'],
                      ['text' => '1800'],
                      ['text' => '1912'],
                    ],
                    'correctAnswerId' => 1259,
                    'correct_answer' => 'A',
                    'explanation' => 'Slavery was abolished throughout the British Empire in 1833. The Abolition Act of 1833 prohibited slavery throughout the empire, though it was not fully implemented until a few years later. This marked a significant step towards the end of legal slavery in British territories.',
                  ],

                  [
                    'text' => 'Where does the name "Canada" come from?',
                    'answers' => [
                      ['text' => 'From the Iroquoian word "kanata", meaning "home"'],
                      ['text' => 'From the Iroquoian word "kanata", meaning "village"'],
                      ['text' => 'From the Inuit word "kanata", meaning "village"'],
                      ['text' => 'From the Iroquoian word "kanata", meaning "land"'],
                    ],
                    'correctAnswerId' => 1264,
                    'correct_answer' => 'B',
                    'explanation' => 'The name "Canada" originates from the Iroquoian word "kanata", which Jacques Cartier heard from indigenous people during his explorations. It means "village" or "settlement". The name began appearing on maps in the 16th century and has been used ever since to refer to the territory.',
                  ],

                ]
              ],
            ],
            'topics' => [
              ['name' => 'Aboriginal Peoples'],
              ['name' => 'The Timeline'],
            ],
            'flashcards' => [
              [
                'question' => 'Who were the Loyalists?',
                'answer' => 'Settlers from the United States who were loyal to the Crown',
                'explanation' => 'More than 40,000 people loyal to the Crown, called “Loyalists,” fled the oppression of the American Revolution to settle in Nova Scotia and Quebec. Joseph Brant led thousands of Loyalist Mohawk Indians into Canada. The Loyalists came from Dutch, German, British, Scandinavian, Aboriginal and other origins and from Presbyterian, Anglican, Baptist, Methodist, Jewish, Quaker and Catholic religious backgrounds. About 3,000 black Loyalists, freedmen and slaves came north seeking a better life. In turn, in 1792, some black Nova Scotians, who were given poor land, moved on to establish Freetown, Sierra Leone (West Africa), a new British colony for freed slaves.'
              ],
              [
                'question' => 'Which current provinces came out from the Constitutional Act?',
                'answer' => 'Ontario and Quebec',
                'explanation' => 'The Constitutional Act of 1791 divided the Province of Quebec into Upper Canada (later Ontario), which was mainly Loyalist, Protestant and English-speaking, and Lower Canada (later Quebec), heavily Catholic and French-speaking.'
              ],
              [
                'question' => 'What is the significance of the Quebec Act of 1774?',
                'answer' => 'It allowed religious freedom for Catholics and permitted them to hold public office',
                'explanation' => 'To better govern the French Roman Catholic majority, the British Parliament passed the Quebec Act of 1774. One of the constitutional foundations of Canada, the Quebec Act Accommodated the principles of British institutions to the reality of the province. It allowed religious freedom for Catholics and permitted them to hold public office, a practice not then allowed in Britain.'
              ],
              [
                'question' => 'In becoming Canadian, which principles are newcomers expected to embrace?',
                'answer' => 'Democratic',
                'explanation' => 'Some Canadians immigrate from places where they have experienced warfare or conflict. Such experiences do not justify bringing to Canada violent, extreme or hateful prejudices. In becoming Canadian, newcomers are expected to embrace democratic principles such as the rule of law.'
              ],
              [
                'question' => 'Who passed the Quebec Act of 1774?',
                'answer' => 'The British Parliament',
                'explanation' => 'To better govern the French Roman Catholic majority, the British Parliament passed the Quebec Act of 1774. One of the constitutional foundations of Canada, the Quebec Act accommodated the principles of British institutions to the reality of the province.'
              ],
              [
                'question' => 'Who are Anglophones?',
                'answer' => 'People who speak English as a first language',
                'explanation' => 'English and French are the two official languages and are important symbols of identity. English speakers (Anglophones) and French speakers (Francophones) have lived together in partnership and creative tension for more than 300 years.'
              ],
              [
                'question' => 'How many Canadians served in the First World War?',
                'answer' => 'More than 600,000',
                'explanation' => 'More than 600,000 Canadians served in the war, most of them volunteers, out of a total population of eight million.'
              ],
              [
                'question' => 'Who contributed more to the Allied air effort than any other Commonwealth country during the Second World War?',
                'answer' => 'Canada',
                'explanation' => 'Canada contributed more to the Allied air effort than any other Commonwealth country, with over 130,000 Allied air crew trained in Canada under the British Commonwealth Air Training Plan.'
              ],
              [
                'question' => 'In the epic invasion of Normandy in northern France in 1944, known as D-Day, which beach did the Canadians capture?',
                'answer' => 'Juno',
                'explanation' => 'In the epic invasion of Normandy in northern France on June 6, 1944, known as D-Day, 15,000 Canadian troops stormed and captured Juno Beach from the German Army.'
              ],
              [
                'question' => 'How did the native people live when the first European arrived in Canada?',
                'answer' => 'Off the land, some by hunting and gathering, others by raising crops',
                'explanation' => 'When Europeans explored Canada they found all regions occupied by native peoples they called Indians, because the first explorers thought they had reached the East Indies. The native people lived off the land, some by hunting and gathering, others by raising crops. The Huron-Wendat of the Great Lakes region, like the Iroquois, were farmers and hunters. The Cree and Dene of the Northwest were hunter-gatherers. The Sioux were nomadic, following the bison (buffalo) herd. The Inuit lived off Arctic wildlife. West Coast natives preserved fish by drying and smoking.'
              ],
              [
                'question' => 'What do Canadians remember on Remembrance Day?',
                'answer' => 'The sacrifices of veterans and brave fallen in all wars',
                'explanation' => 'Canadians remember the sacrifices of our veterans and brave fallen in all wars up to the present day in which Canadians took part, each year on November 11: Remembrance Day.'
              ],
              [
                'question' => 'Why did the first European explorers call the native peoples "Indians"?',
                'answer' => 'They thought they had reached the East Indies',
                'explanation' => 'When Europeans explored Canada they found all regions occupied by native peoples they called Indians, because the first explorers thought they had reached the East Indies.'
              ],
              [
                'question' => 'Why was the war of 1812 important to Canada?',
                'answer' => 'Canada remained independent from the United States',
                'explanation' => 'The present-day Canada-U.S.A. border is partly an outcome of the War of 1812, which ensured that Canada would remain independent of the United States.'
              ],
              [
                'question' => 'Who refused to surrender Quebec to the English in 1690?',
                'answer' => 'Count Frontenac',
                'explanation' => 'Count Frontenac refused to surrender Quebec to the English in 1690, saying: “My only reply will be from the mouths of my cannons!”'
              ],
              [
                'question' => 'Who became the first leader of a responsible government in the Canadas?',
                'answer' => 'La Fontaine',
                'explanation' => 'Sir Louis-Hippolyte La Fontaine, a champion of French language rights, became the first head of a responsible government (similar to a prime minister) in Canada in 1849.'
              ],
              [
                'question' => 'Who was a champion of French language rights?',
                'answer' => 'Sir Louis-Hippolyte La Fontaine',
                'explanation' => 'Sir Louis-Hippolyte La Fontaine, a champion of French language rights, became the first head of a responsible government (similar to a prime minister) in Canada in 1849.'
              ],
              [
                'question' => 'What is a "responsible government"?',
                'answer' => 'The ministers of the Crown must have the support of a majority of the elected representatives in order to govern',
                'explanation' => 'Responsible government refers to a government that is responsible to the people. It takes the form of a Cabinet that depends on the support of an elected assembly, rather than a monarch or their representatives.'
              ],
              [
                'question' => 'For what is Laura Secord known?',
                'answer' => 'She made a dangerous thirty km journey on foot to warn of a planned American attack during the war of 1812',
                'explanation' => 'In 1813, Laura Secord, pioneer wife and mother of five children, made a dangerous 19-mile(30-km) journey on foot to warn Lieutenant James FitzGibbon of a planned American attack. Her bravery contributed to victory at the Battle of Beaver Dams. She is recognized as a heroine to this day.'
              ],
              [
                'question' => 'How many Canadians served in the Second World War?',
                'answer' => 'More than one million',
                'explanation' => 'More than one million Canadians and Newfoundlanders (Newfoundland was a separate British entity) served in the Second World War, out of a population of 11.5 million. This was a high proportion and of these, 44,000 were killed.'
              ],
              [
                'question' => 'What was the Underground Railroad?',
                'answer' => 'A Christian anti-slavery network',
                'explanation' => 'Thousands of slaves escaped from the United States, followed “the North Star” and settled in Canada via the Underground Railroad, a Christian anti-slavery network.'
              ],
              [
                'question' => 'Regarding diversity, as what is Canada often referred?',
                'answer' => 'A land of immigrants',
                'explanation' => 'Canada is often referred to as a land of immigrants because, over the past 200 years, millions of newcomers have helped to build and defend our way of life.'
              ],
              [
                'question' => 'For centuries, on what was Canada’s economy based?',
                'answer' => 'Farming and exporting natural resources',
                'explanation' => 'For centuries Canada’s economy was based mainly on farming and on exporting natural resources such as fur, fish and timber, transported by roads, lakes, rivers and canals.'
              ],
              [
                'question' => 'Who gained control over North America in the 1700s?',
                'answer' => 'The English',
                'explanation' => 'In the 1700s France and Great Britain battled for control of North America. In 1759, the British defeated the French in the Battle of the Plains of Abraham at Québec City — marking the end of France’s empire in America.'
              ],
              [
                'question' => 'Where was the first representative assembly elected?',
                'answer' => 'Nova Scotia',
                'explanation' => 'The first representative assembly was elected in Halifax, Nova Scotia, in 1758. Prince Edward Island followed in 1773, New Brunswick in 1785.'
              ],
              [
                'question' => 'Which natives were farmers and hunters?',
                'answer' => 'Huron-Wendat of the Great Lakes region and the Iroquois',
                'explanation' => 'The Huron-Wendat of the Great Lakes region, like the Iroquois, were farmers and hunters.'
              ],
              [
                'question' => 'What are leaders like Jean Talon, Bishop Laval, and Count Frontenac famous for?',
                'answer' => 'They built a French Empire in North America that reached from Hudson Bay to the Gulf of Mexico',
                'explanation' => 'Outstanding leaders like Jean Talon, Bishop Laval, and Count Frontenac built a French Empire in North America that reached from Hudson Bay to the Gulf of Mexico.'
              ],
              [
                'question' => 'Which British Empire province was the first to abolish slavery?',
                'answer' => 'Upper Canada',
                'explanation' => 'In 1793, Upper Canada, led by Lieutenant Governor John Graves Simcoe, a Loyalist military officer, became the first province in the Empire to move toward abolition.'
              ],
              [
                'question' => 'What were the Atlantic colonies and the two Canadas known collectively as in 1791?',
                'answer' => 'British North America',
                'explanation' => 'The Atlantic colonies and the two Canadas were known collectively as British North America.'
              ],
              [
                'question' => 'Who dominated the fur trade in the North West during the French and British regimes?',
                'answer' => 'The Hudson\'s Bay Company',
                'explanation' => 'The Hudson’s Bay Company, with French, British and Aboriginal employees, came to dominate the trade in the northwest from Fort Garry (Winnipeg) and Fort Edmonton to Fort Langley (near Vancouver) and Fort Victoria—trading posts that later became cities.'
              ],
              [
                'question' => 'Since the 1970s, from where do most immigrants come from?',
                'answer' => 'Asia',
                'explanation' => 'The largest groups are the English, French, Scottish, Irish, German, Italian, Chinese, Aboriginal, Ukrainian, Dutch, South Asian and Scandinavian. Since the 1970s, most immigrants have come from Asian countries.'
              ],
              [
                'question' => 'Who claimed Canadian land for King Francis I of France between 1534 and 1542?',
                'answer' => 'Jacques Cartier',
                'explanation' => 'Between 1534 and 1542, Jacques Cartier made three voyages across the Atlantic, claiming the land for King Francis I of France.'
              ],
              [
                'question' => 'What type of bond did Aboriginals and Europeans form in the first 200 years of coexistence?',
                'answer' => 'Economic, religious and military',
                'explanation' => 'Aboriginals and Europeans formed strong economic, religious and military bonds in the first 200 years of coexistence which laid the foundations of Canada.'
              ],
              [
                'question' => 'What was the name of the new country formed by the Fathers of Confederation?',
                'answer' => 'Dominion of Canada',
                'explanation' => 'Ontario and Quebec, which, together with New Brunswick and Nova Scotia, formed the new country called the Dominion of Canada.'
              ],
              [
                'question' => 'Who granted the Hudson’s Bay Company exclusive trading rights?',
                'answer' => 'King Charles II of England',
                'explanation' => 'In 1670, King Charles II of England granted the Hudson’s Bay Company exclusive trading rights over the watershed draining into Hudson Bay.'
              ],
              [
                'question' => 'Which Act granted to the Canadas, for the first time, legislative assemblies elected by the people?',
                'answer' => 'The Constitutional Act',
                'explanation' => 'The Constitutional Act of 1791 divided the Province of Quebec into Upper Canada (later Ontario), which was mainly Loyalist, Protestant and English-speaking, and Lower Canada (later Quebec), heavily Catholic and French-speaking. The Act also granted to the Canadas, for the first time, legislative assemblies elected by the people.'
              ],
              [
                'question' => 'What was driving the vast fur trade economy?',
                'answer' => 'The demand for beaver pelts in Europe',
                'explanation' => 'The French and Aboriginal people collaborated in the vast fur-trade economy, driven by the demand for beaver pelts in Europe.'
              ],
              [
                'question' => 'What is the meaning of the Remembrance Day poppy?',
                'answer' => 'To remember the sacrifice of Canadians who have served or died in wars up to the present day',
                'explanation' => 'Canadians remember the sacrifices of our veterans and brave fallen in all wars up to the present day in which Canadians took part, each year on November 11: Remembrance Day.'
              ],
              [
                'question' => 'How many Canadians have died in all wars up to the present day?',
                'answer' => '110,000',
                'explanation' => 'Canadians wear the red poppy and observe a moment of silence at the 11th hour of the 11th day of the 11th month to honour the sacrifices of over a million brave men and women who have served, and the 110,000 who have given their lives.'
              ],
              [
                'question' => 'Whose portrait is on the $5 bill?',
                'answer' => 'Sir Wilfrid Laurier',
                'explanation' => 'Sir Wilfrid Laurier became the first French Canadian prime minister since Confederation and encouraged immigration to the West. His portrait is on the $5 bill.'
              ],
              [
                'question' => 'What made it possible for immigrants to settle in Western Canada?',
                'answer' => 'The completion of the Canadian Pacific Railway',
                'explanation' => 'Sir Wilfrid Laurier became the first French-Canadian prime minister since Confederation and encouraged immigration to the West. His portrait is on the $5 bill. The railway made it possible for immigrants, including 170,000 Ukrainians, 115,000 Poles and tens of thousands from Germany, France, Norway and Sweden to settle in the West before 1914 and develop a thriving agricultural sector.'
              ],
              [
                'question' => 'What percentage of Aboriginal people are Métis?',
                'answer' => '30',
                'explanation' => 'About 65% of the Aboriginal people are First Nations, while 30% are Métis and 4% Inuit.'
              ],
              [
                'question' => 'During the Second World War, what was the ratio of Canadians in the Allied forces on D-Day?',
                'answer' => '1 in 10',
                'explanation' => 'Approximately one in ten allied soldiers on D-Day was Canadian. The Canadian Army liberated the Netherlands in 1944–45 and helped force the German surrender of May 8, 1945, bringing to an end six years of war in Europe.'
              ],
              [
                'question' => 'In Canada, how did democratic institutions develop?',
                'answer' => 'Gradually and peacefully',
                'explanation' => 'Democratic institutions developed gradually and peacefully. The first representative assembly was elected in Halifax, Nova Scotia, in 1758.'
              ],
              [
                'question' => 'Which four provinces formed the new country called the Dominion of Canada?',
                'answer' => 'Ontario, Quebec, New Brunswick and Nova Scotia',
                'explanation' => 'Ontario and Quebec, which, together with New Brunswick and Nova Scotia, formed the new country called the Dominion of Canada.'
              ],
              [
                'question' => 'Which countries fought in the War of 1812?',
                'answer' => 'United Kingdom and United States of America',
                'explanation' => 'The United Kingdom and United States of America fought in the War of 1812. After the defeat of Napoleon Bonaparte’s fleet in the Battle of Trafalgar (1805), the Royal Navy ruled the waves. The British Empire, which included Canada, fought to resist Bonaparte’s bid to dominate Europe.This led to American resentment at British interference with their shipping. Believing it would be easy to conquer Canada, the United States launched an invasion in June 1812.'
              ],
              [
                'question' => 'What was the main economy of the early European settlers?',
                'answer' => 'Fur trade',
                'explanation' => 'The first companies in Canada were formed during the French and British regimes and competed for the fur trade.'
              ],
              [
                'question' => 'For what did the first companies in Canada compete?',
                'answer' => 'Fur',
                'explanation' => 'The first companies in Canada were formed during the French and British regimes and competed for the fur trade.'
              ],
              [
                'question' => 'From where were the ancestors of Aboriginal peoples believed to have migrated?',
                'answer' => 'Asia',
                'explanation' => 'The ancestors of Aboriginal peoples are believed to have migrated from Asia many thousands of years ago. They were well established here long before explorers from Europe first came to North America.'
              ],
              [
                'question' => 'What level of government did the Fathers of Confederation create?',
                'answer' => 'Federal and provincial',
                'explanation' => 'From 1864 to 1867, representatives of Nova Scotia, New Brunswick and the Province of Canada, with British support, worked together to establish a new country. These men are known as the Fathers of Confederation. They created two levels of government: federal and provincial.'
              ],
              [
                'question' => 'Who assigned Canada’s national colours (white and red) in 1921?',
                'answer' => 'King George V',
                'explanation' => 'King George V assigned Canada’s national colours (white and red) in 1921, the colours of our national flag today.'
              ],
              [
                'question' => 'Which natives were hunter-gatherers?',
                'answer' => 'The Cree and Dene of the Northwest',
                'explanation' => 'The Cree and Dene of the Northwest were hunter-gatherers. The Sioux were nomadic, following the bison (buffalo) herd.'
              ],
              [
                'question' => 'Who became the first French-Canadian prime minister since Confederation?',
                'answer' => 'Sir Wilfrid Laurier',
                'explanation' => 'Sir Wilfrid Laurier became the first French-Canadian prime minister since Confederation and encouraged immigration to the West. His portrait is on the $5 bill.'
              ],
              [
                'question' => 'What do Canadians wear on Remembrance Day?',
                'answer' => 'Red poppy',
                'explanation' => 'Canadians wear the red poppy and observe a moment of silence at the 11th hour of the 11th day of the 11th month to honour the sacrifices of over a million brave men and women who have served, and the 110,000 who have given their lives.'
              ],
              [
                'question' => 'Who declared independence in 1776 and formed the United States?',
                'answer' => 'The thirteen British colonies to the south of Quebec',
                'explanation' => 'In 1776, the 13 British colonies to the south of Quebec declared independence and formed the United States. North America was again divided by war. More than 40,000 people loyal to the Crown, called “Loyalists,” fled the oppression of the American Revolution to settle in Nova Scotia and Quebec.'
              ],
              [
                'question' => 'What was the name of the free association of states that the British Empire had evolved into after the First World War?',
                'answer' => 'The British Commonwealth of Nations',
                'explanation' => 'After the First World War, the British Empire evolved into a free association of states known as the British Commonwealth of Nations. Canada remains a leading member of the Commonwealth to this day, together with other successor states of the Empire such as India, Australia, New Zealand, and several African and Caribbean countries.'
              ],
              [
                'question' => 'Which natives lived off Arctic wildlife?',
                'answer' => 'The Inuit',
                'explanation' => 'The Inuit lived off Arctic wildlife. West Coast natives preserved fish by drying and smoking. Warfare was common among Aboriginal groups as they competed for land, resources, and prestige.'
              ],
              [
                'question' => 'What led to the Great Depression in the 1930s?',
                'answer' => 'The stock market crash of 1929',
                'explanation' => 'The stock market crash of 1929 led to the Great Depression or the “Dirty Thirties.” Unemployment reached 27% in 1933 and many businesses were wiped out.'
              ],
              [
                'question' => 'What did Upper Canada mainly consist of?',
                'answer' => 'Loyalist, Protestant and English-speaking people',
                'explanation' => 'The Constitutional Act of 1791 divided the Province of Quebec into Upper Canada (later Ontario), which was mainly Loyalist, Protestant and English-speaking.'
              ],
              [
                'question' => 'Which British North American colony was the first to attain full responsible government?',
                'answer' => 'Nova Scotia',
                'explanation' => 'The first British North American colony to attain full responsible government was Nova Scotia in 1847–48. In 1848–49 the governor of United Canada, Lord Elgin, with encouragement from London, introduced responsible government.'
              ],
              [
                'question' => 'Where was the new British colony for freed slaves?',
                'answer' => 'Sierra Leone (West Africa)',
                'explanation' => 'About 3,000 black Loyalists, freedmen, and slaves came north seeking a better life. In turn, in 1792, some black Nova Scotians, who were given poor land, moved on to establish Freetown, Sierra Leone (West Africa), a new British colony for freed slaves.'
              ],
              [
                'question' => 'Who battled for control of North America in the 1700s?',
                'answer' => 'France and Great Britain',
                'explanation' => 'In the 1700s France and Great Britain battled for control of North America. In 1759, the British defeated the French in the Battle of the Plains of Abraham at Québec City — marking the end of France’s empire in America.'
              ],
              [
                'question' => 'What did Lower Canada mainly consist of?',
                'answer' => 'Catholic and French-speaking people',
                'explanation' => 'The Constitutional Act of 1791 divided the Province of Quebec into Upper Canada (later Ontario), which was mainly Loyalist, Protestant and English-speaking, and Lower Canada (later Quebec), heavily Catholic and French-speaking.'
              ],
              [
                'question' => 'What did Great Britain rename the French colony of the 1700s?',
                'answer' => 'The "Province of Quebec"',
                'explanation' => 'Following the war, Great Britain renamed the colony the “Province of Quebec.” The French-speaking Catholic people, known as habitants or Canadiens, strove to preserve their way of life in the English-speaking, Protestant-ruled British Empire.'
              ],
              [
                'question' => 'What is known as the women’s suffrage movement?',
                'answer' => 'The effort by women to achieve the right to vote',
                'explanation' => 'The effort by women to achieve the right to vote is known as the women’s suffrage movement. Its founder in Canada was Dr. Emily Stowe, the first Canadian woman to practise medicine in Canada.'
              ],
              [
                'question' => 'What marked the end of France’s empire in America in the 1700s?',
                'answer' => 'The British defeated the French in the Battle of the Plains of Abraham at Quebec City',
                'explanation' => 'In the 1700s France and Great Britain battled for control of North America. In 1759, the British defeated the French in the Battle of the Plains of Abraham at Québec City — marking the end of France’s empire in America.'
              ],
              [
                'question' => 'Who battled with the French settlements for a century?',
                'answer' => 'A confederation of five (later six) First Nations',
                'explanation' => 'In 1604, the first European settlement north of Florida was established by French explorers Pierre de Monts and Samuel de Champlain, first on St. Croix Island (in present-day Maine), then at Port-Royal, in Acadia (present-day Nova Scotia). In 1608 Champlain built a fortress at what is now Québec City.
               The colonists struggled against a harsh climate. Champlain allied the colony with the Algonquin, Montagnais and Huron, historic enemies of the Iroquois, a confederation of five (later six) First Nations who battled with the French settlements for a century. The French and the Iroquois made peace in 1701.'
              ],
              [
                'question' => 'What did the Battle of Trafalgar (1805) represent?',
                'answer' => 'The defeat of Napoleon Bonaparte\'s fleet',
                'explanation' => 'After the defeat of Napoleon Bonaparte’s fleet in the Battle of Trafalgar (1805), the Royal Navy ruled the waves. The British Empire, which included Canada, fought to resist Bonaparte’s bid to dominate Europe.'
              ],
              [
                'question' => 'What was Pierre Le Moyne famous for?',
                'answer' => 'He was a great hero of New France, winning many victories over the English in the late 17th and early 18th centuries',
                'explanation' => 'Pierre Le Moyne was a great hero of New France, winning many victories over the English, from James Bay in the north to Nevis in the Caribbean, in the late 17th and early 18th centuries.'
              ],
              [
                'question' => 'What were the men who worked together to establish Canada called?',
                'answer' => 'The Fathers of Confederation',
                'explanation' => 'The Fathers of Confederation established the Dominion of Canada on July 1, 1867, the birth of the country that we know today.'
              ],
              [
                'question' => 'What is the Royal Canadian Mounted Police?',
                'answer' => 'A national police force',
                'explanation' => 'Today, the Royal Canadian Mounted Police (RCMP or “the Mounties”) are the national police force and one of Canada’s best-known symbols.'
              ],
              [
                'question' => 'Who composed the poem "In Flanders Fields" that is often recited on Remembrance Day?',
                'answer' => 'Lt. Col. John McCrae',
                'explanation' => 'Canadian medical officer Lieutenant Colonel John McCrae composed the poem “In Flanders Fields” in 1915; it is often recited on Remembrance Day.'
              ],
              [
                'question' => 'Who suggested the term, "Dominion of Canada" in 1864?',
                'answer' => 'Sir Leonard Tilley',
                'explanation' => 'Sir Leonard Tilley, an elected official and Father of Confederation from New Brunswick, suggested the term Dominion of Canada in 1864. He was inspired by Psalm 72 in the Bible which refers to “dominion from sea to sea and from the river to the ends of the earth.” This phrase embodied the vision of building a powerful, united, wealthy and free country that spanned a continent.'
              ],
              [
                'question' => 'Who was Lieutenant Colonel John Graves Simcoe?',
                'answer' => 'Upper Canada\'s first Lieutenant Governor and founder of the City of Toronto',
                'explanation' => 'Lieutenant-Colonel John Graves Simcoe was Upper Canada’s first Lieutenant Governor and founder of the City of York (now Toronto). Simcoe also made Upper Canada the first province in the British Empire to abolish slavery.'
              ],
              [
                'question' => 'Who was Canada’s greatest soldier during the First World War?',
                'answer' => 'General Sir Arthur Currie',
                'explanation' => 'In 1918, under the command of General Sir Arthur Currie, Canada’s greatest soldier, the Canadian Corps advanced alongside the French and British Empire troops in the last hundred days.'
              ],
              [
                'question' => 'With whose expedition did European exploration begin in Canada?',
                'answer' => 'John Cabot',
                'explanation' => 'European exploration began in earnest in 1497 with the expedition of John Cabot, who was the first to draw a map of Canada’s East Coast.'
              ],
              [
                'question' => 'Why is the British North America Act important in Canadian history?',
                'answer' => 'The Act officially made Canada a self-governing Dominion',
                'explanation' => 'The Dominion of Canada was officially born on July 1, 1867. Until 1982, July 1 was celebrated as “Dominion Day” to commemorate the day that Canada became a self-governing Dominion. Today it is officially known as Canada Day.'
              ],
              [
                'question' => 'Who was the key architect of Confederation from Quebec?',
                'answer' => 'Sir George-Etienne Cartier',
                'explanation' => 'Sir George-Étienne Cartier was the key architect of Confederation from Quebec. A railway lawyer, Montrealer, close ally of Macdonald and patriotic Canadien, Cartier led Quebec into Confederation and helped negotiate the entry of the Northwest Territories, Manitoba and British Columbia into Canada.'
              ],
              [
                'question' => 'What is the significance of "l’Anse aux Meadows"?',
                'answer' => 'It is a World Heritage site where can be found the remains of the Vikings from Iceland who reached Labrador and the island of Newfoundland 1,000 years ago',
                'explanation' => 'The Vikings from Iceland who colonized Greenland 1,000 years ago also reached Labrador and the island of Newfoundland. The remains of their settlement, l’Anse aux Meadows, are a World Heritage site.'
              ],
              [
                'question' => 'What does "Confederation" mean?',
                'answer' => 'The joining of several provinces to form a new country',
                'explanation' => 'The old Province of Canada was split into two new provinces: Ontario and Quebec, which, together with New Brunswick and Nova Scotia, formed the new country called the Dominion of Canada.'
              ],
              [
                'question' => 'Who was the first European to explore the St. Lawrence River?',
                'answer' => 'Jacques Cartier',
                'explanation' => 'Jacques Cartier was the first European to explore the St. Lawrence River and to set eyes on present-day Québec City and Montreal.'
              ],
              [
                'question' => 'Who was the first European to see present-day Quebec City and Montreal?',
                'answer' => 'Jacques Cartier',
                'explanation' => 'Jacques Cartier was the first European to explore the St. Lawrence River and to set eyes on present-day Québec City and Montreal.'
              ],
              [
                'question' => 'Who had the reputation of being the "shock troops of the British Empire"?',
                'answer' => 'The Canadian troops',
                'explanation' => 'The Canadian Corps captured Vimy Ridge in April 1917, with 10,000 killed or wounded, securing the Canadians’ reputation for valour as the “shock troops of the British Empire.”'
              ],
              [
                'question' => 'Who led thousands of Loyalist Mohawk Indians into Canada in 1776?',
                'answer' => 'Joseph Brant',
                'explanation' => 'Joseph Brant led thousands of Loyalist Mohawk Indians into Canada. The Loyalists came from Dutch, German, British, Scandinavian, Aboriginal and other origins and from Presbyterian, Anglican, Baptist, Methodist, Jewish, Quaker and Catholic religious backgrounds.'
              ],
              [
                'question' => 'What is the "Dominion of Canada"?',
                'answer' => 'The name of the new country formed in 1867 known today as Canada',
                'explanation' => 'The old Province of Canada was split into two new provinces: Ontario and Quebec, which, together with New Brunswick and Nova Scotia, formed the new country called the Dominion of Canada.'
              ],
              [
                'question' => 'Who defended the rights of the Canadiens and defeated an American military invasion of Quebec in 1775?',
                'answer' => 'Sir Guy Carleton',
                'explanation' => 'Sir Guy Carleton (Lord Dorchester), as Governor of Quebec, defended the rights of the Canadiens, defeated an American military invasion of Quebec in 1775, and supervised the Loyalist migration to Nova Scotia and Quebec in 1782–83.'
              ],
              [
                'question' => 'Who were the first Europeans to reach Canada?',
                'answer' => 'Vikings',
                'explanation' => 'The Vikings from Iceland who colonized Greenland 1,000 years ago also reached Labrador and the island of Newfoundland. The remains of their settlement, l’Anse aux Meadows, are a World Heritage site.'
              ],
              [
                'question' => 'What was known as "British North America" in 1791?',
                'answer' => 'The Atlantic colonies and the two Canadas (upper and lower)',
                'explanation' => 'The Constitutional Act of 1791 granted to the Canadas, for the first time, legislative assemblies elected by the people. The name Canada also became official at this time and has been used ever since. The Atlantic colonies and the two Canadas were known collectively as British North America.'
              ],
              [
                'question' => 'Who were known as "habitants" or "Canadiens"?',
                'answer' => 'The French-speaking Catholic people',
                'explanation' => 'Following the war, Great Britain renamed the colony the “Province of Quebec.” The French-speaking Catholic people, known as habitants or Canadiens, strove to preserve their way of life in the English-speaking, Protestant-ruled British Empire.'
              ],
              [
                'question' => 'Whose portrait is on the Canadian $10 bill?',
                'answer' => 'Sir John Alexander Macdonald',
                'explanation' => 'Sir John Alexander Macdonald was a lawyer in Kingston, Ontario, a gifted politician and a colourful personality. Parliament has recognized January 11 as Sir John A. Macdonald Day. His portrait is on the $10 bill.'
              ],
              [
                'question' => 'Who was the first to map Canada’s Atlantic shore?',
                'answer' => 'John Cabot',
                'explanation' => 'John Cabot, an Italian immigrant to England, was the first to map Canada’s Atlantic shore, setting foot on Newfoundland or Cape Breton Island in 1497 and claiming the New Founde Land for England.'
              ],
              [
                'question' => 'Who defeated Napoleon in 1815, and therefore played a direct role in founding the national capital?',
                'answer' => 'The Duke of Wellington',
                'explanation' => 'The Duke of Wellington sent some of his best soldiers to defend Canada in 1814. He then chose Bytown (Ottawa) as the endpoint of the Rideau Canal, part of a network of forts to prevent the U.S.A. from invading Canada again. Wellington, who defeated Napoleon in 1815, therefore played a direct role in founding the national capital.'
              ],
              [
                'question' => 'What is the system "if the government loses a confidence vote in the assembly it must resign" called?',
                'answer' => 'A responsible government',
                'explanation' => 'This is the system that we have today: if the government loses a confidence vote in the assembly it must resign.'
              ],
              [
                'question' => 'Who defeated Napoleon in 1815?',
                'answer' => 'The Duke of Wellington',
                'explanation' => 'The Duke of Wellington sent some of his best soldiers to defend Canada in 1814. He then chose Bytown (Ottawa) as the endpoint of the Rideau Canal, part of a network of forts to prevent the U.S.A. from invading Canada again. Wellington, who defeated Napoleon in 1815, therefore played a direct role in founding the national capital.'
              ],
              [
                'question' => 'Who was Canada’s First Prime Minister?',
                'answer' => 'Sir John Alexander Macdonald',
                'explanation' => 'In 1867, Sir John Alexander Macdonald, a Father of Confederation, became Canada’s first Prime Minister. Born in Scotland on January 11, 1815, he came to Upper Canada as a child.'
              ],
              [
                'question' => 'Who established the first European settlements?',
                'answer' => 'The French',
                'explanation' => 'In 1604, the first European settlement north of Florida was established by French explorers Pierre de Monts and Samuel de Champlain, first on St. Croix Island (in present-day Maine), then at Port-Royal, in Acadia (present-day Nova Scotia).'
              ],
              [
                'question' => 'Where does the name "Canada" come from?',
                'answer' => 'From the Iroquoian word "kanata", meaning "village"',
                'explanation' => 'Cartier heard two captured guides speak the Iroquoian word kanata, meaning “village.” By the 1550s, the name of Canada began appearing on maps.'
              ],
              [
                'question' => 'Who made Upper Canada the first province in the British Empire to abolish slavery?',
                'answer' => 'Lieutenant Colonel John Graves Simcoe',
                'explanation' => 'Lieutenant-Colonel John Graves Simcoe was Upper Canada’s first Lieutenant Governor and founder of the City of York (now Toronto). Simcoe also made Upper Canada the first province in the British Empire to abolish slavery.'
              ],
              [
                'question' => 'Who was the founder of the women’s suffrage movement?',
                'answer' => 'Dr. Emily Stowe',
                'explanation' => 'The effort by women to achieve the right to vote is known as the women’s suffrage movement. Its founder in Canada was Dr. Emily Stowe, the first Canadian woman to practise medicine in Canada.'
              ],
              [
                'question' => 'Which phrase embodied the vision for the Dominion of Canada?',
                'answer' => '"Dominion from sea to sea and from the river to the ends of the earth"',
                'explanation' => 'Sir Leonard Tilley, an elected official and Father of Confederation from New Brunswick, suggested the term Dominion of Canada in 1864. He was inspired by Psalm 72 in the Bible which refers to “dominion from sea to sea and from the river to the ends of the earth.” This phrase embodied the vision of building a powerful, united, wealthy and free country that spanned a continent.'
              ]
            ]
          ],
          [
            'image' => '/images/chap 6.png',
            'name' => 'Chapter 5',
            'title' => 'Modern Canada',
            'description' => "The post-war recovery of Canada's economy and international engagement. Know about how the country excels in languages, arts, sports, and values.",
            'questions' => 20,
            'mistakes' => 5,
            'step' => 2,
            'tests' => [
              [
                'name' => 'Practice Test 5.1',
                'info' => 'Practice Test 5.1',
                'questions' =>
                [
                  [
                    'text' => 'Who circled the globe in a wheelchair to raise funds for spinal cord research?',
                    'answers' => [
                      ['text' => 'Reginald Fessenden'],
                      ['text' => 'Rick Hansen'],
                      ['text' => 'Terry Fox'],
                      ['text' => 'Gerhard Herzberg'],
                    ],
                    'correctAnswerId' => 1268,
                    'correct_answer' => 'Rick Hansen',
                    'explanation' => 'In 1985, fellow British Columbian Rick Hansen circled the globe in a wheelchair to raise funds for spinal cord research. (P26)'
                  ],
                  [
                    'text' => 'Who were the Group of Seven in modern Canada?',
                    'answers' => [
                      ['text' => 'A group of politicians'],
                      ['text' => 'A group of Canadian companies'],
                      ['text' => 'A group of cowboys who defended Canada'],
                      ['text' => 'A group of Canadian landscape painters in the 1920s'],
                    ],
                    'correctAnswerId' => 1274,
                    'correct_answer' => 'A group of Canadian landscape painters in the 1920s',
                    'explanation' => 'In the visual arts, Canada is historically perhaps best known for the Group of Seven, founded in 1920, who developed a style of painting to capture the rugged wilderness landscapes. (P25)'
                  ],
                  [
                    'text' => 'Who is the greatest Canadian hockey player?',
                    'answers' => [
                      ['text' => 'Wayne Gretzky'],
                      ['text' => 'Mark Tewksbury'],
                      ['text' => 'Donovan Bailey'],
                      ['text' => 'Terry Fox'],
                    ],
                    'correctAnswerId' => 1275,
                    'correct_answer' => 'Wayne Gretzky',
                    'explanation' => 'One of the greatest hockey players of all time, Wayne Gretzky, played for the Edmonton Oilers from 1979 to 1988. (P26)'
                  ],
                  [
                    'text' => 'Who among these is a Nobel prize-winning scientist?',
                    'answers' => [
                      ['text' => 'Gerhard Herzberg'],
                      ['text' => 'Marshall McLuhan'],
                      ['text' => 'Alexander Graham Bell'],
                      ['text' => 'Harold Innis'],
                    ],
                    'correctAnswerId' => 1279,
                    'correct_answer' => 'Gerhard Herzberg',
                    'explanation' => 'Gerhard Herzberg, a refugee from Nazi Germany, John Polanyi, Sidney Altman, Richard E. Taylor, Michael Smith and Bertram Brockhouse were Nobel Prize-winning scientists. (P26)'
                  ],
                  [
                    'text' => 'What is Terry Fox\'s contribution?',
                    'answers' => [
                      ['text' => 'He inspired people to contribute money for cancer research'],
                      ['text' => 'He was the greatest hockey player in Canada'],
                      ['text' => 'His discovery of insulin saves millions of people\'s lives'],
                      ['text' => 'He was a brilliant Soldier'],
                    ],
                    'correctAnswerId' => 1283,
                    'correct_answer' => 'He inspired people to contribute money for cancer research',
                    'explanation' => 'In 1980, Terry Fox, a British Columbian who lost his right leg to cancer at the age of 18, began a cross-country run, the “Marathon of Hope”, to raise money for cancer research. (P26)'
                  ],
                  [
                    'text' => 'In the 1960s, Quebec experienced an era of Rapid change. What is it called?',
                    'answers' => [
                      ['text' => 'The East Movement'],
                      ['text' => 'The quiet Revolution'],
                      ['text' => 'The suffrage movement'],
                      ['text' => 'The Industrial Revolution'],
                    ],
                    'correctAnswerId' => 1288,
                    'correct_answer' => 'The quiet Revolution',
                    'explanation' => 'Quebec experienced an era of rapid change in the 1960s known as the Quiet Revolution. (P24)'
                  ],
                  [
                    'text' => 'Who invented the worldwide system of Standard time zones?',
                    'answers' => [
                      ['text' => 'Joseph-Armand Bombardier'],
                      ['text' => 'Reginald Fessenden'],
                      ['text' => 'Sir Sanford Fleming'],
                      ['text' => 'Alexander Graham Bell'],
                    ],
                    'correctAnswerId' => 1293,
                    'correct_answer' => 'Sir Sanford Fleming',
                    'explanation' => 'Sir Sandford Fleming – invented the worldwide system of Standard time zones. (P27)'
                  ],
                  [
                    'text' => 'What UN operation did Canada participate in from 1950 to 1953?',
                    'answers' => [
                      ['text' => 'Canadian Forces defended Hong Kong'],
                      ['text' => 'The Canadian Corps captured Vimy Ridge'],
                      ['text' => 'Canada participated in the UN operation defending South Korea in the Korean War'],
                      ['text' => 'Canadians volunteered to fight in the South African War'],
                    ],
                    'correctAnswerId' => 1297,
                    'correct_answer' => 'Canada participated in the UN operation defending South Korea in the Korean War',
                    'explanation' => 'Canada joined international organizations such as the United Nations (UN). It participated in the UN operation defending South Korea in the Korean War (1950-53), with 500 dead and 1,000 wounded. (P24)'
                  ],
                  [
                    'text' => 'What is the significance of the Canadian discovery of insulin?',
                    'answers' => [
                      ['text' => 'It saved lives of children with sickness'],
                      ['text' => 'It saved millions of lives of people with diabetes'],
                      ['text' => 'It helped the treatment of heart diseases'],
                      ['text' => 'It was an important medicine to save soldiers life during World War II'],
                    ],
                    'correctAnswerId' => 1300,
                    'correct_answer' => 'It saved millions of lives of people with diabetes',
                    'explanation' => 'Sir Frederick Banting of Toronto and Charles Best discovered insulin, a hormone to treat diabetes that has saved 16 million lives worldwide. (P27)'
                  ],
                  [
                    'text' => 'In what year were the Aboriginal peoples granted the right to vote?',
                    'answers' => [
                      ['text' => '1960'],
                      ['text' => '1790'],
                      ['text' => '1950'],
                      ['text' => '1632'],
                    ],
                    'correctAnswerId' => 1303,
                    'correct_answer' => '1960',
                    'explanation' => 'Aboriginal people were granted the vote in 1960. (P25)'
                  ],
                  [
                    'text' => 'Who invented the snowmobile?',
                    'answers' => [
                      ['text' => 'Alexander Graham Bell'],
                      ['text' => 'Joseph-Armand Bombardier'],
                      ['text' => 'Sir Sanford Fleming'],
                      ['text' => 'Mathew Evans and Henry Woodward'],
                    ],
                    'correctAnswerId' => 1308,
                    'correct_answer' => 'Joseph-Armand Bombardier',
                    'explanation' => 'Joseph-Armand Bombardier – invented the snowmobile, a light-weight winter vehicle. (P27)'
                  ],
                  [
                    'text' => 'Who contributed to the invention of the radio and also sent the world\'s first wireless voice message?',
                    'answers' => [
                      ['text' => 'Reginald Fessenden'],
                      ['text' => 'Alexander Graham Bell'],
                      ['text' => 'Mike Lazaridis'],
                      ['text' => 'Matthew Evans'],
                    ],
                    'correctAnswerId' => 1311,
                    'correct_answer' => 'Reginald Fessenden',
                    'explanation' => 'Reginald Fessenden – contributed to the invention of radio, sending the first wireless voice message in the world. (P27)'
                  ],
                  [
                    'text' => 'Which of the following was invented by Alexander Graham Bell?',
                    'answers' => [
                      ['text' => 'BlackBerry'],
                      ['text' => 'Fax machine'],
                      ['text' => 'Telephone'],
                      ['text' => 'Internet'],
                    ],
                    'correctAnswerId' => 1317,
                    'correct_answer' => 'Telephone',
                    'explanation' => 'Alexander Graham Bell – hit on the idea of the telephone at his summer house in Canada. (P27)'
                  ],
                  [
                    'text' => 'When was “Employment Insurance” introduced by the Canadian federal government?',
                    'answers' => [
                      ['text' => '1947'],
                      ['text' => '1950'],
                      ['text' => '1940'],
                      ['text' => '1965'],
                    ],
                    'correctAnswerId' => 1321,
                    'correct_answer' => '1940',
                    'explanation' => 'Unemployment insurance (now called “employment insurance”) was introduced by the federal government in 1940. (P24)'
                  ],
                  [
                    'text' => 'Which of the following governments provides “publicly funded” education?',
                    'answers' => [
                      ['text' => 'City government'],
                      ['text' => 'Federal government'],
                      ['text' => 'None of these'],
                      ['text' => 'Provincial and territorial governments'],
                    ],
                    'correctAnswerId' => 1326,
                    'correct_answer' => 'Provincial and territorial governments',
                    'explanation' => 'Publicly funded education is provided by the provinces and territories. (P24)'
                  ],
                  [
                    'text' => 'Which is the most famous invention of Research In Motion (RIM), a Wireless Communications company?',
                    'answers' => [
                      ['text' => 'the canadarm'],
                      ['text' => 'the first Wireless voice message'],
                      ['text' => 'the Blackberry'],
                      ['text' => 'the iPhone'],
                    ],
                    'correctAnswerId' => 1329,
                    'correct_answer' => 'the Blackberry',
                    'explanation' => 'Mike Lazaridis and Jim Balsillie – of Research in Motion (RIM) – a wireless communications company known for its most famous invention: the BlackBerry. (P27)'
                  ],
                  [
                    'text' => 'In 1996, at the Olympic Games, which Canadian became a world record sprinter and double Olympic gold medalist?',
                    'answers' => [
                      ['text' => 'Wayne Gretzky'],
                      ['text' => 'La Fontaine'],
                      ['text' => 'Donovan Bailey'],
                      ['text' => 'John Cabot'],
                    ],
                    'correctAnswerId' => 1333,
                    'correct_answer' => 'Donovan Bailey',
                    'explanation' => 'In 1996 at the Olympic Summer Games, Donovan Bailey became a world record sprinter and double Olympic gold medalist. (P26)'
                  ],
                  [
                    'text' => 'Who invented the cardiac pacemaker?',
                    'answers' => [
                      ['text' => 'Gabriel Dumont'],
                      ['text' => 'Mathew Evans and Henry Woodward'],
                      ['text' => 'Dr John A. Hopps'],
                      ['text' => 'Alexander Graham Bell'],
                    ],
                    'correctAnswerId' => 1337,
                    'correct_answer' => 'Dr John A. Hopps',
                    'explanation' => 'Dr John A. Hopps – invented the first cardiac pacemaker, used today to save the lives of people with heart disorders. (P27)'
                  ],
                  [
                    'text' => 'Which of the following are Canada\'s famous writers?',
                    'answers' => [
                      ['text' => 'Sir Ernest MacMillan and Healy Willian'],
                      ['text' => 'Paul Henderson and Mark Tewksbury'],
                      ['text' => 'Joy Kogawa, Michael Ondaatje, and Rohinton Mistry'],
                      ['text' => 'Emily Carr and Louis-Philippe Hebert'],
                    ],
                    'correctAnswerId' => 1341,
                    'correct_answer' => 'Joy Kogawa, Michael Ondaatje, and Rohinton Mistry',
                    'explanation' => 'Writers such as Joy Kogawa, Michael Ondaatje, and Rohinton Mistry have diversified Canada’s literary experience. (P25)'
                  ],
                  [
                    'text' => 'Who started the “Marathon of Hope”?',
                    'answers' => [
                      ['text' => 'Rick Hansen'],
                      ['text' => 'James Naismith'],
                      ['text' => 'Sir Sam Steele'],
                      ['text' => 'Terry Fox'],
                    ],
                    'correctAnswerId' => 1346,
                    'correct_answer' => 'Terry Fox',
                    'explanation' => 'In 1980, Terry Fox, a British Columbian who lost his right leg to cancer at the age of 18, began a cross-country run, the “Marathon of Hope”, to raise money for cancer research. (P26)'
                  ],
                ]
              ],
              [
                'name' => 'Practice Test 5.2',
                'info' => 'Practice Test 5.2',
                'questions' => [
                  [
                    'text' => 'Today, diversity enriches the lives of Canadians. Where is diversity reflected the most?',
                    'answers' => [
                      ['text' => 'Countryside areas'],
                      ['text' => 'Cities'],
                      ['text' => 'Towns'],
                      ['text' => 'Mountains'],
                    ],
                    'correctAnswerId' => 1348,
                    'correct_answer' => 'Cities',
                    'explanation' => 'Today, diversity enriches Canadian’s lives, particularly in our cities. (P25)'
                  ],
                  [
                    'text' => 'When did Canada\'s modern energy industry begin?',
                    'answers' => [
                      ['text' => 'The economic booming of the 1890s and early 1900s'],
                      ['text' => 'After the war of 1812.'],
                      ['text' => 'Since the discovery of oil in Alberta in 1947'],
                      ['text' => 'After the second World War'],
                    ],
                    'correctAnswerId' => 1353,
                    'correct_answer' => 'Since the discovery of oil in Alberta in 1947',
                    'explanation' => 'The discovery of oil in Alberta in 1947 began Canada\'s modern energy industry. (P24)'
                  ],
                  [
                    'text' => 'Who discovered insulin?',
                    'answers' => [
                      ['text' => 'Dr Wilder Penfield'],
                      ['text' => 'Matthew Evans and Henry Woodward'],
                      ['text' => 'Sir Frederick Banting and Charles Best'],
                      ['text' => 'Dr John A. Hopps'],
                    ],
                    'correctAnswerId' => 1357,
                    'correct_answer' => 'Sir Frederick Banting and Charles Best',
                    'explanation' => 'Sir Frederick Banting of Toronto and Charles Best discovered insulin, a hormone to treat diabetes that has saved 16 million lives worldwide. (P27)'
                  ],
                  [
                    'text' => 'When was the official languages Act passed?',
                    'answers' => [
                      ['text' => '1969'],
                      ['text' => '1867'],
                      ['text' => '1982'],
                      ['text' => '2000'],
                    ],
                    'correctAnswerId' => 1359,
                    'correct_answer' => '1969',
                    'explanation' => 'In 1963 Parliament established the Royal Commission on Bilingualism and Biculturalism. This led to the Official Languages Act (1969), which guarantees French and English services in the federal government across Canada. (P24)'
                  ],
                  [
                    'text' => 'Who is known as the greatest living Canadian?',
                    'answers' => [
                      ['text' => 'Dr Wilder Penfield'],
                      ['text' => 'Terry Fox'],
                      ['text' => 'Sir John A MacDonald'],
                      ['text' => 'Sir Sanford Fleming'],
                    ],
                    'correctAnswerId' => 1363,
                    'correct_answer' => 'Dr Wilder Penfield',
                    'explanation' => 'Dr. Wilder Penfield was a pioneering brain surgeon at McGill University in Montreal and was known as “the greatest living Canadian”. (P27)'
                  ],
                  [
                    'text' => 'Which trade spread across Canada making it important to the economy for over 300 years?',
                    'answers' => [
                      ['text' => 'Beaver fur trade'],
                      ['text' => 'Fisheries'],
                      ['text' => 'Lumber'],
                      ['text' => 'Gold'],
                    ],
                    'correctAnswerId' => 1367,
                    'correct_answer' => 'Beaver fur trade',
                    'explanation' => 'The beaver fur trade spread across Canada making it important to the economy for over 300 years. (P25)'
                  ],
                  [
                    'text' => 'Who was a celebrated sculptor of historical figures?',
                    'answers' => [
                      ['text' => 'Louis-Philippe Hebert'],
                      ['text' => 'Kenojuak Ashevak'],
                      ['text' => 'Norman Jewison'],
                      ['text' => 'Emily Carr'],
                    ],
                    'correctAnswerId' => 1371,
                    'correct_answer' => 'Louis-Philippe Hebert',
                    'explanation' => 'Quebec’s Louis-Philippe Hébert was a celebrated sculptor of historical figures. Kenojuak Ashevak pioneered modern Inuit art with etchings, prints and soapstone sculptures.'
                  ],
                  [
                    'text' => 'When did Canada draw closer to the United States and other trading partners?',
                    'answers' => [
                      ['text' => 'Between 1980 and 1990'],
                      ['text' => 'Between 1925 and 1960'],
                      ['text' => 'Between 1945 and 1970'],
                      ['text' => 'Between 1970 and 1980'],
                    ],
                    'correctAnswerId' => 1377,
                    'correct_answer' => 'Between 1945 and 1970',
                    'explanation' => 'Between 1945 and 1970, Canada drew closer to the United States and other trading partners, enjoying one of the strongest economies among industrialized nations.'
                  ],
                  [
                    'text' => 'When did Canada take over the vast northwest region from the Hudson’s Bay Company?',
                    'answers' => [
                      ['text' => '1949'],
                      ['text' => '1864'],
                      ['text' => '1905'],
                      ['text' => '1869'],
                    ],
                    'correctAnswerId' => 1382,
                    'correct_answer' => '1869',
                    'explanation' => 'Canada took over the vast northwest region from the Hudson’s Bay Company in 1869, the 12,000 Métis of the Red River were not consulted. In response, Louis Riel led an armed uprising and seized Fort Garry, the territorial capital.'
                  ],
                  [
                    'text' => 'When was Old Age Security devised?',
                    'answers' => [
                      ['text' => '1965'],
                      ['text' => '1927'],
                      ['text' => '1940'],
                      ['text' => '1970'],
                    ],
                    'correctAnswerId' => 1384,
                    'correct_answer' => '1927',
                    'explanation' => 'Old Age Security was devised as early as 1927, and the Canada and Quebec Pension Plans in 1965.'
                  ],
                  [
                    'text' => 'Who created insulin?',
                    'answers' => [
                      ['text' => 'Dr. John A. Hopps'],
                      ['text' => 'Dr. Wilder Penfield'],
                      ['text' => 'Sir Frederick Banting of Toronto and Charles Best'],
                      ['text' => 'Sir Sandford Fleming and Charles Best'],
                    ],
                    'correctAnswerId' => 1389,
                    'correct_answer' => 'Sir Frederick Banting of Toronto and Charles Best',
                    'explanation' => 'Sir Frederick Banting of Toronto and Charles Best discovered insulin, a hormone to treat diabetes that has saved 16 million lives worldwide.'
                  ],
                  [
                    'text' => 'Who was Mary Ann (Shadd) Carey?',
                    'answers' => [
                      ['text' => 'The founder of the Canadian feminist movement'],
                      ['text' => 'An anti-slavery activist and the first woman publisher in Canada'],
                      ['text' => 'The founder of the women\'s suffrage movement'],
                      ['text' => 'The first woman fur trader'],
                    ],
                    'correctAnswerId' => 1392,
                    'correct_answer' => 'An anti-slavery activist and the first woman publisher in Canada',
                    'explanation' => 'Mary Ann Shadd Cary was an outspoken activist in the movement to abolish slavery in the U.S.A. In 1853 she became the first woman publisher in Canada, helping to found and edit The Provincial Freeman, a weekly newspaper dedicated to anti-slavery, black immigration to Canada, temperance (urging people to drink less alcohol) and upholding British rule.'
                  ],
                  [
                    'text' => 'Insulin was discovered by a Canadian.',
                    'answers' => [
                      ['text' => 'False'],
                      ['text' => 'True'],
                    ],
                    'correctAnswerId' => 1396,
                    'correct_answer' => 'True',
                    'explanation' => 'Sir Frederick Banting of Toronto and Charles Best discovered insulin, a hormone to treat diabetes that has saved 16 million lives worldwide.'
                  ],
                  [
                    'text' => 'When were Japanese first granted the right to vote?',
                    'answers' => [
                      ['text' => '1901'],
                      ['text' => '1701'],
                      ['text' => '1600'],
                      ['text' => '1948'],
                    ],
                    'correctAnswerId' => 1400,
                    'correct_answer' => '1948',
                    'explanation' => 'Most Canadians of Asian descent had in the past been denied the vote in federal and provincial elections. In 1948 the last of these, the Japanese Canadians, gained the right to vote.'
                  ],
                  [
                    'text' => 'Quebec enjoys sovereignty in Canada.',
                    'answers' => [
                      ['text' => 'False'],
                      ['text' => 'True'],
                    ],
                    'correctAnswerId' => 1401,
                    'correct_answer' => 'False',
                    'explanation' => 'The movement for Quebec sovereignty gained strength but was defeated in a referendum in the province in 1980. After much negotiation, in 1982 the Constitution was amended without the agreement of Quebec.'
                  ],
                  [
                    'text' => 'Why do Canadians enjoy one of the world’s highest standards of living?',
                    'answers' => [
                      ['text' => 'Thanks to the NAFTA agreement'],
                      ['text' => 'By working hard and by trading with other nations'],
                      ['text' => 'By working hard and by being a NATO member'],
                      ['text' => 'Thanks to the Americans'],
                    ],
                    'correctAnswerId' => 1404,
                    'correct_answer' => 'By working hard and by trading with other nations',
                    'explanation' => 'Canadians enjoy one of the world’s highest standards of living—maintained by the hard work of Canadians and by trade with other nations, in particular the United States.'
                  ],
                  [
                    'text' => 'What was the "Quiet Revolution"?',
                    'answers' => [
                      ['text' => 'The development of Canada\'s autonomy in the world after the Second World War'],
                      ['text' => 'The Cold War between the East and the West'],
                      ['text' => 'The coming of the Old Age Security in Canada'],
                      ['text' => 'An era of rapid change in the 1960s in Quebec'],
                    ],
                    'correctAnswerId' => 1410,
                    'correct_answer' => 'An era of rapid change in the 1960s in Quebec',
                    'explanation' => 'French-Canadian society and culture flourished in the postwar years. Quebec experienced an era of rapid change in the 1960s known as the Quiet Revolution. Many Quebecers sought to separate from Canada.'
                  ],
                  [
                    'text' => 'What does the Canada Health Act ensure?',
                    'answers' => [
                      ['text' => 'Common elements and a basic standard of coverage'],
                      ['text' => 'No more contagious epidemics in Canada'],
                      ['text' => 'Publicly funded education'],
                      ['text' => 'Drinkable water for all Canadians'],
                    ],
                    'correctAnswerId' => 1411,
                    'correct_answer' => 'Common elements and a basic standard of coverage',
                    'explanation' => 'As prosperity grew, so did the ability to support social assistance programs. The Canada Health Act ensures common elements and a basic standard of coverage.'
                  ],
                  [
                    'text' => 'When was the Alberta Oil rush?',
                    'answers' => [
                      ['text' => '1947'],
                      ['text' => '1600'],
                      ['text' => '2000'],
                      ['text' => '1990'],
                    ],
                    'correctAnswerId' => 1415,
                    'correct_answer' => '1947',
                    'explanation' => 'The discovery of oil in Alberta in 1947 began Canada’s modern energy industry. In 1951, for the first time, a majority of Canadians were able to afford adequate food, shelter, and clothing.'
                  ],
                  [
                    'text' => 'Canada is a member of the United Nations (UN)',
                    'answers' => [
                      ['text' => 'False'],
                      ['text' => 'True'],
                    ],
                    'correctAnswerId' => 1420,
                    'correct_answer' => 'True',
                    'explanation' => 'Canada joined international organizations such as the United Nations (UN). It participated in the UN operation defending South Korea in the Korean War (1950–53), with 500 dead and 1,000 wounded.'
                  ],
                ]
              ],
              [
                'name' => 'Practice Test 5.3',
                'info' => 'Practice Test 5.3',
                'questions' =>
                [
                  [
                    'text' => 'Which natives preserved fish by drying and smoking?',
                    'answers' => [
                      ['text' => 'Northern Natives'],
                      ['text' => 'West Coast natives'],
                      ['text' => 'Interior Natives'],
                      ['text' => 'East Coast Natives'],
                    ],
                    'correctAnswerId' => 1422,
                    'correct_answer' => 'West Coast natives',
                    'explanation' => 'West Coast natives preserved fish by drying and smoking. Warfare was common among Aboriginal groups as they competed for land, resources, and prestige.'
                  ],
                  [
                    'text' => 'Who pioneered modern Inuit art?',
                    'answers' => [
                      ['text' => 'Emily Carr'],
                      ['text' => 'Kenojuak Ashevak'],
                      ['text' => 'Jean-Paul Riopelle'],
                      ['text' => 'Louis-Philippe Hebert'],
                    ],
                    'correctAnswerId' => 1426,
                    'correct_answer' => 'Kenojuak Ashevak',
                    'explanation' => 'Kenojuak Ashevak pioneered modern Inuit art with etchings, prints, and soapstone sculptures.'
                  ],
                  [
                    'text' => 'When were Aboriginal people granted the right to vote?',
                    'answers' => [
                      ['text' => '1961'],
                      ['text' => '1948'],
                      ['text' => '1960'],
                      ['text' => '1949'],
                    ],
                    'correctAnswerId' => 1431,
                    'correct_answer' => '1960',
                    'explanation' => 'Most Canadians of Asian descent had in the past been denied the vote in federal and provincial elections. Aboriginal people were granted the vote in 1960. Today, every citizen over the age of 18 may vote.'
                  ],
                  [
                    'text' => 'What was the name of the war that began when several liberated countries of Eastern Europe became part of a Communist bloc controlled by the Soviet Union?',
                    'answers' => [
                      ['text' => 'The Eastern War'],
                      ['text' => 'The Cold War'],
                      ['text' => 'The Union War'],
                      ['text' => 'The Soviet War'],
                    ],
                    'correctAnswerId' => 1434,
                    'correct_answer' => 'The Cold War',
                    'explanation' => 'The Cold War began when several liberated countries of Eastern Europe became part of a Communist bloc controlled by the Soviet Union under the dictator Josef Stalin.'
                  ],
                  [
                    'text' => 'Canadian football is absolutely identical to American football.',
                    'answers' => [
                      ['text' => 'False'],
                      ['text' => 'True'],
                    ],
                    'correctAnswerId' => 1437,
                    'correct_answer' => 'False',
                    'explanation' => 'Canadian football is a popular game that differs in a number of ways from American football.'
                  ],
                  [
                    'text' => 'Whose films have been popular in Quebec and across the country, and have won international awards?',
                    'answers' => [
                      ['text' => 'The films of Louis-Philippe Hebert'],
                      ['text' => 'The films of Emile Nelligan'],
                      ['text' => 'The films of Louis Hemon'],
                      ['text' => 'The films of Denys Arcand'],
                    ],
                    'correctAnswerId' => 1442,
                    'correct_answer' => 'The films of Denys Arcand',
                    'explanation' => 'The films of Denys Arcand have been popular in Quebec and across the country, and have won international awards. Other noteworthy Canadian filmmakers include Norman Jewison and Atom Egoyan.'
                  ],
                  [
                    'text' => 'Which of the following is a person of letters who had a significant cultural impact?',
                    'answers' => [
                      ['text' => 'Pauline Johnson'],
                      ['text' => 'Kenojuak Ashevak'],
                      ['text' => 'Jean-Paul Riopelle'],
                      ['text' => 'Sir Ernest MacMillan'],
                    ],
                    'correctAnswerId' => 1443,
                    'correct_answer' => 'Pauline Johnson',
                    'explanation' => 'Canadians have made significant contributions to literature in English and in French. Men and women of letters included Pauline Johnson, Émile Nelligan, Robertson Davies, Margaret Laurence, and Mordecai Richler.'
                  ],
                  [
                    'text' => 'Which of the following is a writer who has diversified Canada’s literary experience?',
                    'answers' => [
                      ['text' => 'Denys Arcand'],
                      ['text' => 'Michael Ondaatje'],
                      ['text' => 'Louis-Philippe Hebert'],
                      ['text' => 'Healey Willan'],
                    ],
                    'correctAnswerId' => 1448,
                    'correct_answer' => 'Michael Ondaatje',
                    'explanation' => 'Writers such as Joy Kogawa, Michael Ondaatje, and Rohinton Mistry have diversified Canada’s literary experience.'
                  ],
                  [
                    'text' => 'Who established the first European settlement north of Florida in 1604?',
                    'answers' => [
                      ['text' => 'John Cabot'],
                      ['text' => 'Jean Talon'],
                      ['text' => 'Pierre de Monts and Samuel de Champlain'],
                      ['text' => 'Jacques Cartier'],
                    ],
                    'correctAnswerId' => 1453,
                    'correct_answer' => 'Pierre de Monts and Samuel de Champlain',
                    'explanation' => 'In 1604, the first European settlement north of Florida was established by French explorers Pierre de Monts and Samuel de Champlain, first on St. Croix Island (in present-day Maine), then at Port-Royal, in Acadia (present-day Nova Scotia).'
                  ],
                  [
                    'text' => 'When did the Parliament establish the Royal Commission on Bilingualism and Biculturalism?',
                    'answers' => [
                      ['text' => '1970'],
                      ['text' => '1963'],
                      ['text' => '1969'],
                      ['text' => '1945'],
                    ],
                    'correctAnswerId' => 1456,
                    'correct_answer' => '1963',
                    'explanation' => 'In 1963, Parliament established the Royal Commission on Bilingualism and Biculturalism. This led to the Official Languages Act (1969), which guarantees French and English services in the federal government across Canada.'
                  ],
                  [
                    'text' => 'By the 1960s, how many Canadians had origins that were neither British nor French?',
                    'answers' => [
                      ['text' => 'One-quarter'],
                      ['text' => 'Half'],
                      ['text' => 'Two-thirds'],
                      ['text' => 'One-third'],
                    ],
                    'correctAnswerId' => 1462,
                    'correct_answer' => 'One-third',
                    'explanation' => 'By the 1960s, one-third of Canadians had origins that were neither British nor French, and took pride in preserving their distinct culture in the Canadian fabric.'
                  ],
                  [
                    'text' => 'The Blackberry is a Canadian invention.',
                    'answers' => [
                      ['text' => 'False'],
                      ['text' => 'True'],
                    ],
                    'correctAnswerId' => 1464,
                    'correct_answer' => 'True',
                    'explanation' => 'Mike Lazaridis and Jim Balsillie of Research in Motion (RIM), a wireless communications company, are known for their most famous invention: the BlackBerry.'
                  ],
                  [
                    'text' => 'Who were pioneers of modern abstract art in the 1950s?',
                    'answers' => [
                      ['text' => 'The Abstractists'],
                      ['text' => 'Les Reformateurs of Quebec'],
                      ['text' => '"Les Automatistes" of Quebec'],
                      ['text' => 'The Group of Seven'],
                    ],
                    'correctAnswerId' => 1467,
                    'correct_answer' => '"Les Automatistes" of Quebec',
                    'explanation' => 'Les Automatistes of Quebec were pioneers of modern abstract art in the 1950s, most notably Jean-Paul Riopelle.'
                  ],
                  [
                    'text' => 'What began Canada’s modern energy industry in 1947?',
                    'answers' => [
                      ['text' => 'The discovery of hydro-electricity in British Columbia'],
                      ['text' => 'The discovery of oil in Alberta'],
                      ['text' => 'The Energy Bill passed by the House of Commons'],
                      ['text' => 'The discovery of coal in Manitoba'],
                    ],
                    'correctAnswerId' => 1470,
                    'correct_answer' => 'The discovery of oil in Alberta',
                    'explanation' => 'The discovery of oil in Alberta in 1947 began Canada’s modern energy industry. In 1951, for the first time, a majority of Canadians were able to afford adequate food, shelter, and clothing.'
                  ],
                ]

              ],
            ],
            'topics' => [
              ['name' => 'Modern Canada'],
              ['name' => 'The Timeline'],
            ],
            'flashcards' => [
              [
                'question' => 'Which famous Canadian artist painted the forests and Aboriginal artifacts of the West Coast?',
                'answer' => 'Emily Carr',
                'explanation' => 'In the visual arts, Canada is historically perhaps best known for the Group of Seven, founded in 1920, who developed a style of painting to capture the rugged wilderness landscapes. Emily Carr painted the forests and Aboriginal artifacts of the West Coast.'
              ],
              [
                'question' => 'Which Act guarantees French and English services in the federal government across Canada?',
                'answer' => 'The Official Languages Act',
                'explanation' => 'In 1963 Parliament established the Royal Commission on Bilingualism and Biculturalism. This led to the Official Languages Act (1969), which guarantees French and English services in the federal government across Canada.'
              ],
              [
                'question' => 'Who was Upper Canada’s first Lieutenant Governor and founder of the City of York (now Toronto)?',
                'answer' => 'Lieutenant Colonel John Graves Simcoe',
                'explanation' => 'Lieutenant-Colonel John Graves Simcoe was Upper Canada’s first Lieutenant Governor and founder of the City of York (now Toronto). Simcoe also made Upper Canada the first province in the British Empire to abolish slavery.'
              ],
              [
                'question' => 'Who created insulin?',
                'answer' => 'Sir Frederick Banting and Charles Best',
                'explanation' => 'Sir Frederick Banting of Toronto and Charles Best discovered insulin, a hormone to treat diabetes that has saved 16 million lives worldwide.'
              ],
              [
                'question' => 'Who were pioneers of modern abstract art in the 1950s?',
                'answer' => 'Les Automatistes of Quebec',
                'explanation' => 'Les Automatistes of Quebec were pioneers of modern abstract art in the 1950s, most notably Jean-Paul Riopelle.'
              ],
              [
                'question' => 'Who invented the worldwide system of standard time zones?',
                'answer' => 'Sir Sandford Fleming',
                'explanation' => 'Sir Sandford Fleming, a Canadian engineer, was the first person to propose the use of worldwide time zones.'
              ],
              [
                'question' => 'Who were the Group of Seven?',
                'answer' => 'Canadian visual art artists who developed a certain style of painting',
                'explanation' => 'In the visual arts, Canada is historically perhaps best known for the Group of Seven, founded in 1920, who developed a style of painting to capture the rugged wilderness landscapes.'
              ],
              [
                'question' => 'Who pioneered modern Inuit art?',
                'answer' => 'Kenojuak Ashevak',
                'explanation' => 'Kenojuak Ashevak pioneered modern Inuit art with etchings, prints and soapstone sculptures.'
              ],
              [
                'question' => 'By the 1960s, how many Canadians had origins that were neither British nor French?',
                'answer' => 'One-third',
                'explanation' => 'By the 1960s, one-third of Canadians had origins that were neither British nor French, and took pride in preserving their distinct culture in the Canadian fabric.'
              ],
              [
                'question' => 'How were the laws impacted by the Quebec Act of 1774?',
                'answer' => 'The Act restored French civil law while maintaining British criminal law',
                'explanation' => 'To better govern the French Roman Catholic majority, the British Parliament passed the Quebec Act of 1774. One of the constitutional foundations of Canada, the Quebec Act accommodated the principles of British institutions to the reality of the province. It allowed religious freedom for Catholics and permitted them to hold public office, a practice not then allowed in Britain.'
              ],
              [
                'question' => 'Who invented Basketball?',
                'answer' => 'James Naismith',
                'explanation' => 'Basketball was invented by Canadian James Naismith in 1891.'
              ],
              [
                'question' => 'Why do Canadians enjoy one of the world’s highest standards of living?',
                'answer' => 'By working hard and by trading with other nations',
                'explanation' => 'Canadians enjoy one of the world’s highest standards of living—maintained by the hard work of Canadians and by trade with other nations, in particular the United States.'
              ],
              [
                'question' => 'Who were the "voyageurs" and "coureurs des bois"?',
                'answer' => 'The skilled and courageous men who traveled by canoe and formed strong alliances with First Nations',
                'explanation' => 'In 1670, King Charles II of England granted the Hudson’s Bay Company exclusive trading rights over the watershed draining into Hudson Bay. For the next 100 years the Company competed with Montreal-based traders. The skilled and courageous men who traveled by canoe were called voyageurs and coureurs des bois, and formed strong alliances with First Nations.'
              ],
              [
                'question' => 'What began Canada’s modern energy industry in 1947?',
                'answer' => 'The discovery of oil in Alberta',
                'explanation' => 'The discovery of oil in Alberta in 1947 began Canada’s modern energy industry.'
              ],
              [
                'question' => 'Who is known as "the greatest living Canadian"?',
                'answer' => 'Dr. Wilder Penfield',
                'explanation' => 'Dr. Wilder Penfield was a pioneering brain surgeon at McGill University in Montreal, and was known as “the greatest living Canadian.”'
              ],
              [
                'question' => 'What does the Canada Health Act ensure?',
                'answer' => 'Common elements and a basic standard of coverage',
                'explanation' => 'As prosperity grew, so did the ability to support social assistance programs. The Canada Health Act ensures common elements and a basic standard of coverage.'
              ],
              [
                'question' => 'Which natives preserved fish by drying and smoking?',
                'answer' => 'West Coast natives',
                'explanation' => 'West Coast natives preserved fish by drying and smoking.'
              ],
              [
                'question' => 'What was the "Quiet Revolution"?',
                'answer' => 'An era of rapid change in the 1960s in Quebec',
                'explanation' => 'French-Canadian society and culture flourished in the postwar years. Quebec experienced an era of rapid change in the 1960s known as the Quiet Revolution. Many Quebecers sought to separate from Canada.'
              ],
              [
                'question' => 'Who was Mary Ann (Shadd) Carey?',
                'answer' => 'An anti-slavery activist and the first woman publisher in Canada',
                'explanation' => 'Mary Ann Shadd Cary was an outspoken activist in the movement to abolish slavery in the U.S.A. In 1853 she became the first woman publisher in Canada, helping to found and edit The Provincial Freeman, a weekly newspaper dedicated to anti-slavery, black immigration to Canada, temperance (urging people to drink less alcohol) and upholding British rule.'
              ],
              [
                'question' => 'Who invented the first cardiac pacemaker?',
                'answer' => 'Dr. John A. Hopps',
                'explanation' => 'Dr. John A. Hopps invented the first cardiac pacemaker, used today to save the lives of people with heart disorders.'
              ],
              [
                'question' => 'Which Canadian circled the globe in a wheelchair to raise funds for spinal cord research?',
                'answer' => 'Rick Hansen',
                'explanation' => 'In 1985, fellow British Columbian Rick Hansen circled the globe in a wheelchair to raise funds for spinal cord research.'
              ],
              [
                'question' => 'Whose films have been popular in Quebec and across the country, and have won international awards?',
                'answer' => 'The films of Denys Arcand',
                'explanation' => 'The films of Denys Arcand have been popular in Quebec and across the country, and have won international awards. Other noteworthy Canadian filmmakers include Norman Jewison and Atom Egoyan. Canadian television has had a popular following.'
              ],
              [
                'question' => 'What was the name of the war that began when several liberated countries of Eastern Europe became part of a Communist bloc controlled by the Soviet Union?',
                'answer' => 'The Cold War',
                'explanation' => 'The Cold War began when several liberated countries of eastern Europe became part of a Communist bloc controlled by the Soviet Union under the dictator Josef Stalin.'
              ],
              [
                'question' => 'What is the current name of the fortress that Samuel de Champlain built in 1608?',
                'answer' => 'Quebec City',
                'explanation' => 'In 1604, the first European settlement north of Florida was established by French explorers Pierre de Monts and Samuel de Champlain, first on St. Croix Island (in present-day Maine), then at Port-Royal, in Acadia (present-day Nova Scotia). In 1608 Champlain built a fortress at what is now Québec City.'
              ],
              [
                'question' => 'Who invented the telephone?',
                'answer' => 'Alexander Graham Bell',
                'explanation' => 'Alexander Graham Bell hit on the idea of the telephone at his summer house in Canada.'
              ],
              [
                'question' => 'Who established the first European settlement north of Florida in 1604?',
                'answer' => 'Pierre de Monts and Samuel de Champlain',
                'explanation' => 'In 1604, the first European settlement north of Florida was established by French explorers Pierre de Monts and Samuel de Champlain, first on St. Croix Island (in present-day Maine), then at Port-Royal, in Acadia (present-day Nova Scotia).'
              ],
              [
                'question' => 'Who was a celebrated sculptor of historical figures?',
                'answer' => 'Louis-Philippe Hébert',
                'explanation' => 'Quebec’s Louis-Philippe Hébert was a celebrated sculptor of historical figures.'
              ],
            ]
          ],
          [
            'image' => '/images/chap 7.png',
            'name' => 'Chapter 6',
            'title' => ' How Canadians Govern',
            'description' => "Gain deeper knowledge of Canada's democratic system of government. Understand the Prime Minister's role, Parliament's role, and the Constitution's division of power.",
            'questions' => 20,
            'mistakes' => 5,
            'step' => 2,
            'tests' => [
              [
                'name' => 'Practice Test 6.1',
                'info' => 'Practice Test 6.1',
                'questions' =>
                [
                  [
                    'text' => 'Which of the following is the federal government responsible for?',
                    'answers' => [
                      ['text' => 'Highways'],
                      ['text' => 'Natural resources'],
                      ['text' => 'Education'],
                      ['text' => 'Inter-provincial trade and Communications'],
                    ],
                    'correctAnswerId' => 1476,
                    'correct_answer' => 'Inter-provincial trade and Communications',
                    'explanation' => 'The federal government takes responsibility for matters of national and international concern, including inter-provincial trade and communications.'
                  ],
                  [
                    'text' => 'Which of the following are the responsibilities of the provincial government?',
                    'answers' => [
                      ['text' => 'Education, health care, natural resources and policing'],
                      ['text' => 'Nation defense, health Care, citizenship and firefighting'],
                      ['text' => 'Education, foreign policy, natural resource and policing'],
                      ['text' => 'Nation defense, foreign policy, highways and aboriginal affairs'],
                    ],
                    'correctAnswerId' => 1477,
                    'correct_answer' => 'Education, health care, natural resources and policing',
                    'explanation' => 'The provinces are responsible for municipal government, education, health, natural resources, property and civil rights, and highways.'
                  ],
                  [
                    'text' => 'What do you call the king\'s representative in the provinces?',
                    'answers' => [
                      ['text' => 'Governor-Lieutenant'],
                      ['text' => 'King\'s governor'],
                      ['text' => 'Lieutenant-Governor'],
                      ['text' => 'Governor General'],
                    ],
                    'correctAnswerId' => 1483,
                    'correct_answer' => 'Lieutenant-Governor',
                    'explanation' => 'In each of the ten provinces, the Sovereign is represented by the Lieutenant Governor.'
                  ],
                  [
                    'text' => 'Who appoints the judges of the Supreme Court of Canada?',
                    'answers' => [
                      ['text' => 'The Governor General'],
                      ['text' => 'The prime minister'],
                      ['text' => 'Other judges'],
                      ['text' => 'The people'],
                    ],
                    'correctAnswerId' => 1485,
                    'correct_answer' => 'The Governor General',
                    'explanation' => 'Nine judges of the Supreme Court of Canada are appointed by the Governor General.'
                  ],
                  [
                    'text' => 'Which of the following best describes the role of the king in Canada?',
                    'answers' => [
                      ['text' => 'To make important decisions about how the country is governed'],
                      ['text' => 'To peacefully oppose or try to improve government proposals'],
                      ['text' => 'To run the federal government departments'],
                      ['text' => 'To focus on citizenship and Allegiance, be a symbol of Canadian sovereignty and a guardian of constitutional freedoms'],
                    ],
                    'correctAnswerId' => 1492,
                    'correct_answer' => 'To focus on citizenship and Allegiance, be a symbol of Canadian sovereignty and a guardian of constitutional freedoms',
                    'explanation' => 'The Sovereign is a part of Parliament, playing an important, non-partisan role as the focus of citizenship and allegiance.'
                  ],
                  [
                    'text' => 'What does it mean to say Canada is a constitutional monarchy?',
                    'answers' => [
                      ['text' => 'The Sovereign queen or King approves bills before becoming law'],
                      ['text' => 'The Sovereign queen or King represents Canadians in Parliament'],
                      ['text' => 'Canada\'s head of state is a hereditary Sovereign (Queen or King) who Reigns in accordance with the Constitution'],
                      ['text' => 'The Sovereign queen or King is the lawmaker of Canada'],
                    ],
                    'correctAnswerId' => 1495,
                    'correct_answer' => 'Canada\'s head of state is a hereditary Sovereign (Queen or King) who Reigns in accordance with the Constitution',
                    'explanation' => 'Canada’s head of state is a hereditary Sovereign (Queen or King), who reigns in accordance with the Constitution: the rule of law.'
                  ],
                  [
                    'text' => 'Who is the King\'s representative in Canada?',
                    'answers' => [
                      ['text' => 'The premier'],
                      ['text' => 'The prime minister\'s spouse'],
                      ['text' => 'The governor-general of Canada'],
                      ['text' => 'The prime minister'],
                    ],
                    'correctAnswerId' => 1499,
                    'correct_answer' => 'The governor-general of Canada',
                    'explanation' => 'The Sovereign is represented in Canada by the Governor General, who is appointed by the Sovereign on the advice of the Prime Minister.'
                  ],
                  [
                    'text' => 'What are three key facts about Canada\'s system of government?',
                    'answers' => [
                      ['text' => 'A federal Kingdom a parliamentary democracy and a constitutional monarchy'],
                      ['text' => 'A federal state, a parliamentary democracy and a constitutional monarchy'],
                      ['text' => 'A socialist country, a parliamentary democracy and a constitutional monarchy'],
                      ['text' => 'A federal country a constitutional democracy and a parliamentary monarchy'],
                    ],
                    'correctAnswerId' => 1502,
                    'correct_answer' => 'A federal state, a parliamentary democracy and a constitutional monarchy',
                    'explanation' => 'Canada’s system of government includes being a federal state, a parliamentary democracy and a constitutional monarchy.'
                  ],
                  [
                    'text' => 'How is a cabinet minister chosen?',
                    'answers' => [
                      ['text' => 'By the prime minister'],
                      ['text' => 'By the king'],
                      ['text' => 'By the voters'],
                      ['text' => 'By the Senators'],
                    ],
                    'correctAnswerId' => 1505,
                    'correct_answer' => 'By the prime minister',
                    'explanation' => 'In the federal government, the Prime Minister selects the Cabinet ministers and is responsible for the operations and policy of the government.'
                  ],
                  [
                    'text' => 'What is Canada\'s system of government called?',
                    'answers' => [
                      ['text' => 'Dictatorship'],
                      ['text' => 'Parliamentary government'],
                      ['text' => 'Military rule'],
                      ['text' => 'Communism'],
                    ],
                    'correctAnswerId' => 1510,
                    'correct_answer' => 'Parliamentary government',
                    'explanation' => 'Canada\'s system of government is called a parliamentary government.'
                  ],
                  [
                    'text' => 'Which of the following are not responsibilities of the Governor General?',
                    'answers' => [
                      ['text' => 'Chooses the opposition party'],
                      ['text' => 'Performs the ceremonial duties of the Head of State'],
                      ['text' => 'Signs bills to make them law after they have been passed by parliament'],
                      ['text' => 'A and C'],
                    ],
                    'correctAnswerId' => 1513,
                    'correct_answer' => 'Chooses the opposition party',
                    'explanation' => 'The Governor General does not choose the opposition party; rather, they perform ceremonial duties and sign bills into law.'
                  ],
                  [
                    'text' => 'Who is Canada\'s head of state?',
                    'answers' => [
                      ['text' => 'The premier of Canada'],
                      ['text' => 'A hereditary Sovereign (Queen or King)'],
                      ['text' => 'The governor-general'],
                      ['text' => 'The prime minister'],
                    ],
                    'correctAnswerId' => 1518,
                    'correct_answer' => 'A hereditary Sovereign (Queen or King)',
                    'explanation' => 'Canada’s head of state is a hereditary Sovereign (Queen or King), who reigns in accordance with the Constitution.'
                  ],
                  [
                    'text' => 'What do you call a law before it is passed?',
                    'answers' => [
                      ['text' => 'A proposed law'],
                      ['text' => 'A bill'],
                      ['text' => 'A new law'],
                      ['text' => 'A proposal of a law'],
                    ],
                    'correctAnswerId' => 1522,
                    'correct_answer' => 'A bill',
                    'explanation' => 'A law before it is passed is called a bill. It must be passed by both chambers of Parliament and receive royal assent to become law.'
                  ],
                  [
                    'text' => 'When did the British North America Act come into effect?',
                    'answers' => [
                      ['text' => '1867'],
                      ['text' => '1881'],
                      ['text' => '1901'],
                      ['text' => '1876'],
                    ],
                    'correctAnswerId' => 1525,
                    'correct_answer' => '1867',
                    'explanation' => 'The responsibilities of the federal and provincial governments were defined in 1867 in the British North America Act, now known as the Constitution Act, 1867.'
                  ],
                  [
                    'text' => 'How long is the lieutenant governor appointed for?',
                    'answers' => [
                      ['text' => '3 years'],
                      ['text' => '4 years'],
                      ['text' => '5 years'],
                      ['text' => '6 years'],
                    ],
                    'correctAnswerId' => 1531,
                    'correct_answer' => '5 years',
                    'explanation' => 'In each of the ten provinces, the Lieutenant Governor is appointed by the Governor General, usually for a term of five years.'
                  ],
                  [
                    'text' => 'Who is a Premier?',
                    'answers' => [
                      ['text' => 'The prime minister is also called the Premier'],
                      ['text' => 'A Premier has a role similar to that of the Prime Minister in a federal government'],
                      ['text' => 'The commissioner'],
                      ['text' => 'The Governor General'],
                    ],
                    'correctAnswerId' => 1534,
                    'correct_answer' => 'A Premier has a role similar to that of the Prime Minister in a federal government',
                    'explanation' => 'In each province, the Premier has a role similar to that of the Prime Minister in the federal government.'
                  ],
                  [
                    'text' => 'Who is the head of government in Canada?',
                    'answers' => [
                      ['text' => 'The sovereign'],
                      ['text' => 'The prime minister'],
                      ['text' => 'The premiere'],
                      ['text' => 'The commissioner'],
                    ],
                    'correctAnswerId' => 1538,
                    'correct_answer' => 'The prime minister',
                    'explanation' => 'There is a clear distinction in Canada between the head of state – the Sovereign – and the head of government – the Prime Minister, who actually directs the governing of the country.'
                  ],
                  [
                    'text' => 'In which act are the responsibilities of the federal and provincial government defined?',
                    'answers' => [
                      ['text' => 'the federal act'],
                      ['text' => 'the Government Act'],
                      ['text' => 'the responsibilities Act'],
                      ['text' => 'the Constitution Act'],
                    ],
                    'correctAnswerId' => 1544,
                    'correct_answer' => 'the Constitution Act',
                    'explanation' => 'The responsibilities of the federal and provincial governments were defined in 1867 in the British North America Act, now known as the Constitution Act, 1867.'
                  ],
                  [
                    'text' => 'Which of the following are the responsibilities of the federal government?',
                    'answers' => [
                      ['text' => 'Nation defense, foreign policy, international trade and Aboriginal affairs'],
                      ['text' => 'Nation defense, Healthcare, international trade and Aboriginal affairs'],
                      ['text' => 'Highways, policing, international trade and criminal justice'],
                      ['text' => 'Education, foreign policy, recycling programs and Aboriginal affairs'],
                    ],
                    'correctAnswerId' => 1545,
                    'correct_answer' => 'Nation defense, foreign policy, international trade and Aboriginal affairs',
                    'explanation' => 'In our federal state, the federal government takes responsibility for matters of national and international concern, including defence, foreign policy, interprovincial trade and communications, currency, navigation, criminal law and citizenship.'
                  ],
                  [
                    'text' => 'What is the tenure of the Governor General?',
                    'answers' => [
                      ['text' => '4 years'],
                      ['text' => '6 years'],
                      ['text' => '5 years'],
                      ['text' => '7 years'],
                    ],
                    'correctAnswerId' => 1551,
                    'correct_answer' => '5 years',
                    'explanation' => 'In each of the ten provinces, the Sovereign is represented by the Lieutenant Governor, who is appointed by the Governor General on the advice of the Prime Minister, usually for five years.'
                  ],
                ]
              ],
              [
                'name' => 'Practice Test 6.2',
                'info' => 'Practice Test 6.2',
                'questions' =>
                [
                  [
                    'text' => 'What is the difference between the role of the Sovereign and that of the Prime Minister?',
                    'answers' => [
                      ['text' => 'The Sovereign links Canada to 52 other nations and the prime minister is the guardian of constitutional freedoms'],
                      ['text' => 'The Sovereign is the symbol of Canadian sovereignty and the prime minister is her Aide'],
                      ['text' => 'The Sovereign is head of state the Prime Minister oversees provincial policies'],
                      ['text' => 'The Sovereign is the guardian of constitutional freedoms the Prime Minister selects the cabinet ministers and is responsible for operations and policy of government'],
                    ],
                    'correctAnswerId' => 1556,
                    'correct_answer' => 'The Sovereign is the guardian of constitutional freedoms the Prime Minister selects the cabinet ministers and is responsible for operations and policy of government',
                    'explanation' => 'The Sovereign is responsible for the guardian of constitutional freedoms, while the Prime Minister selects the cabinet ministers and directs the operations and policies of the government. (P29)'
                  ],
                  [
                    'text' => 'Who signs the bills if it is approved by the provincial Parliament?',
                    'answers' => [
                      ['text' => 'the mayor'],
                      ['text' => 'Dalton McGinty'],
                      ['text' => 'Members of the provincial Parliament'],
                      ['text' => 'the Lieutenant-Governor'],
                    ],
                    'correctAnswerId' => 1560,
                    'correct_answer' => 'the Lieutenant-Governor',
                    'explanation' => 'In Canada, bills approved by the provincial Parliament are signed into law by the Lieutenant-Governor. (P28, 29)'
                  ],
                  [
                    'text' => 'What does M.P.P. stand for?',
                    'answers' => [
                      ['text' => 'Member of the provincial parachute'],
                      ['text' => 'Member of the Provincial Police'],
                      ['text' => 'Member of the provincial Parliament'],
                      ['text' => 'Member of the provincial publication'],
                    ],
                    'correctAnswerId' => 1563,
                    'correct_answer' => 'Member of the provincial Parliament',
                    'explanation' => 'M.P.P. stands for Member of the provincial Parliament, who are elected representatives in the provincial legislatures. (P29)'
                  ],
                  [
                    'text' => 'How are Senators chosen?',
                    'answers' => [
                      ['text' => 'By the Premier of all provinces'],
                      ['text' => 'By the governor general of Canada'],
                      ['text' => 'Appointed by the governor-general on the advice of the Prime Minister'],
                      ['text' => 'Appointed by the king'],
                    ],
                    'correctAnswerId' => 1567,
                    'correct_answer' => 'Appointed by the governor-general on the advice of the Prime Minister',
                    'explanation' => 'Senators in Canada are appointed by the governor-general on the advice of the Prime Minister. (P28)'
                  ],
                  [
                    'text' => 'Jurisdiction is shared by federal government and provinces over which of the following sectors?',
                    'answers' => [
                      ['text' => 'Agriculture and immigration'],
                      ['text' => 'Inter-provincial trade and Communications'],
                      ['text' => 'Defense and health'],
                      ['text' => 'Natural resources'],
                    ],
                    'correctAnswerId' => 1569,
                    'correct_answer' => 'Agriculture and immigration',
                    'explanation' => 'The federal government and the provinces share jurisdiction over agriculture and immigration in Canada. (P28)'
                  ],
                  [
                    'text' => 'What do you call the king\'s representative in the territories?',
                    'answers' => [
                      ['text' => 'Commissioner'],
                      ['text' => 'Member of the legislative assembly'],
                      ['text' => '“Sir”'],
                      ['text' => 'Lieutenant-Governor'],
                    ],
                    'correctAnswerId' => 1573,
                    'correct_answer' => 'Commissioner',
                    'explanation' => 'In the territories of Canada, the King\'s representative is called the Commissioner, who plays a ceremonial role representing the federal government. (P29)'
                  ],
                  [
                    'text' => 'What are the three parts of Parliament?',
                    'answers' => [
                      ['text' => 'the queen or King governor general and prime minister'],
                      ['text' => 'the governor-general the legislative assembly and the Senate'],
                      ['text' => 'the queen or King the House of Commons and the Senate'],
                      ['text' => 'the House of Commons the legislative assembly and the Senate'],
                    ],
                    'correctAnswerId' => 1579,
                    'correct_answer' => 'the queen or King, the House of Commons and the Senate',
                    'explanation' => 'Parliament in Canada consists of the Sovereign (Queen or King), the House of Commons, and the Senate. (P28)'
                  ],
                  [
                    'text' => 'How does a bill become a law?',
                    'answers' => [
                      ['text' => 'Must be approved by the governors of each province'],
                      ['text' => 'Must be approved by a majority in the House of Commons and Senate and received Royal assent'],
                      ['text' => 'Must be signed by the queen or King'],
                      ['text' => 'Must be approved by the members of the parliament'],
                    ],
                    'correctAnswerId' => 1582,
                    'correct_answer' => 'Must be approved by a majority in the House of Commons and Senate and received royal assent',
                    'explanation' => 'For a bill to become law in Canada, it must be approved by a majority in both the House of Commons and the Senate, and then receive royal assent. (P29)'
                  ],
                  [
                    'text' => 'What are the three branches of the Canadian government?',
                    'answers' => [
                      ['text' => 'Executive Senate and judicial'],
                      ['text' => 'Executive legislative and monarchy'],
                      ['text' => 'Executive police and judicial'],
                      ['text' => 'Executive legislative and judicial'],
                    ],
                    'correctAnswerId' => 1588,
                    'correct_answer' => 'Executive legislative and judicial',
                    'explanation' => 'The three branches of the Canadian government are executive, legislative, and judicial, which work together to uphold the rights and freedoms of Canadians. (P29)'
                  ],
                  [
                    'text' => 'Who governs Canada on a daily basis at the federal level?',
                    'answers' => [
                      ['text' => 'Premier'],
                      ['text' => 'Governor General'],
                      ['text' => 'the king'],
                      ['text' => 'Prime minister'],
                    ],
                    'correctAnswerId' => 1592,
                    'correct_answer' => 'Prime minister',
                    'explanation' => 'The Prime Minister governs Canada on a daily basis at the federal level, directing the operations and policies of the government. (P29)'
                  ],
                  [
                    'text' => 'Who invented the sport of basketball?',
                    'answers' => [
                      ['text' => 'Canadians'],
                      ['text' => 'French'],
                      ['text' => 'Germans'],
                      ['text' => 'Americans'],
                    ],
                    'correctAnswerId' => 1593,
                    'correct_answer' => 'Canadians',
                    'explanation' => 'Basketball was invented by Canadian James Naismith in 1891. (P26)'
                  ],
                  [
                    'text' => 'What are the three levels of government in Canada?',
                    'answers' => [
                      ['text' => 'Federal, provincial and County'],
                      ['text' => 'Federal, state and city'],
                      ['text' => 'Federal, provincial or Territorial and Municipal'],
                      ['text' => 'Federal, provincial and rural'],
                    ],
                    'correctAnswerId' => 1599,
                    'correct_answer' => 'Federal, provincial or Territorial and municipal',
                    'explanation' => 'Canada has federal, provincial or territorial, and municipal levels of government. (P28)'
                  ],
                  [
                    'text' => 'How many judges serve in the Supreme Court of Canada?',
                    'answers' => [
                      ['text' => '7'],
                      ['text' => '9'],
                      ['text' => '10'],
                      ['text' => '5'],
                    ],
                    'correctAnswerId' => 1602,
                    'correct_answer' => '9',
                    'explanation' => 'The Supreme Court of Canada is composed of nine judges. (P29)'
                  ],
                  [
                    'text' => 'Which of the following are the provinces responsible for?',
                    'answers' => [
                      ['text' => 'Defense'],
                      ['text' => 'Foreign policy'],
                      ['text' => 'Currency'],
                      ['text' => 'Education'],
                    ],
                    'correctAnswerId' => 1608,
                    'correct_answer' => 'Education',
                    'explanation' => 'Provinces in Canada are responsible for municipal government, education, health, natural resources, property and civil rights, and highways. (P28)'
                  ],
                  [
                    'text' => 'What does the Governor General perform?',
                    'answers' => [
                      ['text' => 'After an election he or she invites the party who has the most votes to form the new government'],
                      ['text' => 'Signs bills to make them law'],
                      ['text' => 'All of the above'],
                      ['text' => 'None of the above'],
                    ],
                    'correctAnswerId' => 1611,
                    'correct_answer' => 'All of the above',
                    'explanation' => 'The Governor General performs several roles, including inviting the party with the most votes to form the new government after an election, and signing bills to make them law. (P28)'
                  ],
                  [
                    'text' => 'How are laws passed?',
                    'answers' => [
                      ['text' => 'Signed by the Governor General'],
                      ['text' => 'Read by the House of Commons three times'],
                      ['text' => 'Read by the Senate three times'],
                      ['text' => 'All of the above'],
                    ],
                    'correctAnswerId' => 1616,
                    'correct_answer' => 'D',
                    'explanation' => 'In Canada, laws are passed after being read and approved by both the House of Commons and the Senate, and then receiving royal assent from the Governor General. (P29)'
                  ],
                  [
                    'text' => 'Who signs the bills to make them law?',
                    'answers' => [
                      ['text' => 'The police chief'],
                      ['text' => 'Governor General'],
                      ['text' => 'Premier'],
                      ['text' => 'Prime minister'],
                    ],
                    'correctAnswerId' => 1618,
                    'correct_answer' => 'B',
                    'explanation' => 'No bill can become law in Canada until it has been passed by both chambers and has received royal assent, granted by the Governor General on behalf of the Sovereign. (P28, 29)'
                  ],
                  [
                    'text' => 'What is a noble way to contribute to Canada and an excellent career choice?',
                    'answers' => [
                      ['text' => 'Serve in the regular Canadian Forces'],
                      ['text' => 'Serve on a jury'],
                      ['text' => 'Belong to a union'],
                      ['text' => 'Learn both official languages'],
                    ],
                    'correctAnswerId' => 1621,
                    'correct_answer' => 'A',
                    'explanation' => 'While there is no compulsory military service in Canada, serving in the regular Canadian Forces (navy, army, and air force) is considered a noble way to contribute to Canada and a respected career choice. (P9)'
                  ],
                  [
                    'text' => 'What does M.L.A. stand for?',
                    'answers' => [
                      ['text' => 'Member of legal aid'],
                      ['text' => 'Member of the legislative assembly'],
                      ['text' => 'Member of land Association'],
                      ['text' => 'Member of land Aid'],
                    ],
                    'correctAnswerId' => 1626,
                    'correct_answer' => 'B',
                    'explanation' => 'M.L.A. stands for Member of the Legislative Assembly. Members of the legislature in Canada are known by various titles depending on the province or territory they represent. (P29)'
                  ],
                ]
              ],
              [
                'name' => 'Practice Test 6.3',
                'info' => 'Practice Test 6.3',
                'questions' =>
                [
                  [
                    'text' => 'Who do provincial members of the legislative or national assemblies represent?',
                    'answers' => [
                      ['text' => 'Federal and provincial governments'],
                      ['text' => 'Everyone who lives in the federal electoral District'],
                      ['text' => 'Everyone who lives in the provincial or territorial electoral District'],
                      ['text' => 'Everyone who lives in the municipal electoral District'],
                    ],
                    'correctAnswerId' => 1631,
                    'correct_answer' => 'C',
                    'explanation' => 'Provincial members of the legislative or national assemblies represent everyone who lives in the provincial or territorial electoral district. (P28)'
                  ],
                  [
                    'text' => 'What is the final step before a bill becomes law?',
                    'answers' => [
                      ['text' => 'Approved by the king'],
                      ['text' => 'Approved by the prime minister'],
                      ['text' => 'Approved by the governor-general'],
                      ['text' => 'Approved by a judge'],
                    ],
                    'correctAnswerId' => 1635,
                    'correct_answer' => 'C',
                    'explanation' => 'The final step before a bill becomes law in Canada is being approved by the governor-general, who grants royal assent on behalf of the Sovereign. (P28, 29)'
                  ],
                  [
                    'text' => 'Who elects the members to the House of Commons in Ottawa and to the provincial and territorial Legislatures?',
                    'answers' => [
                      ['text' => 'The government employees'],
                      ['text' => 'The government'],
                      ['text' => 'Prime minister'],
                      ['text' => 'The people'],
                    ],
                    'correctAnswerId' => 1640,
                    'correct_answer' => 'D',
                    'explanation' => 'In Canada’s parliamentary democracy, members to the House of Commons and provincial/territorial legislatures are elected by the people. (P28)'
                  ],
                  [
                    'text' => 'What does B.N.A stand for?',
                    'answers' => [
                      ['text' => 'British national Alliance'],
                      ['text' => 'British North America Act'],
                      ['text' => 'Black nation Alliance'],
                      ['text' => 'Bank of National Association'],
                    ],
                    'correctAnswerId' => 1642,
                    'correct_answer' => 'B',
                    'explanation' => 'B.N.A. stands for British North America Act, an important historical document in Canadian constitutional law. (P28)'
                  ],
                  [
                    'text' => 'Which of the following is a Canadian musician who won renown in Canada and abroad?',
                    'answers' => [
                      ['text' => 'Emile Nelligan'],
                      ['text' => 'Sir Ernest MacMillan'],
                      ['text' => 'Jean-Paul Riopelle'],
                      ['text' => 'Joy Kogawa'],
                    ],
                    'correctAnswerId' => 1646,
                    'correct_answer' => 'B',
                    'explanation' => 'Sir Ernest MacMillan is a Canadian musician who achieved renown both in Canada and internationally. (P26)'
                  ],
                  [
                    'text' => 'How many judges on the Supreme Court of Canada are appointed by the Governor General?',
                    'answers' => [
                      ['text' => 'Nine'],
                      ['text' => 'Five'],
                      ['text' => 'Twelve'],
                      ['text' => 'Three'],
                    ],
                    'correctAnswerId' => 1649,
                    'correct_answer' => 'A',
                    'explanation' => 'The Supreme Court of Canada consists of nine judges, all appointed by the Governor General. (P29)'
                  ],
                  [
                    'text' => 'What comprises a provincial legislature?',
                    'answers' => [
                      ['text' => 'The elected Assembly'],
                      ['text' => 'The Lieutenant Governor and the elected Assembly'],
                      ['text' => 'The provincial MPs'],
                      ['text' => 'The provincial MPs and the elected Assembly'],
                    ],
                    'correctAnswerId' => 1654,
                    'correct_answer' => 'B',
                    'explanation' => 'A provincial legislature comprises the Lieutenant Governor and the elected Assembly. (P29)'
                  ],
                  [
                    'text' => 'What do you call the King’s or Queen’s representative in the provinces?',
                    'answers' => [
                      ['text' => 'Premier'],
                      ['text' => 'Senator'],
                      ['text' => 'Lieutenant Governor'],
                      ['text' => 'Member of Parliament'],
                    ],
                    'correctAnswerId' => 1659,
                    'correct_answer' => 'C',
                    'explanation' => 'The King’s or Queen’s representative in the provinces of Canada is called the Lieutenant Governor. (P29)'
                  ],
                  [
                    'text' => 'Where are the provincial and territorial laws passed?',
                    'answers' => [
                      ['text' => 'In the Senate'],
                      ['text' => 'In the provincial and territorial courts'],
                      ['text' => 'In the House of Commons'],
                      ['text' => 'In the elected legislature'],
                    ],
                    'correctAnswerId' => 1664,
                    'correct_answer' => 'D',
                    'explanation' => 'Provincial and territorial laws are passed in the elected legislature of each province and territory. (P28)'
                  ],
                  [
                    'text' => 'What would best describe the role of the King or Queen in Canada?',
                    'answers' => [
                      ['text' => 'The Queen or King is a symbol of Canadian sovereignty and a guardian of constitutional freedoms'],
                      ['text' => 'The Queen or King must approve all government decisions'],
                      ['text' => 'The Queen or King appoints all Cabinet Ministers and Prime Ministers'],
                      ['text' => 'The Queen or King is a symbol of Canadian citizenship and mobility rights'],
                    ],
                    'correctAnswerId' => 1665,
                    'correct_answer' => 'A',
                    'explanation' => 'The King or Queen in Canada is a symbol of Canadian sovereignty and a guardian of constitutional freedoms. (P28)'
                  ],
                  [
                    'text' => 'How often are members of Parliament elected?',
                    'answers' => [
                      ['text' => 'Two years'],
                      ['text' => 'Five years'],
                      ['text' => 'Four years'],
                      ['text' => 'Ten years'],
                    ],
                    'correctAnswerId' => 1671,
                    'correct_answer' => 'C',
                    'explanation' => 'Members of Parliament in Canada are traditionally elected every four years. (P29)'
                  ],
                  [
                    'text' => 'Which of the following is a responsibility of the provinces?',
                    'answers' => [
                      ['text' => 'Highways'],
                      ['text' => 'Foreign policy'],
                      ['text' => 'Defence'],
                      ['text' => 'Interprovincial trade'],
                    ],
                    'correctAnswerId' => 1673,
                    'correct_answer' => 'A',
                    'explanation' => 'Provinces in Canada are responsible for various areas including municipal government, education, health, natural resources, property and civil rights, and highways. (P28)'
                  ],
                  [
                    'text' => 'Who is Canada’s head of government?',
                    'answers' => [
                      ['text' => 'The Prime Minister'],
                      ['text' => 'The Queen or King'],
                      ['text' => 'The House of Commons'],
                      ['text' => 'The people'],
                    ],
                    'correctAnswerId' => 1677,
                    'correct_answer' => 'A',
                    'explanation' => 'Canada’s head of government is the Prime Minister, who directs the operations and policies of the government. (P29)'
                  ],
                  [
                    'text' => 'For how many years is the Lieutenant Governor usually appointed?',
                    'answers' => [
                      ['text' => 'Two'],
                      ['text' => 'Five'],
                      ['text' => 'Ten'],
                      ['text' => 'Three'],
                    ],
                    'correctAnswerId' => 1682,
                    'correct_answer' => 'B',
                    'explanation' => 'The Lieutenant Governor in Canada is usually appointed for a term of five years. (P29)'
                  ],
                  [
                    'text' => 'For a bill to become a law, how many readings must it go through?',
                    'answers' => [
                      ['text' => 'Three'],
                      ['text' => 'One'],
                      ['text' => 'Two'],
                      ['text' => 'None'],
                    ],
                    'correctAnswerId' => 1685,
                    'correct_answer' => 'A',
                    'explanation' => 'A bill in Canada must go through three readings in Parliament (House of Commons and Senate) before it can become law. (P29)'
                  ],
                  [
                    'text' => 'What is the "House of Commons"?',
                    'answers' => [
                      ['text' => 'The representative chamber made up of Cabinet Ministers'],
                      ['text' => 'The representative chamber made up of Senators'],
                      ['text' => 'The representative chamber made up of members of Parliament'],
                      ['text' => 'The representative chamber made up of Federal Deputies'],
                    ],
                    'correctAnswerId' => 1691,
                    'correct_answer' => 'C',
                    'explanation' => 'The House of Commons in Canada is the representative chamber made up of members of Parliament elected by the people. (P29)'
                  ],
                  [
                    'text' => 'What is the name of the highest judiciary court in Canada?',
                    'answers' => [
                      ['text' => 'The Executive Court'],
                      ['text' => 'Her Majesty Court'],
                      ['text' => 'The Supreme Court'],
                      ['text' => 'The Federal Court'],
                    ],
                    'correctAnswerId' => 1695,
                    'correct_answer' => 'C',
                    'explanation' => 'The highest judiciary court in Canada is the Supreme Court, which plays a crucial role in interpreting laws and ensuring their application across the country. (P29)'
                  ],
                  [
                    'text' => 'Canada is not a member of the North Atlantic Treaty Organization (NATO)',
                    'answers' => [
                      ['text' => 'True'],
                      ['text' => 'False'],
                    ],
                    'correctAnswerId' => 1698,
                    'correct_answer' => 'B',
                    'explanation' => 'Canada joined with other democratic countries of the West to form the North Atlantic Treaty Organization (NATO), a military alliance, and with the United States in the North American Aerospace Defence Command (NORAD).'
                  ],
                  [
                    'text' => 'What is a "hereditary sovereign"?',
                    'answers' => [
                      ['text' => 'A Prime Minister'],
                      ['text' => 'A Governor General'],
                      ['text' => 'A Senator'],
                      ['text' => 'A Queen or a King'],
                    ],
                    'correctAnswerId' => 1702,
                    'correct_answer' => 'D',
                    'explanation' => 'As a constitutional monarchy, Canada’s Head of State is a hereditary Sovereign (Queen or King), who reigns in accordance with the Constitution: the rule of law.'
                  ],
                  [
                    'text' => 'What are the three branches of Canadian government?',
                    'answers' => [
                      ['text' => 'Senate, Legislative and Judicial'],
                      ['text' => 'Executive, Legislative and Judicial'],
                      ['text' => 'Executive, Federal and Judicial'],
                      ['text' => 'Executive, Legislative and Monarchy'],
                    ],
                    'correctAnswerId' => 1704,
                    'correct_answer' => 'B',
                    'explanation' => 'Canada’s system of government has three branches: the legislative, the executive and the judicial. Each one has separate powers and responsibilities that are defined in the Constitution: the legislative branch passes laws, the executive implements them, and the judicial interprets them.'
                  ],
                  [
                    'text' => 'How many territories are there in Canada?',
                    'answers' => [
                      ['text' => 'Two'],
                      ['text' => 'Four'],
                      ['text' => 'One'],
                      ['text' => 'Three'],
                    ],
                    'correctAnswerId' => 1710,
                    'correct_answer' => 'D',
                    'explanation' => 'Canada has ten provinces and three territories. Each province and territory has its own capital city. You should know the capital of your province or territory as well as that of Canada.'
                  ],
                ]
              ],
              [
                'name' => 'Practice Test 6.4',
                'info' => 'Practice Test 6.4',
                'questions' =>
                [
                  [
                    'text' => 'Who considers and reviews proposals for new laws?',
                    'answers' => [
                      ['text' => 'The Senate'],
                      ['text' => 'The Cabinet Ministers'],
                      ['text' => 'The House of Commons and the Senate'],
                      ['text' => 'The House of Commons'],
                    ],
                    'correctAnswerId' => 1713,
                    'correct_answer' => 'C',
                    'explanation' => 'Both the House of Commons and the Senate consider and review bills (proposals for new laws).'
                  ],
                  [
                    'text' => 'What is often referred to as "the goal heard around the world"?',
                    'answers' => [
                      ['text' => 'the winning goal for Canada in the Canada-Soviet Stanley Cup Series in 1972'],
                      ['text' => 'the winning goal for Canada in the Canada-USA Summit Series in 1972'],
                      ['text' => 'the winning goal for Canada in the Canada-Soviet Summit Series in 1972'],
                      ['text' => 'the winning goal for Canada in the Canada-Soviet Summit Series in 1992'],
                    ],
                    'correctAnswerId' => 1717,
                    'correct_answer' => 'C',
                    'explanation' => 'In 1972, Paul Henderson scored the winning goal for Canada in the Canada-Soviet Summit Series. This goal is often referred to as “the goal heard around the world” and is still remembered today as an important event in both sports and cultural history.'
                  ],
                  [
                    'text' => 'What is the head of a province called?',
                    'answers' => [
                      ['text' => 'The Chief President'],
                      ['text' => 'The King'],
                      ['text' => 'The Lieutenant Governor'],
                      ['text' => 'The Premier'],
                    ],
                    'correctAnswerId' => 1722,
                    'correct_answer' => 'D',
                    'explanation' => 'In each province, the Premier has a role similar to that of the Prime Minister in the federal government, just as the Lieutenant Governor has a role similar to that of the Governor General.'
                  ],
                  [
                    'text' => 'What does "federalism" do?',
                    'answers' => [
                      ['text' => 'Allows the Federal government to adopt policies for all provinces'],
                      ['text' => 'Gives all the power to the federal government'],
                      ['text' => 'Gives all the power to the Prime Minister'],
                      ['text' => 'Allows different provinces to adopt policies tailored to their own populations'],
                    ],
                    'correctAnswerId' => 1726,
                    'correct_answer' => 'D',
                    'explanation' => 'Federalism allows different provinces to adopt policies tailored to their own populations, and gives provinces the flexibility to experiment with new ideas and policies.'
                  ],
                  [
                    'text' => 'Every province has its own elected Legislative Assembly',
                    'answers' => [
                      ['text' => 'True'],
                      ['text' => 'False'],
                    ],
                    'correctAnswerId' => 1727,
                    'correct_answer' => 'A',
                    'explanation' => 'Every province has its own elected Legislative Assembly, like the House of Commons in Ottawa.'
                  ],
                  [
                    'text' => 'What are the two official languages of Canada?',
                    'answers' => [
                      ['text' => 'Chinese and English'],
                      ['text' => 'English and British'],
                      ['text' => 'French and English'],
                      ['text' => 'English and Inuit'],
                    ],
                    'correctAnswerId' => 1731,
                    'correct_answer' => 'C',
                    'explanation' => 'English and French are the two official languages in Canada and are important symbols of identity.'
                  ],
                  [
                    'text' => 'What does "parliamentary democracy" mean?',
                    'answers' => [
                      ['text' => 'The parliament elects members to the House of Commons in Ottawa and to the provincial and territorial legislatures'],
                      ['text' => 'The senators elect members to the House of Commons in Ottawa and to the provincial and territorial legislatures'],
                      ['text' => 'The people elect members to the House of Commons in Ottawa and to the provincial and territorial legislatures'],
                      ['text' => 'The Queen elects members to the House of Commons in Ottawa and to the provincial and territorial legislatures'],
                    ],
                    'correctAnswerId' => 1735,
                    'correct_answer' => 'C',
                    'explanation' => 'In Canada’s parliamentary democracy, the people elect members to the House of Commons in Ottawa and to the provincial and territorial legislatures.'
                  ],
                  [
                    'text' => 'How is the Governor General chosen?',
                    'answers' => [
                      ['text' => 'Elected by the House of Commons'],
                      ['text' => 'Appointed by the Sovereign on the advice of the Prime Minister'],
                      ['text' => 'Elected by the people'],
                      ['text' => 'Appointed by the Prime Minister'],
                    ],
                    'correctAnswerId' => 1739,
                    'correct_answer' => 'B',
                    'explanation' => 'The Sovereign is represented in Canada by the Governor General, who is appointed by the Sovereign on the advice of the Prime Minister, usually for five years.'
                  ],
                  [
                    'text' => 'How are senators chosen?',
                    'answers' => [
                      ['text' => 'They are appointed by the Prime Minister'],
                      ['text' => 'They are appointed by the House of Commons'],
                      ['text' => 'They are appointed by the Governor General on the advice of the Prime Minister'],
                      ['text' => 'They are elected by the people'],
                    ],
                    'correctAnswerId' => 1743,
                    'correct_answer' => 'C',
                    'explanation' => 'Senators are appointed by the Governor General on the advice of the Prime Minister and serve until age 75.'
                  ],
                  [
                    'text' => 'What are the responsibilities of the federal government?',
                    'answers' => [
                      ['text' => 'Matters of provincial concern'],
                      ['text' => 'Matters of national concern'],
                      ['text' => 'Matters of national and international concern'],
                      ['text' => 'Matters of international concern'],
                    ],
                    'correctAnswerId' => 1747,
                    'correct_answer' => 'C',
                    'explanation' => 'In our federal state, the federal government takes responsibility for matters of national and international concern.'
                  ],
                  [
                    'text' => 'What happens if the cabinet ministers are defeated in a non-confidence vote?',
                    'answers' => [
                      ['text' => 'They keep their positions for 6 more months only'],
                      ['text' => 'Nothing'],
                      ['text' => 'They keep their positions for one more year only'],
                      ['text' => 'They have to resign'],
                    ],
                    'correctAnswerId' => 1752,
                    'correct_answer' => 'D',
                    'explanation' => 'If the government loses a confidence vote in the assembly it must resign.'
                  ],
                  [
                    'text' => 'What does it mean for the Cabinet Ministers to retain the "confidence of the House"?',
                    'answers' => [
                      ['text' => 'The House of Commons is responsible for the Cabinet ministers'],
                      ['text' => 'Cabinet ministers have to resign if they are defeated in a non-confidence vote'],
                      ['text' => 'Cabinet ministers must swear allegiance to the House of England'],
                      ['text' => 'Cabinet ministers must retain the confidence of the people'],
                    ],
                    'correctAnswerId' => 1754,
                    'correct_answer' => 'B',
                    'explanation' => 'Cabinet ministers are responsible to the elected representatives, which means they must retain the “confidence of the House” and have to resign if they are defeated in a non-confidence vote.'
                  ],
                  [
                    'text' => 'What are the three parts of Parliament?',
                    'answers' => [
                      ['text' => 'Sovereign, Senate and House of Parliament'],
                      ['text' => 'Police, Senate and House of Commons'],
                      ['text' => 'Sovereign, Senate and House of Commons'],
                      ['text' => 'Sovereign, Premier and House of Commons'],
                    ],
                    'correctAnswerId' => 1759,
                    'correct_answer' => 'C',
                    'explanation' => 'Parliament has three parts: the Sovereign (Queen or King), the Senate and the House of Commons. Provincial legislatures comprise the Lieutenant Governor and the elected Assembly.'
                  ],
                  [
                    'text' => 'How are Senators appointed?',
                    'answers' => [
                      ['text' => 'By the Governor General on the advice of the Prime Minister'],
                      ['text' => 'By the Queen on the advice of the Prime Minister'],
                      ['text' => 'By the Prime Minister'],
                      ['text' => 'They are elected by the people'],
                    ],
                    'correctAnswerId' => 1761,
                    'correct_answer' => 'A',
                    'explanation' => 'Senators are appointed by the Governor General on the advice of the Prime Minister and serve until age 75.'
                  ],
                  [
                    'text' => 'For what is the Prime Minister of Canada responsible?',
                    'answers' => [
                      ['text' => 'Education, health, and natural resources'],
                      ['text' => 'Matters of national concern'],
                      ['text' => 'The operations and policy of the government'],
                      ['text' => 'The operations of the government'],
                    ],
                    'correctAnswerId' => 1767,
                    'correct_answer' => 'C',
                    'explanation' => 'In the federal government, the Prime Minister selects the Cabinet ministers and is responsible for the operations and policy of the government.'
                  ],
                  [
                    'text' => 'How does a bill become a law?',
                    'answers' => [
                      ['text' => 'The bill must be passed by the House of Commons'],
                      ['text' => 'The bill must be approved by the Members of the Parliament'],
                      ['text' => 'The bill must be passed by the House of Commons and the Senate, and must receive royal assent'],
                      ['text' => 'The bill must be signed by the Queen or King of England'],
                    ],
                    'correctAnswerId' => 1771,
                    'correct_answer' => 'C',
                    'explanation' => 'Both the House of Commons and the Senate consider and review bills (proposals for new laws). No bill can become law in Canada until it has been passed by both chambers and has received royal assent, granted by the Governor General on behalf of the Sovereign.'
                  ],
                  [
                    'text' => 'What does "federalism" mean?',
                    'answers' => [
                      ['text' => 'Canada is a federal country'],
                      ['text' => 'The Federal government has the final decision over all matters'],
                      ['text' => 'The different provinces can adopt policies tailored to their own populations'],
                      ['text' => 'The Federal Government has jurisdiction over certain matters'],
                    ],
                    'correctAnswerId' => 1775,
                    'correct_answer' => 'C',
                    'explanation' => 'Federalism allows different provinces to adopt policies tailored to their own populations, and gives provinces the flexibility to experiment with new ideas and policies.'
                  ],
                  [
                    'text' => 'What form of government does Canada have?',
                    'answers' => [
                      ['text' => 'Monarchy'],
                      ['text' => 'Autocracy'],
                      ['text' => 'Constitutional Monarchy'],
                      ['text' => 'Republic'],
                    ],
                    'correctAnswerId' => 1779,
                    'correct_answer' => 'C',
                    'explanation' => 'Canada is a constitutional monarchy, a parliamentary democracy and a federal state. Canadians are bound together by a shared commitment to the rule of law and to the institutions of parliamentary government.'
                  ],
                  [
                    'text' => 'How can a bill become a law in Canada?',
                    'answers' => [
                      ['text' => 'The people vote in favour of the law'],
                      ['text' => 'It is passed by both chambers and receives royal assent'],
                      ['text' => 'It passed by the House of Common and receives royal assent'],
                      ['text' => 'It passed by Senate and receives royal assent'],
                    ],
                    'correctAnswerId' => 1782,
                    'correct_answer' => 'B',
                    'explanation' => 'No bill can become law in Canada until it has been passed by both chambers and has received royal assent, granted by the Governor General on behalf of the Sovereign.'
                  ],
                  [
                    'text' => 'What does it mean to retain the "confidence of the House"?',
                    'answers' => [
                      ['text' => 'The House of Commons has to have confidence in the Prime Minister'],
                      ['text' => 'The House of Commons has to have confidence in the senators'],
                      ['text' => 'Cabinet ministers are responsible to the elected representatives'],
                      ['text' => 'The Queen has to have confidence in the Cabinet ministers'],
                    ],
                    'correctAnswerId' => 1787,
                    'correct_answer' => 'C',
                    'explanation' => 'Cabinet ministers are responsible to the elected representatives, which means they must retain the “confidence of the House” and have to resign if they are defeated in a non-confidence vote.'
                  ],
                ]
              ],
              [
                'name' => 'Practice Test 6.5',
                'info' => 'Practice Test 6.5',
                'questions' =>
                [
                  [
                    'text' => 'Which one of the following is not a responsibility of a political representative (members of the House of Commons and members of the provincial and territorial legislatures)?',
                    'answers' => [
                      ['text' => 'Approving and monitoring expenditures'],
                      ['text' => 'Passing laws'],
                      ['text' => 'Keeping the government accountable'],
                      ['text' => 'Select the Cabinet Ministers'],
                    ],
                    'correctAnswerId' => 1792,
                    'correct_answer' => 'D',
                    'explanation' => 'In Canada’s parliamentary democracy, the people elect members to the House of Commons in Ottawa and to the provincial and territorial legislatures. These representatives are responsible for passing laws, approving and monitoring expenditures, and keeping the government accountable.'
                  ],
                  [
                    'text' => 'When did Canada become a Constitutional Monarchy?',
                    'answers' => [
                      ['text' => '2001'],
                      ['text' => '1980'],
                      ['text' => '1867'],
                      ['text' => '1988'],
                    ],
                    'correctAnswerId' => 1795,
                    'correct_answer' => 'C',
                    'explanation' => 'Canada has been a constitutional monarchy in its own right since Confederation in 1867 during Queen Victoria’s reign.'
                  ],
                  [
                    'text' => 'How many other Commonwealth nations are Canada linked?',
                    'answers' => [
                      ['text' => '12'],
                      ['text' => '53'],
                      ['text' => '6'],
                      ['text' => '49'],
                    ],
                    'correctAnswerId' => 1798,
                    'correct_answer' => 'B',
                    'explanation' => 'As Head of the Commonwealth, the Sovereign links Canada to 53 other nations that cooperate to advance social, economic and cultural progress.'
                  ],
                  [
                    'text' => 'When did Canada form a responsible government?',
                    'answers' => [
                      ['text' => '1999'],
                      ['text' => '1755'],
                      ['text' => '1867'],
                      ['text' => '2000'],
                    ],
                    'correctAnswerId' => 1803,
                    'correct_answer' => 'C',
                    'explanation' => 'The British Parliament passed the British North America Act in 1867. The Dominion of Canada was officially born on July 1, 1867. Until 1982, July 1 was celebrated as “Dominion Day” to commemorate the day that Canada became a self-governing Dominion.'
                  ],
                  [
                    'text' => 'Who appoints the judges on the Supreme Court of Canada?',
                    'answers' => [
                      ['text' => 'The Prime Minister'],
                      ['text' => 'The Sovereign'],
                      ['text' => 'The Senate'],
                      ['text' => 'The Governor General'],
                    ],
                    'correctAnswerId' => 1808,
                    'correct_answer' => 'D',
                    'explanation' => 'The Governor General is responsible for assigning nine judges to the Supreme Court of Canada.'
                  ],
                  [
                    'text' => 'Who is the Sovereign represented in Canada?',
                    'answers' => [
                      ['text' => 'The Prime Minister'],
                      ['text' => 'Nobody'],
                      ['text' => 'The Governor General'],
                      ['text' => 'The Lieutenant Governor'],
                    ],
                    'correctAnswerId' => 1811,
                    'correct_answer' => 'C',
                    'explanation' => 'The Sovereign is represented in Canada by the Governor General, who is appointed by the Sovereign on the advice of the Prime Minister, usually for five years.'
                  ],
                  [
                    'text' => 'What is a proposal for a new law called?',
                    'answers' => [
                      ['text' => 'A law proposal'],
                      ['text' => 'A law suggestion'],
                      ['text' => 'A bill'],
                      ['text' => 'A new law'],
                    ],
                    'correctAnswerId' => 1815,
                    'correct_answer' => 'C',
                    'explanation' => 'Both the House of Commons and the Senate consider and review bills (proposals for new laws).'
                  ],
                  [
                    'text' => 'Which of the following is a responsibility of the members to the House of Commons in Ottawa and to the provincial and territorial legislatures?',
                    'answers' => [
                      ['text' => 'Keeping the government accountable'],
                      ['text' => 'Education and health'],
                      ['text' => 'Matters of international concern'],
                      ['text' => 'Agriculture and immigration'],
                    ],
                    'correctAnswerId' => 1817,
                    'correct_answer' => 'A',
                    'explanation' => 'In Canada’s parliamentary democracy, the people elect members to the House of Commons in Ottawa and to the provincial and territorial legislatures. These representatives are responsible for passing laws, approving and monitoring expenditures, and keeping the government accountable.'
                  ],
                  [
                    'text' => 'What are the levels of government in Canada?',
                    'answers' => [
                      ['text' => 'Provincial, territorial and municipal'],
                      ['text' => 'Federal and provincial'],
                      ['text' => 'Federal, provincial, territorial and municipal'],
                      ['text' => 'Federal, provincial, and territorial'],
                    ],
                    'correctAnswerId' => 1823,
                    'correct_answer' => 'C',
                    'explanation' => 'There are federal, provincial, territorial and municipal governments in Canada. The responsibilities of the federal and provincial governments were defined in 1867 in the British North America Act, now known as the Constitution Act, 1867.'
                  ],
                  [
                    'text' => 'In the territories, who represents the government?',
                    'answers' => [
                      ['text' => 'The Commissioner'],
                      ['text' => 'The Lieutenant Governor'],
                      ['text' => 'The Premier'],
                      ['text' => 'The King or Queen'],
                    ],
                    'correctAnswerId' => 1825,
                    'correct_answer' => 'A',
                    'explanation' => 'In the three territories, the Commissioner represents the federal government and plays a ceremonial role.'
                  ],
                  [
                    'text' => 'When were the majority of Canadians able to afford adequate food, shelter and clothing for the first time?',
                    'answers' => [
                      ['text' => '1949'],
                      ['text' => '1954'],
                      ['text' => '1945'],
                      ['text' => '1951'],
                    ],
                    'correctAnswerId' => 1832,
                    'correct_answer' => 'D',
                    'explanation' => 'In 1951, for the first time, a majority of Canadians were able to afford adequate food, shelter and clothing.'
                  ],
                  [
                    'text' => 'When was the British North America Act adopted in Canada?',
                    'answers' => [
                      ['text' => '1765'],
                      ['text' => '1999'],
                      ['text' => '1867'],
                      ['text' => '1700'],
                    ],
                    'correctAnswerId' => 1835,
                    'correct_answer' => 'C',
                    'explanation' => 'The British North America Act, commonly referred to as the Constitution Act, was adopted by the British Parliament in 1867.'
                  ],
                  [
                    'text' => 'Who invented the snowmobile?',
                    'answers' => [
                      ['text' => 'Matthew Evans'],
                      ['text' => 'Joseph-Armand Skidoo'],
                      ['text' => 'Mike Lazaridis'],
                      ['text' => 'Joseph-Armand Bombardier'],
                    ],
                    'correctAnswerId' => 1840,
                    'correct_answer' => 'D',
                    'explanation' => 'Joseph-Armand Bombardier invented the snowmobile, a light-weight winter vehicle.'
                  ],
                  [
                    'text' => 'How is the Lieutenant Governor chosen?',
                    'answers' => [
                      ['text' => 'Appointed by the Governor General on the advice of the Prime Minister'],
                      ['text' => 'Appointed by the Governor General'],
                      ['text' => 'Appointed by the Sovereign on the advice of the Prime Minister'],
                      ['text' => 'Appointed by the Prime Minister'],
                    ],
                    'correctAnswerId' => 1841,
                    'correct_answer' => 'A',
                    'explanation' => 'The Sovereign is represented by the Lieutenant Governor, who is appointed by the Governor General on the advice of the Prime Minister, usually for five years.'
                  ],
                  [
                    'text' => 'Who selects the Cabinet Ministers?',
                    'answers' => [
                      ['text' => 'The people of Canada'],
                      ['text' => 'The Queen'],
                      ['text' => 'The Prime Minister'],
                      ['text' => 'The Senators'],
                    ],
                    'correctAnswerId' => 1847,
                    'correct_answer' => 'C',
                    'explanation' => 'In the federal government, the Prime Minister selects the Cabinet ministers and is responsible for the operations and policy of the government.'
                  ],
                  [
                    'text' => 'What is the shared jurisdiction of the federal and provincial governments?',
                    'answers' => [
                      ['text' => 'Agriculture and immigration'],
                      ['text' => 'Education and highways'],
                      ['text' => 'Agriculture and civil rights'],
                      ['text' => 'Natural Resources and immigration'],
                    ],
                    'correctAnswerId' => 1849,
                    'correct_answer' => 'A',
                    'explanation' => 'The federal government and the provinces share jurisdiction over agriculture and immigration.'
                  ],
                  [
                    'text' => 'When were the Canada and Quebec Pension Plans devised?',
                    'answers' => [
                      ['text' => '1927'],
                      ['text' => '1940'],
                      ['text' => '1970'],
                      ['text' => '1965'],
                    ],
                    'correctAnswerId' => 1856,
                    'correct_answer' => 'D',
                    'explanation' => 'Old Age Security was devised as early as 1927, and the Canada and Quebec Pension Plans in 1965.'
                  ],
                  [
                    'text' => 'What is the difference between the Head of State and the Head of Government?',
                    'answers' => [
                      ['text' => 'The Head of State must approve all government decisions'],
                      ['text' => 'The Head of Government doesn\'t actually direct the governing of the country'],
                      ['text' => 'The Head of State appoints the Head of Government'],
                      ['text' => 'The Head of Government actually directs the governing of the country'],
                    ],
                    'correctAnswerId' => 1860,
                    'correct_answer' => 'D',
                    'explanation' => 'There is a clear distinction in Canada between the head of state—the Sovereign—and the head of government—the Prime Minister, who actually directs the governing of the country.'
                  ],
                ]
              ],
            ],
            'topics' => [
              ['name' => 'How Canadians Govern'],
              ['name' => 'The Timeline'],
            ],
            'flashcards' => [
              [
                'question' => 'What is the shared jurisdiction of the federal and provincial governments?',
                'answer' => 'Agriculture and immigration',
                'explanation' => 'The federal government and the provinces share jurisdiction over agriculture and immigration.'
              ],
              [
                'question' => 'What are the three branches of the Canadian government?',
                'answer' => 'Executive, Legislative and Judicial',
                'explanation' => 'Canada’s system of government has three branches: the legislative, the executive and the judicial. Each one has separate powers and responsibilities that are defined in the Constitution: the legislative branch passes laws, the executive implements them, and the judicial interprets them.'
              ],
              [
                'question' => 'What are the two official languages of Canada?',
                'answer' => 'French and English',
                'explanation' => 'English and French are the two official languages in Canada and are important symbols of identity.'
              ],
              [
                'question' => 'What are the three parts of Parliament?',
                'answer' => 'Sovereign, Senate and House of Commons',
                'explanation' => 'Parliament has three parts: the Sovereign (Queen or King), the Senate and the House of Commons. Provincial legislatures comprise the Lieutenant Governor and the elected Assembly.'
              ],
              [
                'question' => 'What comprises a provincial legislature?',
                'answer' => 'The Lieutenant Governor and the elected Assembly',
                'explanation' => 'Parliament has three parts: the Sovereign (Queen or King), the Senate and the House of Commons. Provincial legislatures comprise the Lieutenant Governor and the elected Assembly.'
              ],
              [
                'question' => 'Who is Canada’s head of government?',
                'answer' => 'The Prime Minister',
                'explanation' => 'There is a clear distinction in Canada between the head of state—the Sovereign—and the head of government—the Prime Minister, who actually directs the governing of the country.'
              ],
              [
                'question' => 'What are the three key facts about Canada’s system of government?',
                'answer' => 'Canada is a federal state, a parliamentary democracy and a constitutional monarchy',
                'explanation' => 'Canada is a constitutional monarchy, a parliamentary democracy and a federal state. Canadians are bound together by a shared commitment to the rule of law and to the institutions of parliamentary government.'
              ],
              [
                'question' => 'What is the difference between the Head of State and the Head of Government?',
                'answer' => 'The Head of Government actually directs the governing of the country',
                'explanation' => 'There is a clear distinction in Canada between the head of state—the Sovereign—and the head of government—the Prime Minister, who actually directs the governing of the country.'
              ],
              [
                'question' => 'What is the name of the highest judiciary court in Canada?',
                'answer' => 'The Supreme Court',
                'explanation' => 'The Supreme Court of Canada is our country’s highest court. The Federal Court of Canada deals with matters concerning the federal government.'
              ],
              [
                'question' => 'How are senators chosen?',
                'answer' => 'They are appointed by the Governor General on the advice of the Prime Minister',
                'explanation' => 'Senators are appointed by the Governor General on the advice of the Prime Minister and serve until age 75.'
              ],
              [
                'question' => 'What would best describe the role of the King or Queen in Canada?',
                'answer' => 'The Queen or King is a symbol of Canadian sovereignty and a guardian of constitutional freedoms',
                'explanation' => 'The King or Queen is a symbol of Canadian sovereignty, a guardian of constitutional freedoms, and a reflection of our history.'
              ],
              [
                'question' => 'What is a "hereditary Sovereign"?',
                'answer' => 'A Queen or a King',
                'explanation' => 'As a constitutional monarchy, Canada’s Head of State is a hereditary Sovereign (Queen or King), who reigns in accordance with the Constitution: the rule of law.'
              ],
              [
                'question' => 'In the territories, who represents the government?',
                'answer' => 'The Commissioner',
                'explanation' => 'In the three territories, the Commissioner represents the federal government and plays a ceremonial role.'
              ],
              [
                'question' => 'Who appoints the judges on the Supreme Court of Canada?',
                'answer' => 'The Governor General',
                'explanation' => 'The Governor General is responsible for appointing judges to the Supreme Court of Canada.'
              ],
              [
                'question' => 'For a bill to become a law, how many readings must it go through?',
                'answer' => 'Three',
                'explanation' => 'A bill must go through three readings: First Reading, Second Reading, and Third Reading, in both the House of Commons and the Senate, before receiving royal assent.'
              ],
              [
                'question' => 'How does a bill become a law?',
                'answer' => 'The bill must be passed by the House of Commons and the Senate, and must receive royal assent',
                'explanation' => 'No bill can become law in Canada until it has been passed by both the House of Commons and the Senate, and has received royal assent from the Governor General.'
              ],
              [
                'question' => 'What does "parliamentary democracy" mean?',
                'answer' => 'The people elect members to the House of Commons in Ottawa and to the provincial and territorial legislatures',
                'explanation' => 'In Canada’s parliamentary democracy, the people elect members to the House of Commons in Ottawa and to the provincial and territorial legislatures.'
              ],
              [
                'question' => 'Who is the Sovereign represented by in Canada?',
                'answer' => 'The Governor General',
                'explanation' => 'The Sovereign is represented in Canada by the Governor General, who is appointed by the Sovereign on the advice of the Prime Minister, usually for five years.'
              ],
              [
                'question' => 'What is often referred to as "the goal heard around the world"?',
                'answer' => 'The winning goal for Canada in the Canada-Soviet Summit Series in 1972',
                'explanation' => 'In 1972, Paul Henderson scored the winning goal for Canada in the Canada-Soviet Summit Series. This goal is often referred to as “the goal heard around the world” and is still remembered today as an important event in both sports and cultural history.'
              ],
              [
                'question' => 'What is a proposal for a new law called?',
                'answer' => 'A bill',
                'explanation' => 'A proposal for a new law is called a bill.'
              ],
              [
                'question' => 'For what are the provincial governments responsible?',
                'answer' => 'Education, health, natural resources, property, civil rights, and highways',
                'explanation' => 'Provincial governments in Canada are responsible for municipal government, education, health, natural resources, property and civil rights, and highways.'
              ],
              [
                'question' => 'What are the levels of government in Canada?',
                'answer' => 'Federal, provincial, territorial and municipal',
                'explanation' => 'There are federal, provincial, territorial and municipal governments in Canada. The responsibilities of the federal and provincial governments were defined in 1867 in the British North America Act, now known as the Constitution Act, 1867.'
              ],
              [
                'question' => 'What does "federalism" do?',
                'answer' => 'Allows different provinces to adopt policies tailored to their own populations',
                'explanation' => 'Federalism allows different provinces to adopt policies tailored to their own populations, and gives provinces the flexibility to experiment with new ideas and policies.'
              ],
              [
                'question' => 'Why is Terry Fox a Canadian national hero?',
                'answer' => 'He inspired people to contribute money for cancer research',
                'explanation' => 'In 1980, Terry Fox, a British Columbian who lost his right leg to cancer at the age of 18, began a cross-country run, the “Marathon of Hope,” to raise money for cancer research.'
              ],
              [
                'question' => 'What happens if the cabinet ministers are defeated in a non-confidence vote?',
                'answer' => 'They have to resign',
                'explanation' => 'If the government loses a confidence vote in the assembly it must resign.'
              ],
              [
                'question' => 'Who invented the snowmobile?',
                'answer' => 'Joseph-Armand Bombardier',
                'explanation' => 'Joseph-Armand Bombardier invented the snowmobile, a light-weight winter vehicle.'
              ],
              [
                'question' => 'What is the "House of Commons"?',
                'answer' => 'The representative chamber made up of members of Parliament',
                'explanation' => 'The House of Commons is the representative chamber, made up of members of Parliament elected by the people, traditionally every four years.'
              ],
              [
                'question' => 'How is the Lieutenant Governor chosen?',
                'answer' => 'Appointed by the Governor General on the advice of the Prime Minister',
                'explanation' => 'The Lieutenant Governor is appointed by the Governor General on the advice of the Prime Minister, also normally for five years.'
              ],
              [
                'question' => 'What form of government does Canada have?',
                'answer' => 'Constitutional Monarchy',
                'explanation' => 'Canada is a constitutional monarchy, a parliamentary democracy and a federal state. Canadians are bound together by a shared commitment to the rule of law and to the institutions of parliamentary government.'
              ],
              [
                'question' => 'What is the head of a province called?',
                'answer' => 'The Premier',
                'explanation' => 'In each province, the Premier has a role similar to that of the Prime Minister in the federal government, just as the Lieutenant Governor has a role similar to that of the Governor General.'
              ],
              [
                'question' => 'How often are members of Parliament elected?',
                'answer' => 'Four years',
                'explanation' => 'Members of Parliament are elected every four years to the House of Commons.'
              ],
              [
                'question' => 'What does it mean for the Cabinet Ministers to retain the "confidence of the House"?',
                'answer' => 'Cabinet ministers have to resign if they are defeated in a non-confidence vote',
                'explanation' => 'Cabinet ministers are responsible to the elected representatives, which means they must retain the “confidence of the House” and have to resign if they are defeated in a non-confidence vote.'
              ],
              [
                'question' => 'What are the responsibilities of the federal government?',
                'answer' => 'Matters of national and international concern',
                'explanation' => 'In our federal state, the federal government takes responsibility for matters of national and international concern.'
              ],
              [
                'question' => 'Where are the provincial and territorial laws passed?',
                'answer' => 'In the elected legislature',
                'explanation' => 'Each provincial and territorial government has an elected legislature where provincial and territorial laws are passed.'
              ],
              [
                'question' => 'What does it mean to retain the "confidence of the House"?',
                'answer' => 'Cabinet ministers are responsible to the elected representatives',
                'explanation' => 'Cabinet ministers are responsible to the elected representatives, which means they must retain the “confidence of the House” and have to resign if they are defeated in a non-confidence vote.'
              ],
              [
                'question' => 'Who considers and reviews proposals for new laws?',
                'answer' => 'The House of Commons and the Senate',
                'explanation' => 'Both the House of Commons and the Senate consider and review bills (proposals for new laws).'
              ],
              [
                'question' => 'To how many other Commonwealth nations is Canada linked?',
                'answer' => '53',
                'explanation' => 'As Head of the Commonwealth, the Sovereign links Canada to 53 other nations that cooperate to advance social, economic and cultural progress.'
              ],
              [
                'question' => 'How is the Governor General chosen?',
                'answer' => 'Appointed by the Sovereign on the advice of the Prime Minister',
                'explanation' => 'The Governor General is appointed by the Sovereign on the advice of the Prime Minister, usually for five years.'
              ],
              [
                'question' => 'Where are the Parliament buildings located?',
                'answer' => 'Ottawa',
                'explanation' => 'The Parliament Buildings are located in Ottawa, Ontario.'
              ],
              [
                'question' => 'What do you call the King’s or Queen’s representative in the provinces?',
                'answer' => 'Lieutenant Governor',
                'explanation' => 'The Sovereign is represented in Canada by the Governor General, who is appointed by the Sovereign on the advice of the Prime Minister, usually for five years. In each of the ten provinces, the Sovereign is represented by the Lieutenant Governor, who is appointed by the Governor General on the advice of the Prime Minister, also normally for five years.'
              ],
              [
                'question' => 'How many judges on the Supreme Court of Canada are appointed by the Governor General?',
                'answer' => 'Nine',
                'explanation' => 'The Court was originally composed of six judges. In 1927, the number of Supreme Court judges was raised to seven, and the Court reached its present total of nine members in 1949.'
              ],
              [
                'question' => 'How can a bill become a law in Canada?',
                'answer' => 'It is passed by both chambers and receives royal assent',
                'explanation' => 'No bill can become law in Canada until it has been passed by both chambers and has received royal assent, granted by the Governor General on behalf of the Sovereign.'
              ],
              [
                'question' => 'How are Senators appointed?',
                'answer' => 'By the Governor General on the advice of the Prime Minister',
                'explanation' => 'Senators are appointed by the Governor General on the advice of the Prime Minister and serve until age 75.'
              ],
              [
                'question' => 'Who selects the Cabinet Ministers?',
                'answer' => 'The Prime Minister',
                'explanation' => 'In the federal government, the Prime Minister selects the Cabinet ministers and is responsible for the operations and policy of the government.'
              ],
              [
                'question' => 'What does "federalism" mean?',
                'answer' => 'The different provinces can adopt policies tailored to their own populations',
                'explanation' => 'Federalism allows different provinces to adopt policies tailored to their own populations, and gives provinces the flexibility to experiment with new ideas and policies.'
              ],
              [
                'question' => 'For what is the Prime Minister of Canada responsible?',
                'answer' => 'The operations and policy of the government',
                'explanation' => 'In the federal government, the Prime Minister selects the Cabinet ministers and is responsible for the operations and policy of the government.'
              ],
              [
                'question' => 'In which Act are the responsibilities of the federal and provincial governments defined?',
                'answer' => 'The Constitution Act',
                'explanation' => 'The responsibilities of the federal and provincial governments were defined in 1867 in the British North America Act, now known as the Constitution Act, 1867.'
              ],
              [
                'question' => 'How many territories are there in Canada?',
                'answer' => 'Three',
                'explanation' => 'Canada has ten provinces and three territories. Each province and territory has its own capital city. You should know the capital of your province or territory as well as that of Canada.'
              ],
            ]
          ],
          [
            'image' => '/images/chap 8.png',
            'name' => 'Chapter 7',
            'title' => 'Federal Elections',
            'description' => 'Explore how federal elections are conducted in Canada. It is important to know voting procedures, political parties, and civic engagement.',
            'questions' => 20,
            'mistakes' => 5,
            'step' => 2,
            'tests' => [
              [
                'name' => 'Practice Test 7.1',
                'info' => 'Practice Test 7.1',
                'questions' =>
                [
                  [
                    'text' => 'When does a federal election have to be held under legislation passed by parliament?',
                    'answers' => [
                      ['text' => 'When the king wants to replace the prime minister'],
                      ['text' => 'Within 4 years of the most recent election'],
                      ['text' => 'Within 5 years of the last election'],
                      ['text' => 'The Prime Minister can call the election any time at his own will'],
                    ],
                    'correctAnswerId' => 1862,
                    'correct_answer' => 'B',
                    'explanation' => 'Under legislation passed by Parliament, federal elections must be held on the third Monday in October every four years following the most recent general election.'
                  ],
                  [
                    'text' => 'How can a party in power be defeated in Parliament?',
                    'answers' => [
                      ['text' => 'If there is a revolution'],
                      ['text' => 'If the king orders the party to resign'],
                      ['text' => 'If a majority of the MPS vote against a major government decision'],
                      ['text' => 'If a minority of the MPS vote against a major government decision'],
                    ],
                    'correctAnswerId' => 1867,
                    'correct_answer' => 'C',
                    'explanation' => 'If a majority of the members of the House of Commons vote against a major government decision, the party in power is defeated, which usually results in the Prime Minister asking the Governor General, on behalf of the Sovereign, to call an election.'
                  ],
                  [
                    'text' => 'How are members of parliament chosen?',
                    'answers' => [
                      ['text' => 'Elected by senators'],
                      ['text' => 'Elected by the prime minister'],
                      ['text' => 'Chosen by the king'],
                      ['text' => 'Elected by Canadian citizens'],
                    ],
                    'correctAnswerId' => 1872,
                    'correct_answer' => 'D',
                    'explanation' => 'The citizens in each electoral district elect one MP who sits in the House of Commons to represent them, as well as all Canadians.'
                  ],
                  [
                    'text' => 'What does the national register of electors contain?',
                    'answers' => [
                      ['text' => 'Database of landed immigrants'],
                      ['text' => 'Database of Canadian citizens at least 18 years of age who are qualified to vote in federal elections and referendums'],
                      ['text' => 'Database of all Canadian citizens'],
                      ['text' => 'Database of Canadian taxpayers'],
                    ],
                    'correctAnswerId' => 1874,
                    'correct_answer' => 'B',
                    'explanation' => 'The National Register of Electors contains a database of Canadian citizens at least 18 years of age who are qualified to vote in federal elections and referendums.'
                  ],
                  [
                    'text' => 'What do the initials MP stand for in Canadian politics?',
                    'answers' => [
                      ['text' => 'Member of Parliament'],
                      ['text' => 'Minister of Parliament'],
                      ['text' => 'Member of the Patriots'],
                      ['text' => 'Master of the province'],
                    ],
                    'correctAnswerId' => 1877,
                    'correct_answer' => 'A',
                    'explanation' => 'Members of the House of Commons are also known as members of Parliament or MPs.'
                  ],
                  [
                    'text' => 'What should you do if you do not receive a voter information card before an election?',
                    'answers' => [
                      ['text' => 'Call your local municipality'],
                      ['text' => 'Turn up at your nearest polling station on Election Day'],
                      ['text' => 'You should assume you were not chosen to vote'],
                      ['text' => 'Contact Elections Canada'],
                    ],
                    'correctAnswerId' => 1884,
                    'correct_answer' => 'D',
                    'explanation' => 'If you don’t receive a voter information card, call your local elections office to ensure that you are on the voter’s list. If you do not have the number, call Elections Canada, in Ottawa, at 1-800-463-6868.'
                  ],
                  [
                    'text' => 'What are the parties that are not in power called?',
                    'answers' => [
                      ['text' => 'Tea parties'],
                      ['text' => 'Opposition parties'],
                      ['text' => 'Rival parties'],
                      ['text' => 'Opponents parties'],
                    ],
                    'correctAnswerId' => 1886,
                    'correct_answer' => 'B',
                    'explanation' => 'The other parties that are not in power are known as opposition parties.'
                  ],
                  [
                    'text' => 'What is a polling station?',
                    'answers' => [
                      ['text' => 'Place where you vote'],
                      ['text' => 'Campaign offices for candidates'],
                      ['text' => 'Place where the number of votes is counted'],
                      ['text' => 'Member of parliament\'s constituency'],
                    ],
                    'correctAnswerId' => 1889,
                    'correct_answer' => 'A',
                    'explanation' => 'A polling station is the place where you go to vote either on election day or at advance polls.'
                  ],
                  [
                    'text' => 'What is a Cabinet Minister?',
                    'answers' => [
                      ['text' => 'Candidate picked by the prime minister'],
                      ['text' => 'MP picked by the premier of each province'],
                      ['text' => 'MP selected by the Prime Minister to run Federal departments'],
                      ['text' => 'MP selected by the king to make laws'],
                    ],
                    'correctAnswerId' => 1895,
                    'correct_answer' => 'C',
                    'explanation' => 'The Prime Minister chooses the ministers of the Crown, most of them from among members of the House of Commons. Cabinet ministers are responsible for running the federal government departments.'
                  ],
                  [
                    'text' => 'Which of the following is a non-Canadian not allowed to do?',
                    'answers' => [
                      ['text' => 'Leave the country at will'],
                      ['text' => 'Contact his or her MP'],
                      ['text' => 'Take the Canada citizenship test'],
                      ['text' => 'Vote in federal and provincial election'],
                    ],
                    'correctAnswerId' => 1900,
                    'correct_answer' => 'D',
                    'explanation' => 'One of the privileges of Canadian citizenship is the right to vote.'
                  ],
                  [
                    'text' => 'Who can ask you about whom you voted for?',
                    'answers' => [
                      ['text' => 'No one'],
                      ['text' => 'Any other Canadian'],
                      ['text' => 'Your local MP'],
                      ['text' => 'The prime minister'],
                    ],
                    'correctAnswerId' => 1901,
                    'correct_answer' => 'A',
                    'explanation' => 'Canadian law ensures the right to a secret ballot, meaning no one can ask you about whom you voted for.'
                  ],
                  [
                    'text' => 'What happens when the federal government loses a confidence vote?',
                    'answers' => [
                      ['text' => 'An election is called'],
                      ['text' => 'The official opposition party takes power'],
                      ['text' => 'The Prime Minister loses his job'],
                      ['text' => 'The prime minister is no longer the leader of his party'],
                    ],
                    'correctAnswerId' => 1905,
                    'correct_answer' => 'A',
                    'explanation' => 'If a majority of the members of the House of Commons vote against a major government decision, the party in power is defeated, which usually results in the Prime Minister asking the Governor General, on behalf of the Sovereign, to call an election.'
                  ],
                  [
                    'text' => 'How is the prime minister chosen?',
                    'answers' => [
                      ['text' => 'The MPs vote on the prime minister'],
                      ['text' => 'The Governor General with the Senators appoint the Prime Minister'],
                      ['text' => 'The king appoints the Prime Minister'],
                      ['text' => 'The leader of the party with the most elected Member of Parliament'],
                    ],
                    'correctAnswerId' => 1912,
                    'correct_answer' => 'D',
                    'explanation' => 'Ordinarily, after an election, the leader of the political party with the most seats in the House of Commons is invited by the Governor General to form the government. After being appointed by the Governor General, the leader of this party becomes the Prime Minister.'
                  ],
                  [
                    'text' => 'What are the main functions of the cabinet?',
                    'answers' => [
                      ['text' => 'Natural resources'],
                      ['text' => 'Navigation'],
                      ['text' => 'To prepare the budget and propose new laws to be implemented'],
                      ['text' => 'Defence'],
                    ],
                    'correctAnswerId' => 1915,
                    'correct_answer' => 'C',
                    'explanation' => 'The Prime Minister and the Cabinet ministers are responsible for making important decisions about how the country is governed. They prepare the budget and propose most new laws.'
                  ],
                  [
                    'text' => 'A Member of Parliament from Montreal announces that she will spend her weekend in her electoral District. This means she would be:',
                    'answers' => [
                      ['text' => 'In her office on Parliament Hill'],
                      ['text' => 'In some part of Montreal where she was elected'],
                      ['text' => 'Visiting the province of Quebec'],
                      ['text' => 'Going on a vacation'],
                    ],
                    'correctAnswerId' => 1918,
                    'correct_answer' => 'B',
                    'explanation' => 'An electoral district is a geographical area represented by a member of Parliament (MP).'
                  ],
                  [
                    'text' => 'How is the government formed after a federal election?',
                    'answers' => [
                      ['text' => 'Each province elects one representative to form the government. The king then chooses the prime minister'],
                      ['text' => 'The governor-general picks a party and a prime minister to run the government'],
                      ['text' => 'The party with the most elected representatives becomes the party in power. The leader of this party becomes the Prime Minister'],
                      ['text' => 'The party with the most elected representatives becomes the party in power. The king chooses the Prime Minister from this party'],
                    ],
                    'correctAnswerId' => 1923,
                    'correct_answer' => 'C',
                    'explanation' => 'Ordinarily, after an election, the leader of the political party with the most seats in the House of Commons is invited by the Governor General to form the government. After being appointed by the Governor General, the leader of this party becomes the Prime Minister.'
                  ],
                  [
                    'text' => 'What are the Prime minister and Cabinet Ministers together called?',
                    'answers' => [
                      ['text' => 'The government'],
                      ['text' => 'The cabinet'],
                      ['text' => 'The House of Commons'],
                      ['text' => 'The Senate'],
                    ],
                    'correctAnswerId' => 1926,
                    'correct_answer' => 'B',
                    'explanation' => 'The Prime Minister and the Cabinet ministers are collectively referred to as the Cabinet, responsible for making important decisions about how the country is governed.'
                  ],
                  [
                    'text' => 'Which party becomes the official opposition?',
                    'answers' => [
                      ['text' => 'The party the Prime Minister selects'],
                      ['text' => 'The party with the least votes'],
                      ['text' => 'The party with the second most votes'],
                      ['text' => 'Any independent candidate'],
                    ],
                    'correctAnswerId' => 1931,
                    'correct_answer' => 'C',
                    'explanation' => 'The other parties that are not in power are known as opposition parties. The opposition party with the most members of the House of Commons is the official Opposition or Her Majesty’s Loyal Opposition.'
                  ],
                  [
                    'text' => 'Who do members of parliament represent?',
                    'answers' => [
                      ['text' => 'Everyone who lives in his or her electoral District'],
                      ['text' => 'Everyone who lives in his or her neighborhood'],
                      ['text' => 'Everyone who lives in his or her province'],
                      ['text' => 'Everyone in Northern Canada'],
                    ],
                    'correctAnswerId' => 1933,
                    'correct_answer' => 'A',
                    'explanation' => 'An electoral district is a geographical area represented by a member of Parliament (MP). MPs represent everyone who lives in their electoral district.'
                  ],
                  [
                    'text' => 'What is the role of the opposition parties?',
                    'answers' => [
                      ['text' => 'To ensure reports about the current government are sent to the king'],
                      ['text' => 'To supervise the government'],
                      ['text' => 'To oppose or try to improve government proposals'],
                      ['text' => 'To regulate government proposals'],
                    ],
                    'correctAnswerId' => 1339,
                    'correct_answer' => 'C',
                    'explanation' => 'The role of opposition parties is to peacefully oppose or try to improve government proposals.'
                  ],
                ]
              ],
              [
                'name' => 'Practice Test 7.2',
                'info' => 'Practice Test 7.2',
                'questions' =>
                [
                  [
                    'text' => 'What is the head of the city called?',
                    'answers' => [
                      ['text' => 'Mayor'],
                      ['text' => 'Counselor'],
                      ['text' => 'Alderman'],
                      ['text' => 'Premier'],
                    ],
                    'correctAnswerId' => 1941,
                    'correct_answer' => 'A',
                    'explanation' => 'Local or municipal government typically includes a council with a mayor (or reeve) and councilors or aldermen who pass local laws called “by-laws”.'
                  ],
                  [
                    'text' => 'What is written on an election ballot?',
                    'answers' => [
                      ['text' => 'The names of the candidates in your election District'],
                      ['text' => 'Who you should vote for'],
                      ['text' => 'The date and time you are allowed to vote'],
                      ['text' => 'Where you should vote'],
                    ],
                    'correctAnswerId' => 1945,
                    'correct_answer' => 'A',
                    'explanation' => 'The election ballot lists the names of the candidates running in your electoral district.'
                  ],
                  [
                    'text' => 'What does it mean for a political party to “be in power”?',
                    'answers' => [
                      ['text' => 'To gain the approval of the queen or King'],
                      ['text' => 'To have the most elected representatives'],
                      ['text' => 'To generate electricity'],
                      ['text' => 'To hold the nuclear button'],
                    ],
                    'correctAnswerId' => 1950,
                    'correct_answer' => 'B',
                    'explanation' => 'A political party is considered “in power” if it has the most elected representatives in the legislative body (e.g., House of Commons).'
                  ],
                  [
                    'text' => 'What is the voting procedure in Canada?',
                    'answers' => [
                      ['text' => 'Whichever way you like'],
                      ['text' => 'Be online'],
                      ['text' => 'Secret ballot'],
                      ['text' => 'Open ballot'],
                    ],
                    'correctAnswerId' => 1955,
                    'correct_answer' => 'C',
                    'explanation' => 'Voting in Canada is done by secret ballot, ensuring the privacy and secrecy of each voter’s choice.'
                  ],
                  [
                    'text' => 'Municipal government is responsible for which of the following?',
                    'answers' => [
                      ['text' => 'Natural resources'],
                      ['text' => 'Currency'],
                      ['text' => 'Garbage removal'],
                      ['text' => 'Highways'],
                    ],
                    'correctAnswerId' => 1959,
                    'correct_answer' => 'C',
                    'explanation' => 'Municipalities are responsible for local services such as garbage removal, street cleaning, and local planning.'
                  ],
                  [
                    'text' => 'What do we need to bring with us for voting?',
                    'answers' => [
                      ['text' => 'Voter information card and voter\'s identity and address proof'],
                      ['text' => 'Credit card'],
                      ['text' => 'Ballot paper'],
                      ['text' => 'None of these'],
                    ],
                    'correctAnswerId' => 1961,
                    'correct_answer' => 'A',
                    'explanation' => 'On voting day, bring your voter information card and proof of identity and address to your polling station.'
                  ],
                  [
                    'text' => 'What is a voter information card?',
                    'answers' => [
                      ['text' => 'A list that tells you who the candidates are in your electoral District'],
                      ['text' => 'A letter that lets you know the voting schedule'],
                      ['text' => 'A form that tells you where and when to vote'],
                      ['text' => 'A card to let you register for voting'],
                    ],
                    'correctAnswerId' => 1967,
                    'correct_answer' => 'C',
                    'explanation' => 'A voter information card informs you of your polling station location, voting date, and other election details.'
                  ],
                  [
                    'text' => 'What does the Register of Electors contain?',
                    'answers' => [
                      ['text' => 'A list of all Canadian citizens who are qualified to vote in federal elections and referendums'],
                      ['text' => 'A list of people who are willing to vote in elections and referendums'],
                      ['text' => 'A list of people who voted for the opposition party in the previous election'],
                      ['text' => 'A list of people who are not allowed to vote'],
                    ],
                    'correctAnswerId' => 1969,
                    'correct_answer' => 'A',
                    'explanation' => 'The Register of Electors is a database of Canadian citizens who are eligible to vote in federal elections and referendums.'
                  ],
                  [
                    'text' => 'What is the minimum age for voting in federal, provincial, Territorial, and Municipal elections?',
                    'answers' => [
                      ['text' => '18'],
                      ['text' => '19'],
                      ['text' => '21'],
                      ['text' => '16'],
                    ],
                    'correctAnswerId' => 1973,
                    'correct_answer' => 'A',
                    'explanation' => 'The minimum voting age for federal, provincial, territorial, and municipal elections in Canada is 18 years old.'
                  ],
                  [
                    'text' => 'What is a minority government?',
                    'answers' => [
                      ['text' => 'The party in power holds less than half of the seats in the House of Commons and the Senate'],
                      ['text' => 'The party in power holds less than half of the seats in the House of Commons'],
                      ['text' => 'The party in power holds at least half of the seats in the House of Commons'],
                      ['text' => 'The party in power holds at least half of the seats in the Senate'],
                    ],
                    'correctAnswerId' => 1978,
                    'correct_answer' => 'B',
                    'explanation' => 'A minority government occurs when the party in power does not have a majority of seats in the House of Commons.'
                  ],
                  [
                    'text' => 'You can vote in advance if:',
                    'answers' => [
                      ['text' => 'You are elderly'],
                      ['text' => 'You know you will not be able to vote on Election Day'],
                      ['text' => 'Sick and physically disabled'],
                      ['text' => 'All of the above'],
                    ],
                    'correctAnswerId' => 1984,
                    'correct_answer' => 'D',
                    'explanation' => 'Advanced voting is available for those who are elderly, unable to vote on Election Day, or sick and physically disabled.'
                  ],
                  [
                    'text' => 'What do you mark on a federal election ballot?',
                    'answers' => [
                      ['text' => 'A check mark'],
                      ['text' => 'An X'],
                      ['text' => 'A sticker'],
                      ['text' => 'A thumbprint'],
                    ],
                    'correctAnswerId' => 1986,
                    'correct_answer' => 'B',
                    'explanation' => 'On a federal election ballot, you mark an “X” next to the name of the candidate you wish to vote for.'
                  ],
                  [
                    'text' => 'What is a majority government?',
                    'answers' => [
                      ['text' => 'The party in power holds at least half of the seats in the House of Commons and the Senate'],
                      ['text' => 'The party in power holds at least half of the seats in the House of Commons'],
                      ['text' => 'The party in power holds less than half of the seats in the House of Commons'],
                      ['text' => 'The party in power holds at least half of the seats in the Senate'],
                    ],
                    'correctAnswerId' => 1990,
                    'correct_answer' => 'B',
                    'explanation' => 'A majority government exists when the party in power holds more than half of the seats in the House of Commons.'
                  ],
                  [
                    'text' => 'Name three requirements you must meet in order to vote in a federal election?',
                    'answers' => [
                      ['text' => 'Canadian citizen at least 21 years old and on the list of electors'],
                      ['text' => 'Canadian citizen at least 18 years old and on the voters list'],
                      ['text' => 'Working for the government at least 21 years old and Canadian citizen'],
                      ['text' => 'Canadian citizen at least 16 years old and on the list of Voters'],
                    ],
                    'correctAnswerId' => 1994,
                    'correct_answer' => 'B',
                    'explanation' => 'To vote in a federal election in Canada, you must be a Canadian citizen who is at least 18 years old and listed on the voters’ list.'
                  ],
                  [
                    'text' => 'Who have major responsibilities on First Nations Reserves?',
                    'answers' => [
                      ['text' => 'Band Chiefs and councillors'],
                      ['text' => 'Municipal governments'],
                      ['text' => 'Provincial and territorial governments'],
                      ['text' => 'Federal government'],
                    ],
                    'correctAnswerId' => 1997,
                    'correct_answer' => 'A',
                    'explanation' => 'On First Nations reserves, Band Chiefs and councillors hold significant responsibilities, including governance and service provision.'
                  ],
                  [
                    'text' => 'Which of the following are the responsibilities of local government?',
                    'answers' => [
                      ['text' => 'Education, foreign policy and transportation'],
                      ['text' => 'Healthcare, natural resources and transportation'],
                      ['text' => 'National Defence, health care and transportation'],
                      ['text' => 'Social and Community Health, snow removal and transportation'],
                    ],
                    'correctAnswerId' => 2004,
                    'correct_answer' => 'D',
                    'explanation' => 'Local governments typically handle local services such as social and community health, snow removal, transportation, and more.'
                  ],
                  [
                    'text' => 'What does the “right to a secret ballot” mean?',
                    'answers' => [
                      ['text' => 'No one can watch you vote except the election officer'],
                      ['text' => 'The voter should not tell anyone for whom he or she voted'],
                      ['text' => 'Only the candidate you vote for can watch your marked ballot'],
                      ['text' => 'No one can watch you vote or look at your marked ballot'],
                    ],
                    'correctAnswerId' => 2008,
                    'correct_answer' => 'D',
                    'explanation' => 'The right to a secret ballot means that no one can watch you vote or inspect your marked ballot according to Canadian law.'
                  ],
                  [
                    'text' => 'Who has the right to run as a candidate in federal elections?',
                    'answers' => [
                      ['text' => 'Any man who is at least 18 years or older'],
                      ['text' => 'Any Canadian citizen who is at least 18 years old'],
                      ['text' => 'Canadian citizens and landed immigrants'],
                      ['text' => 'A Canadian citizen who is 16 years or older'],
                    ],
                    'correctAnswerId' => 2010,
                    'correct_answer' => 'B',
                    'explanation' => 'Canadian citizens who are at least 18 years old have the right to run as candidates in federal elections.'
                  ],
                  [
                    'text' => 'Federal elections are carried out to elect which of the following?',
                    'answers' => [
                      ['text' => 'Premier'],
                      ['text' => 'Prime Minister'],
                      ['text' => 'Member of Parliament'],
                      ['text' => 'Senator'],
                    ],
                    'correctAnswerId' => 2015,
                    'correct_answer' => 'C',
                    'explanation' => 'Federal elections in Canada are held to elect Members of Parliament (MPs) who represent their electoral districts in the House of Commons.'
                  ],
                  [
                    'text' => 'Who represents an electoral District?',
                    'answers' => [
                      ['text' => 'The commissioner'],
                      ['text' => 'The governor general'],
                      ['text' => 'The Lieutenant Governor'],
                      ['text' => 'The Member of Parliament'],
                    ],
                    'correctAnswerId' => 2020,
                    'correct_answer' => 'D',
                    'explanation' => 'An electoral district is represented by a Member of Parliament (MP) who is elected to represent the district in the House of Commons.'
                  ],
                ]


              ],
              [
                'name' => 'Practice Test 7.3',
                'info' => 'Practice Test 7.3',
                'questions' =>
                [
                  [
                    'text' => 'What information can be found on a voter information card?',
                    'answers' => [
                      ['text' => 'Confirms that your name is on the voters list'],
                      ['text' => 'States when you vote'],
                      ['text' => 'States where you vote'],
                      ['text' => 'All of the above'],
                    ],
                    'correctAnswerId' => 2024,
                    'correct_answer' => 'D',
                    'explanation' => 'A voter information card includes confirmation of your voter registration, the date and location of your polling station, and contact information for special services if needed.'
                  ],
                  [
                    'text' => 'What are the members of the House of Commons also known as?',
                    'answers' => [
                      ['text' => 'Commissioners'],
                      ['text' => 'Members of parliament or MPs'],
                      ['text' => 'Members of the provincial Parliament (MPPs)'],
                      ['text' => 'None of these'],
                    ],
                    'correctAnswerId' => 2026,
                    'correct_answer' => 'B',
                    'explanation' => 'Members of the House of Commons are commonly referred to as Members of Parliament (MPs) in Canada.'
                  ],
                  [
                    'text' => 'When asked who must you tell who you voted for in a federal election?',
                    'answers' => [
                      ['text' => 'A police officer'],
                      ['text' => 'Your employer'],
                      ['text' => 'An Elections Canada official'],
                      ['text' => 'No one'],
                    ],
                    'correctAnswerId' => 2032,
                    'correct_answer' => 'D',
                    'explanation' => 'Canadian law ensures the right to a secret ballot, meaning no one has the right to demand to know how you voted.'
                  ],
                  [
                    'text' => 'If you are unable to vote on Election Day how do you vote?',
                    'answers' => [
                      ['text' => 'Vote at Advance polls'],
                      ['text' => 'Forget it'],
                      ['text' => 'Vote the next day after election'],
                      ['text' => 'Vote a week later'],
                    ],
                    'correctAnswerId' => 2036,
                    'correct_answer' => 'A',
                    'explanation' => 'If you cannot vote on Election Day, you can vote in advance at designated advance polling stations.'
                  ],
                  [
                    'text' => 'What does a member of Parliament do?',
                    'answers' => [
                      ['text' => 'He or she links Canadians to the federal government'],
                      ['text' => 'He or she represents the king'],
                      ['text' => 'He or she works for the Governor General'],
                      ['text' => 'He or she liaises with the municipal government'],
                    ],
                    'correctAnswerId' => 2037,
                    'correct_answer' => 'A',
                    'explanation' => 'Members of Parliament (MPs) represent their constituents in the federal government, serving as a link between citizens and the government.'
                  ],
                  [
                    'text' => 'How many votes can a voter have in a federal election?',
                    'answers' => [
                      ['text' => 'It does not matter'],
                      ['text' => 'Three'],
                      ['text' => 'One'],
                      ['text' => 'Two'],
                    ],
                    'correctAnswerId' => 2043,
                    'correct_answer' => 'C',
                    'explanation' => 'In a federal election in Canada, each voter has the right to cast one vote for a candidate in their electoral district.'
                  ],
                  [
                    'text' => 'Where do you go to vote?',
                    'answers' => [
                      ['text' => 'Polling station'],
                      ['text' => 'City Hall'],
                      ['text' => 'Police station'],
                      ['text' => 'Fire station'],
                    ],
                    'correctAnswerId' => 2045,
                    'correct_answer' => 'A',
                    'explanation' => 'To vote in a federal election, you go to your designated polling station, which is listed on your voter information card.'
                  ],
                  [
                    'text' => 'When you vote on Election Day, what do you do?',
                    'answers' => [
                      ['text' => 'Go to the voting station, tell them who you are and Mark your X. Give the ballot back to the attendant.'],
                      ['text' => 'Go to the voting station, remove 1 ballot and after marking your X and deposit it in the Ballot Box.'],
                      ['text' => 'Go to the voting station, take your voter’s card with proof of identity, highlight your choice on the ballot and deposit it in the Box'],
                      ['text' => 'Go to the voting station, take your voter information card and ID, mark an X next to your chosen candidate, fold the ballot and present it to the poll officials who will tear off the ballot number and give you the ballot to deposit in the Box'],
                    ],
                    'correctAnswerId' => 2052,
                    'correct_answer' => 'D',
                    'explanation' => 'On Election Day, after identifying yourself and marking your ballot, you fold it and hand it to the poll officials who will prepare it for the ballot box.'
                  ],
                  [
                    'text' => 'Which of the following criterion gives a Canadian the right to vote?',
                    'answers' => [
                      ['text' => 'Owning a house'],
                      ['text' => 'Being on an official voters’ list'],
                      ['text' => 'Having a driver\'s license'],
                      ['text' => 'Being an immigrant'],
                    ],
                    'correctAnswerId' => 2054,
                    'correct_answer' => 'B',
                    'explanation' => 'Canadian citizens who are on the official voters’ list are eligible to vote in federal elections in Canada.'
                  ],
                  [
                    'text' => 'What is written on an election ballot?',
                    'answers' => [
                      ['text' => 'The names of the candidates in your election District'],
                      ['text' => 'Who you should vote for?'],
                      ['text' => 'The date and time you are allowed to vote'],
                      ['text' => 'Where you should vote'],
                    ],
                    'correctAnswerId' => 2057,
                    'correct_answer' => 'A',
                    'explanation' => 'An election ballot lists the names of candidates running for election in your electoral district.'
                  ],
                  [
                    'text' => 'When must Federal elections be held?',
                    'answers' => [
                      ['text' => 'Whenever the Prime Minister calls the election'],
                      ['text' => 'About every 4 years'],
                      ['text' => 'When the MPs want a new Prime Minister'],
                      ['text' => 'On the third Monday in October every four years following the most recent general election'],
                    ],
                    'correctAnswerId' => 2064,
                    'correct_answer' => 'D',
                    'explanation' => 'Federal elections in Canada are mandated by legislation to be held on the third Monday in October every four years following the most recent general election. (P30)'
                  ],
                  [
                    'text' => 'Who do Canadians vote for in a federal election?',
                    'answers' => [
                      ['text' => 'A candidate whom they want to represent them in Parliament'],
                      ['text' => 'All candidates in their electoral District'],
                      ['text' => 'The best speaker running the election campaign'],
                      ['text' => 'Someone to become the premier of the Province'],
                    ],
                    'correctAnswerId' => 2065,
                    'correct_answer' => 'A',
                    'explanation' => 'In a federal election, Canadians vote for a candidate they want to represent them in Parliament. Each electoral district elects one Member of Parliament (MP) to the House of Commons. (P30)'
                  ],
                  [
                    'text' => 'What is an “electoral District”?',
                    'answers' => [
                      ['text' => 'A geographical area where the politicians reside'],
                      ['text' => 'An area where politicians work'],
                      ['text' => 'A geographical area represented by a member of the House of Commons'],
                      ['text' => 'The area where voting takes place in your locality'],
                    ],
                    'correctAnswerId' => 2071,
                    'correct_answer' => 'C',
                    'explanation' => 'An electoral district in Canada is a specific geographical area represented by one Member of Parliament (MP) in the House of Commons. (P30)'
                  ],
                  [
                    'text' => 'Who has the right to run as a candidate in federal elections?',
                    'answers' => [
                      ['text' => 'Canadian citizens who are 16 years or older'],
                      ['text' => 'Canadian citizens and landed immigrants'],
                      ['text' => 'Canadian citizens who are 18 years old or older'],
                      ['text' => 'Canadian citizens'],
                    ],
                    'correctAnswerId' => 2075,
                    'correct_answer' => 'C',
                    'explanation' => 'Canadian citizens who are 18 years old or older have the right to run as candidates in federal elections. (P30)'
                  ],
                  [
                    'text' => 'What forms the Cabinet?',
                    'answers' => [
                      ['text' => 'The Prime Minister and the Senators'],
                      ['text' => 'The Senate and the House of Commons'],
                      ['text' => 'The Prime Minister and the Cabinet ministers'],
                      ['text' => 'The Prime Minister and the House of Commons'],
                    ],
                    'correctAnswerId' => 2079,
                    'correct_answer' => 'C',
                    'explanation' => 'The Cabinet in Canada consists of the Prime Minister and Cabinet ministers, who are appointed by the Prime Minister and are responsible for making significant governmental decisions. (P30)'
                  ],
                  [
                    'text' => 'What is the name of the parties that are not in power?',
                    'answers' => [
                      ['text' => 'Powerless parties'],
                      ['text' => 'Outside parties'],
                      ['text' => 'Side parties'],
                      ['text' => 'Opposition parties'],
                    ],
                    'correctAnswerId' => 2084,
                    'correct_answer' => 'D',
                    'explanation' => 'Opposition parties in Canada are those political parties that are not in power. The largest opposition party is known as the Official Opposition. (P30)'
                  ],
                  [
                    'text' => 'What is a majority government?',
                    'answers' => [
                      ['text' => 'The party in power that holds less than half of the seats in the House of Commons'],
                      ['text' => 'The party in power that holds at least half of the seats in the Senate'],
                      ['text' => 'The party in power that holds at least half of the seats in the Senate and the House of Commons'],
                      ['text' => 'The party in power that holds at least half of the seats in the House of Commons'],
                    ],
                    'correctAnswerId' => 2088,
                    'correct_answer' => 'D',
                    'explanation' => 'A majority government in Canada refers to the situation where the party in power holds more than half of the seats in the House of Commons, allowing it to pass legislation without relying on support from other parties. (P31)'
                  ],
                  [
                    'text' => 'What happens if you cannot or do not wish to vote on election day?',
                    'answers' => [
                      ['text' => 'You can vote by special ballot only'],
                      ['text' => 'You can vote at the advance polls only'],
                      ['text' => 'You cannot vote at all'],
                      ['text' => 'You can vote at the advance polls or by special ballot'],
                    ],
                    'correctAnswerId' => 2092,
                    'correct_answer' => 'D',
                    'explanation' => 'If you are unable or choose not to vote on election day in Canada, you have the option to vote at advance polls or by special ballot. These options are provided to ensure accessibility for all eligible voters. (P32)'
                  ],
                  [
                    'text' => 'Who does a member of Parliament represent?',
                    'answers' => [
                      ['text' => 'The Provincial Courts'],
                      ['text' => 'Only the citizens in his/her electoral district'],
                      ['text' => 'The citizens in his/her electoral district, as well as all Canadians'],
                      ['text' => 'The Provincial and Territorial governments'],
                    ],
                    'correctAnswerId' => 2095,
                    'correct_answer' => 'C',
                    'explanation' => 'A member of Parliament (MP) in Canada represents the citizens of their electoral district in the House of Commons. MPs are elected to represent their constituents and to work on behalf of all Canadians. (P30)'
                  ],
                  [
                    'text' => 'What is the former name of the Constitution Act?',
                    'answers' => [
                      ['text' => 'The British North American Act'],
                      ['text' => 'The British Act'],
                      ['text' => 'The Federal Act'],
                      ['text' => 'The French North American Act'],
                    ],
                    'correctAnswerId' => 2097,
                    'correct_answer' => 'A',
                    'explanation' => 'The Constitution Act, 1867, was originally known as the British North America Act, 1867. This legislation established the framework of governance for Canada and defined the division of powers between the federal and provincial governments. (P34)'
                  ],
                ]
              ],

              [
                'name' => 'Practice Test 7.4',
                'info' => 'Practice Test 7.4',
                'questions' =>
                [
                  [
                    'text' => 'Which of the following is not a responsibility of a territorial or provincial elected official?',
                    'answers' => [
                      ['text' => 'Natural Resources'],
                      ['text' => 'Property and Civil Rights'],
                      ['text' => 'Highways'],
                      ['text' => 'Foreign Policy'],
                    ],
                    'correctAnswerId' => 2104,
                    'correct_answer' => 'D',
                    'explanation' => 'In Canada, the federal government is responsible for matters of national and international concern, including foreign policy. Provincial and territorial governments handle areas like natural resources, property and civil rights, and highways.'
                  ],
                  [
                    'text' => 'In Canadian politics, what does an MP stand for?',
                    'answers' => [
                      ['text' => 'Member of Police'],
                      ['text' => 'Municipal Politician'],
                      ['text' => 'Main Parliament'],
                      ['text' => 'Member of Parliament'],
                    ],
                    'correctAnswerId' => 2108,
                    'correct_answer' => 'D',
                    'explanation' => 'An MP stands for Member of Parliament. Each electoral district in Canada elects one MP to represent them in the federal House of Commons.'
                  ],
                  [
                    'text' => 'On election day, what should you bring to the polling station?',
                    'answers' => [
                      ['text' => 'The voter information card and proof of your identity and address'],
                      ['text' => 'A piece of identification'],
                      ['text' => 'Nothing'],
                      ['text' => 'The voter information card'],
                    ],
                    'correctAnswerId' => 2109,
                    'correct_answer' => 'A',
                    'explanation' => 'To vote on election day in Canada, you should bring your voter information card and proof of your identity and address.'
                  ],
                  [
                    'text' => 'On election day, what happens when the polls close?',
                    'answers' => [
                      ['text' => 'Every ballot is counted and the results are made public'],
                      ['text' => 'Every ballot is counted and the results are kept secret for 48 hours'],
                      ['text' => 'No ballot gets counted for 24 hours'],
                      ['text' => 'No ballot gets counted for 48 hours'],
                    ],
                    'correctAnswerId' => 2113,
                    'correct_answer' => 'A',
                    'explanation' => 'When the polls close on election day in Canada, every ballot is counted and the results are made public. The results can be viewed on television or on the Elections Canada website.'
                  ],
                  [
                    'text' => 'In Canadian politics, what does MHA stand for?',
                    'answers' => [
                      ['text' => 'Members of the High Assembly'],
                      ['text' => 'Municipal House Assembly'],
                      ['text' => 'Members of the House of Assembly'],
                      ['text' => 'Members of the Honourable Assembly'],
                    ],
                    'correctAnswerId' => 2119,
                    'correct_answer' => 'C',
                    'explanation' => 'MHA stands for Members of the House of Assembly. This term is used in some provinces in Canada to refer to elected provincial representatives.'
                  ],
                  [
                    'text' => 'How does Canada’s Head of State reign?',
                    'answers' => [
                      ['text' => 'In accordance with the Constitution: the rule of law'],
                      ['text' => 'By directly governing the country'],
                      ['text' => 'By making decisions alone'],
                      ['text' => 'In accordance with the British Constitution only'],
                    ],
                    'correctAnswerId' => 2121,
                    'correct_answer' => 'A',
                    'explanation' => 'As a constitutional monarchy, Canada’s Head of State (the King or Queen) reigns in accordance with the Constitution, which upholds the rule of law.'
                  ],
                  [
                    'text' => 'How are members of Parliament chosen?',
                    'answers' => [
                      ['text' => 'They are elected by voters in their local constituency'],
                      ['text' => 'They are chosen by the provincial Premiers'],
                      ['text' => 'They are elected by landowners and police chiefs'],
                      ['text' => 'They are appointed by the United Nations'],
                    ],
                    'correctAnswerId' => 2125,
                    'correct_answer' => 'A',
                    'explanation' => 'Members of Parliament (MPs) in Canada are elected by voters in their respective electoral districts (constituencies) to represent them in the federal House of Commons.'
                  ],
                  [
                    'text' => 'During an election period, what happens if you do not receive a voter information card?',
                    'answers' => [
                      ['text' => 'You have to call your local elections office, or Elections Canada in Ottawa, to ensure that you are on the voters\' list'],
                      ['text' => 'You have to call the House of Commons in Ottawa to ensure that you are on the voters\' list'],
                      ['text' => 'You can only vote online'],
                      ['text' => 'You cannot vote'],
                    ],
                    'correctAnswerId' => 2129,
                    'correct_answer' => 'A',
                    'explanation' => 'If you do not receive a voter information card during an election period in Canada, you should contact your local elections office or Elections Canada in Ottawa to ensure that you are on the voters\' list.'
                  ],
                  [
                    'text' => 'What is an electoral district?',
                    'answers' => [
                      ['text' => 'The government office in which you register for voting'],
                      ['text' => 'The area in which elections are held'],
                      ['text' => 'A geographical area represented by a member of Parliament'],
                      ['text' => 'The building in which the voting poll is located'],
                    ],
                    'correctAnswerId' => 2135,
                    'correct_answer' => 'C',
                    'explanation' => 'An electoral district in Canada is a specific geographical area represented by one Member of Parliament (MP) in the federal House of Commons.'
                  ],
                  [
                    'text' => 'When were the responsibilities of the federal and provincial governments defined?',
                    'answers' => [
                      ['text' => '1767'],
                      ['text' => '1849'],
                      ['text' => '1867'],
                      ['text' => '1749'],
                    ],
                    'correctAnswerId' => 2139,
                    'correct_answer' => 'C',
                    'explanation' => 'The responsibilities of the federal and provincial governments in Canada were defined in 1867 in the British North America Act, which is now known as the Constitution Act, 1867.'
                  ],
                  [
                    'text' => 'What are the responsibilities of the Cabinet?',
                    'answers' => [
                      ['text' => 'Natural Resources'],
                      ['text' => 'International matters'],
                      ['text' => 'Prepare the budget and propose most new laws'],
                      ['text' => 'Education'],
                    ],
                    'correctAnswerId' => 2141,
                    'correct_answer' => 'C',
                    'explanation' => 'In Canada, the Cabinet is responsible for preparing the budget and proposing most new laws. Cabinet decisions can be questioned by all members of the House of Commons.'
                  ],
                  [
                    'text' => 'What do the initials "MP" stand for in Canadian politics?',
                    'answers' => [
                      ['text' => 'Ministers of Parliaments'],
                      ['text' => 'Masters of Parliament'],
                      ['text' => 'Member of Politics'],
                      ['text' => 'Member of Parliament'],
                    ],
                    'correctAnswerId' => 2148,
                    'correct_answer' => 'D',
                    'explanation' => 'MP stands for Member of Parliament in Canadian politics. Each MP represents an electoral district (constituency) in the federal House of Commons.'
                  ],
                  [
                    'text' => 'Which of the following is not a responsibility of a municipal elected official?',
                    'answers' => [
                      ['text' => 'Transportation and Utilities'],
                      ['text' => 'Citizenship'],
                      ['text' => 'Emergency Services'],
                      ['text' => 'Social and Community Health'],
                    ],
                    'correctAnswerId' => 2150,
                    'correct_answer' => 'B',
                    'explanation' => 'Municipal elected officials in Canada are responsible for areas like transportation and utilities, emergency services, and social and community health. Citizenship matters are typically handled at the federal level.'
                  ],
                  [
                    'text' => 'What do you call the elected officials on a federal level?',
                    'answers' => [
                      ['text' => 'Members of Province'],
                      ['text' => 'Members of Parliament (MPs)'],
                      ['text' => 'The Governor Generals'],
                      ['text' => 'Electorate College'],
                    ],
                    'correctAnswerId' => 2154,
                    'correct_answer' => 'B',
                    'explanation' => 'Elected officials on the federal level in Canada are called Members of Parliament (MPs). Each MP represents an electoral district (constituency) in the federal House of Commons.'
                  ],
                  [
                    'text' => 'On election day, what should you do once you mark your ballot?',
                    'answers' => [
                      ['text' => 'Present it to the poll officials'],
                      ['text' => 'Fold it and deposit it in the bin next to you'],
                      ['text' => 'Fold it and present it to the poll officials'],
                      ['text' => 'Leave it on the table'],
                    ],
                    'correctAnswerId' => 2159,
                    'correct_answer' => 'C',
                    'explanation' => 'On election day in Canada, once you mark your ballot behind the screen, you should fold it and present it to the poll officials. Your vote is secret and confidential.'
                  ],

                  [
                    'text' => 'Who is Canada’s Head of State?',
                    'answers' => [
                      ['text' => 'The Governor General'],
                      ['text' => 'The King or Queen'],
                      ['text' => 'The Senators'],
                      ['text' => 'The Prime Minister'],
                    ],
                    'correctAnswerId' => 2162,
                    'correct_answer' => 'B',
                    'explanation' => 'As a constitutional monarchy, Canada’s Head of State is a hereditary Sovereign (Queen or King), who reigns in accordance with the Constitution: the rule of law.'
                  ],
                  [
                    'text' => 'What is a majority government?',
                    'answers' => [
                      ['text' => 'The party in power that holds less than half of the seats in the House of Commons'],
                      ['text' => 'The party in power that holds at least half of the seats in the Senate'],
                      ['text' => 'The party in power that holds at least half of the seats in the Senate and the House of Commons'],
                      ['text' => 'The party in power that holds at least half of the seats in the House of Commons'],
                    ],
                    'correctAnswerId' => 2168,
                    'correct_answer' => 'D',
                    'explanation' => 'In Canadian politics, a majority government refers to the situation where the governing party holds at least half of the seats in the House of Commons. This allows them to pass legislation without relying on the support of other parties.'
                  ],
                  [
                    'text' => 'What happens if you cannot or do not wish to vote on election day?',
                    'answers' => [
                      ['text' => 'You can vote by special ballot only'],
                      ['text' => 'You can vote at the advance polls only'],
                      ['text' => 'You cannot vote at all'],
                      ['text' => 'You can vote at the advance polls or by special ballot'],
                    ],
                    'correctAnswerId' => 2172,
                    'correct_answer' => 'D',
                    'explanation' => 'If you cannot or do not wish to vote on election day in Canada, you have the option to vote at the advance polls or by special ballot. Details about dates and locations for these options are provided on your voter information card.'
                  ],
                  [
                    'text' => 'Who does a member of Parliament represent?',
                    'answers' => [
                      ['text' => 'The Provincial Courts'],
                      ['text' => 'Only the citizens in his/her electoral district'],
                      ['text' => 'The citizens in his/her electoral district, as well as all Canadians'],
                      ['text' => 'The Provincial and Territorial governments'],
                    ],
                    'correctAnswerId' => 2175,
                    'correct_answer' => 'C',
                    'explanation' => 'A member of Parliament (MP) in Canada represents the citizens in his/her electoral district (constituency), as well as all Canadians. They are elected to the House of Commons to represent the interests of their constituents at the federal level.'
                  ],
                  [
                    'text' => 'What is the former name of the Constitution Act?',
                    'answers' => [
                      ['text' => 'The British North American Act'],
                      ['text' => 'The British Act'],
                      ['text' => 'The Federal Act'],
                      ['text' => 'The French North American Act'],
                    ],
                    'correctAnswerId' => 2177,
                    'correct_answer' => 'A',
                    'explanation' => 'The responsibilities of the federal and provincial governments in Canada were defined in 1867 in the British North America Act. This act is now known as the Constitution Act, 1867, which forms the basis of Canada\'s constitutional framework.'
                  ],

                ]
              ],
              [
                'name' => 'Practice Test 7.5',
                'info' => 'Practice Test 7.5',
                'questions' =>
                [
                  [
                    'text' => 'During an election period, where is the location of your polling station indicated?',
                    'answers' => [
                      ['text' => 'Online'],
                      ['text' => 'On your voter information card'],
                      ['text' => 'In your local Member of Parliament\'s office'],
                      ['text' => 'On your ballot'],
                    ],
                    'correctAnswerId' => 2182,
                    'correct_answer' => 'B',
                    'explanation' => 'To vote either on election day or at advance polls, go to the polling station listed on your voter information card.'
                  ],
                  [
                    'text' => 'How are the results of an election announced in Canada?',
                    'answers' => [
                      ['text' => 'Announced on radio'],
                      ['text' => 'Announced on radio, on television, and in the newspapers'],
                      ['text' => 'Announced on television'],
                      ['text' => 'Announced in the newspaper'],
                    ],
                    'correctAnswerId' => 2186,
                    'correct_answer' => 'B',
                    'explanation' => 'Immediately after the polling stations close, election officers count the ballots and the results are announced on radio and television, and in the newspapers.'
                  ],
                  [
                    'text' => 'In Canada, how can a party in power be defeated?',
                    'answers' => [
                      ['text' => 'If a majority of the members of the House of Commons vote in favor of a major government decision'],
                      ['text' => 'If the Queen votes against a major government decision'],
                      ['text' => 'If a majority of the members of the House of Commons vote against a major government decision'],
                      ['text' => 'If the Governor General resigns'],
                    ],
                    'correctAnswerId' => 2191,
                    'correct_answer' => 'C',
                    'explanation' => 'If a majority of the members of the House of Commons vote against a major government decision, the party in power is defeated, which usually results in the Prime Minister asking the Governor General, on behalf of the Sovereign, to call an election.'
                  ],
                  [
                    'text' => 'For how many years is the Governor General usually appointed?',
                    'answers' => [
                      ['text' => 'Three'],
                      ['text' => 'Five'],
                      ['text' => 'Ten'],
                      ['text' => 'Two'],
                    ],
                    'correctAnswerId' => 2194,
                    'correct_answer' => 'B',
                    'explanation' => 'The Sovereign is represented in Canada by the Governor General, who is appointed by the Sovereign on the advice of the Prime Minister, usually for five years.'
                  ],
                  [
                    'text' => 'Into how many electoral districts is Canada divided?',
                    'answers' => [
                      ['text' => '208'],
                      ['text' => '402'],
                      ['text' => '196'],
                      ['text' => '308'],
                    ],
                    'correctAnswerId' => 2200,
                    'correct_answer' => 'D',
                    'explanation' => 'Canada is divided into 308 electoral districts, also known as ridings or constituencies. An electoral district is a geographical area represented by a member of Parliament (MP).'
                  ],
                  [
                    'text' => 'What is the responsibility of the Cabinet Ministers?',
                    'answers' => [
                      ['text' => 'They are responsible for running each province of Canada'],
                      ['text' => 'They are responsible for running the Senate'],
                      ['text' => 'They are responsible for running the House of Commons'],
                      ['text' => 'They are responsible for running the federal government departments'],
                    ],
                    'correctAnswerId' => 2204,
                    'correct_answer' => 'D',
                    'explanation' => 'Cabinet ministers are responsible for running the federal government departments. The Prime Minister and the Cabinet ministers make important decisions about how the country is governed.'
                  ],
                  [
                    'text' => 'After an election, who is invited by the Governor General to form the government?',
                    'answers' => [
                      ['text' => 'The leader who has the approval of the Queen'],
                      ['text' => 'The leader who has been directly elected by Canadians'],
                      ['text' => 'The leader of the political party with the most seats in the House of Commons'],
                      ['text' => 'The members of Parliament'],
                    ],
                    'correctAnswerId' => 2207,
                    'correct_answer' => 'C',
                    'explanation' => 'Ordinarily, after an election, the leader of the political party with the most seats in the House of Commons is invited by the Governor General to form the government.'
                  ],
                  [
                    'text' => 'The Prime Minister and the party in power run the government:',
                    'answers' => [
                      ['text' => 'As long as they are in good health'],
                      ['text' => 'As long as they have the approval of the Queen'],
                      ['text' => 'As long as they have the support or confidence of the majority of the MPs'],
                      ['text' => 'As long as they have the support of the senators'],
                    ],
                    'correctAnswerId' => 2211,
                    'correct_answer' => 'C',
                    'explanation' => 'The Prime Minister and the party in power run the government as long as they have the support or confidence of the majority of the MPs.'
                  ],
                  [
                    'text' => 'How do Canadians vote?',
                    'answers' => [
                      ['text' => 'By mail'],
                      ['text' => 'By secret ballot'],
                      ['text' => 'Online'],
                      ['text' => 'By open ballot'],
                    ],
                    'correctAnswerId' => 2214,
                    'correct_answer' => 'B',
                    'explanation' => 'Canadian law secures the right to a secret ballot. This means that no one can watch you vote and no one should look at how you voted.'
                  ],
                  [
                    'text' => 'In Canadian politics, what does MNA stand for?',
                    'answers' => [
                      ['text' => 'Municipal and National Assembly'],
                      ['text' => 'Members of the Nunavut Assembly'],
                      ['text' => 'Members of the National Assembly'],
                      ['text' => 'Major National Assembly'],
                    ],
                    'correctAnswerId' => 2219,
                    'correct_answer' => 'C',
                    'explanation' => 'The members of the legislature are called members of the Legislative Assembly (MLAs), members of the National Assembly (MNAs), members of the Provincial Parliament (MPPs) or members of the House of Assembly (MHAs), depending on the province or territory.'
                  ],
                  [
                    'text' => 'How does Elections Canada give the election card to the electors whose names are in the National Register of Electors?',
                    'answers' => [
                      ['text' => 'Door delivery'],
                      ['text' => 'Electors have to pick it up their voter information card at an Elections Canada\'s office'],
                      ['text' => 'By mail'],
                      ['text' => 'None of the above'],
                    ],
                    'correctAnswerId' => 2223,
                    'correct_answer' => 'C',
                    'explanation' => 'Once an election has been called, Elections Canada mails a voter information card to each elector whose name is in the National Register of Electors.'
                  ],
                  [
                    'text' => 'On election day, where should your ballot go?',
                    'answers' => [
                      ['text' => 'In the garbage bin'],
                      ['text' => 'In the ballot box'],
                      ['text' => 'In your pocket'],
                      ['text' => 'It should stay on the voting table'],
                    ],
                    'correctAnswerId' => 2226,
                    'correct_answer' => 'B',
                    'explanation' => 'The poll official will tear off the ballot number and give your ballot back to you to deposit in the ballot box.'
                  ],
                  [
                    'text' => 'Which of the following is not a responsibility of a Member of Parliament?',
                    'answers' => [
                      ['text' => 'Citizenship'],
                      ['text' => 'Foreign Policy'],
                      ['text' => 'Policing'],
                      ['text' => 'Education'],
                    ],
                    'correctAnswerId' => 2232,
                    'correct_answer' => 'D',
                    'explanation' => 'In our federal state, the federal government takes responsibility for matters of national and international concern. These include defence, foreign policy, interprovincial trade and communications, currency, navigation, criminal law and citizenship.'
                  ],
                  [
                    'text' => 'In Canadian politics, what does MLA stand for?',
                    'answers' => [
                      ['text' => 'Municipal Legal Action'],
                      ['text' => 'Members of the Legal Assembly'],
                      ['text' => 'Municipal Legislative Assembly'],
                      ['text' => 'Members of the Legislative Assembly'],
                    ],
                    'correctAnswerId' => 2236,
                    'correct_answer' => 'D',
                    'explanation' => 'The members of the legislature are called members of the Legislative Assembly (MLAs), members of the National Assembly (MNAs), members of the Provincial Parliament (MPPs) or members of the House of Assembly (MHAs), depending on the province or territory.'
                  ],
                  [
                    'text' => 'In Canada, how are political representatives chosen (members of the House of Commons and members of the provincial and territorial legislatures)?',
                    'answers' => [
                      ['text' => 'They are elected by the Cabinet Ministers'],
                      ['text' => 'They are elected by the Senators'],
                      ['text' => 'They are elected by the people'],
                      ['text' => 'They are elected by the Prime Minister'],
                    ],
                    'correctAnswerId' => 2239,
                    'correct_answer' => 'C',
                    'explanation' => 'The House of Commons is the representative chamber, made up of members of Parliament elected by the people, traditionally every four years.'
                  ],
                  [
                    'text' => 'In Canadian politics, what are the people who run for office called?',
                    'answers' => [
                      ['text' => 'Electors'],
                      ['text' => 'Politicians'],
                      ['text' => 'Candidates'],
                      ['text' => 'Member'],
                    ],
                    'correctAnswerId' => 2243,
                    'correct_answer' => 'C',
                    'explanation' => 'The people who run for office are called candidates. There can be many candidates in an electoral district.'
                  ],
                  [
                    'text' => 'In Canada, voting is secret',
                    'answers' => [
                      ['text' => 'False'],
                      ['text' => 'True'],
                    ],
                    'correctAnswerId' => 2246,
                    'correct_answer' => 'B',
                    'explanation' => 'Your vote is secret. You will be invited to go behind the screen to mark your ballot. Once marked, fold it and present it to the poll officials.'
                  ],
                  [
                    'text' => 'Who chooses the ministers of the Crown?',
                    'answers' => [
                      ['text' => 'The Prime Minister'],
                      ['text' => 'The Governor General'],
                      ['text' => 'The Queen'],
                      ['text' => 'The Senators'],
                    ],
                    'correctAnswerId' => 2247,
                    'correct_answer' => 'A',
                    'explanation' => 'The Prime Minister chooses the ministers of the Crown, most of them from among members of the House of Commons.'
                  ],
                  [
                    'text' => 'Who has the right to run as a candidate in federal elections?',
                    'answers' => [
                      ['text' => 'Canadian citizens who are 16 years or older'],
                      ['text' => 'Canadian citizens and landed immigrants'],
                      ['text' => 'Canadian citizens who are 18 years old or older'],
                      ['text' => 'Canadian citizens'],
                    ],
                    'correctAnswerId' => 2253,
                    'correct_answer' => 'C',
                    'explanation' => 'Canadian citizens who are 18 years old or older may run in a federal election. The people who run for office are called candidates. There can be many candidates in an electoral district.'
                  ],
                  [
                    'text' => 'What forms the Cabinet?',
                    'answers' => [
                      ['text' => 'The Prime Minister and the Senators'],
                      ['text' => 'The Senate and the House of Commons'],
                      ['text' => 'The Prime Minister and the Cabinet ministers'],
                      ['text' => 'The Prime Minister and the House of Commons'],
                    ],
                    'correctAnswerId' => 2257,
                    'correct_answer' => 'C',
                    'explanation' => 'The Prime Minister and the Cabinet ministers are called the Cabinet and they make important decisions about how the country is governed.'
                  ],
                  [
                    'text' => 'What is the name of the parties that are not in power?',
                    'answers' => [
                      ['text' => 'Powerless parties'],
                      ['text' => 'Outside parties'],
                      ['text' => 'Side parties'],
                      ['text' => 'Opposition parties'],
                    ],
                    'correctAnswerId' => 2262,
                    'correct_answer' => 'D',
                    'explanation' => 'The other parties that are not in power are known as opposition parties. The opposition party with the most members of the House of Commons is the Official Opposition or Her/His Majesty’s Loyal Opposition.'
                  ],
                ]
              ],
              [
                'name' => 'Practice Test 7.6',
                'info' => 'Practice Test 7.6',
                'questions' =>
                [
                  [
                    'text' => 'Which of the following is a responsibility of a municipal elected official?',
                    'answers' => [
                      ['text' => 'Highways'],
                      ['text' => 'Healthcare'],
                      ['text' => 'Snow removal'],
                      ['text' => 'Natural Resources'],
                    ],
                    'correctAnswerId' => 2265,
                    'correct_answer' => 'C',
                    'explanation' => 'Municipalities are normally responsible for urban or regional planning, streets and roads, sanitation (such as garbage removal), snow removal, firefighting, ambulance and other emergency services, recreation facilities, public transit and some local health and social services.'
                  ],
                  [
                    'text' => 'Who are the representatives for the First Nations?',
                    'answers' => [
                      ['text' => 'First Nation mayors'],
                      ['text' => 'None'],
                      ['text' => 'First Nation senators'],
                      ['text' => 'Band chiefs and councillors'],
                    ],
                    'correctAnswerId' => 2270,
                    'correct_answer' => 'D',
                    'explanation' => 'The First Nations have band chiefs and councillors who have major responsibilities on First Nations reserves, including housing, schools and other services.'
                  ],
                  [
                    'text' => 'What should you do on election day?',
                    'answers' => [
                      ['text' => 'Nothing'],
                      ['text' => 'Call Elections Canada'],
                      ['text' => 'Go to your polling station'],
                      ['text' => 'Go to the nearest Election Canada\'s office'],
                    ],
                    'correctAnswerId' => 2273,
                    'correct_answer' => 'C',
                    'explanation' => 'Go to your polling station. The location is on your voter information card. Bring this card and proof of your identity and address to the polling station.'
                  ],
                  [
                    'text' => 'Where can you see the results of an election?',
                    'answers' => [
                      ['text' => 'You have to call Elections Canada'],
                      ['text' => 'On television or on the Elections Canada website'],
                      ['text' => 'Only on the Elections Canada website'],
                      ['text' => 'Only on television'],
                    ],
                    'correctAnswerId' => 2276,
                    'correct_answer' => 'B',
                    'explanation' => 'You can see the results on television or on the Elections Canada website (www.elections.ca).'
                  ],
                  [
                    'text' => 'What are the names of the three major political parties currently represented in the House of Commons?',
                    'answers' => [
                      ['text' => 'New Democratic Party, Royal Party, and French Coalition'],
                      ['text' => 'Quebec Coalition, Conservative Party and Liberal Party'],
                      ['text' => 'Conservative Party, Liberal Party and New Royal Party'],
                      ['text' => 'Conservative Party, Liberal Party and New Democratic Party'],
                    ],
                    'correctAnswerId' => 2282,
                    'correct_answer' => 'D',
                    'explanation' => 'There are three major political parties currently represented in the House of Commons: the Conservative Party, the New Democratic Party, and the Liberal Party.'
                  ],
                  [
                    'text' => 'What is the National Register of Electors?',
                    'answers' => [
                      ['text' => 'A database of landed immigrants 18 years of age or older who have to register to vote in federal elections and referendums'],
                      ['text' => 'A database of taxpayers who elected to serve on a jury'],
                      ['text' => 'A database of Canadian citizens 18 years of age or older who are qualified to vote in federal elections and referendums'],
                      ['text' => 'A database of Canadian citizens 18 years of age or older who are qualified to run as a candidate in federal elections'],
                    ],
                    'correctAnswerId' => 2285,
                    'correct_answer' => 'C',
                    'explanation' => 'The voters’ lists used during federal elections and referendums are produced from the National Register of Electors by a neutral agency of Parliament called Elections Canada.'
                  ],
                  [
                    'text' => 'There can be many candidates in an electoral district',
                    'answers' => [
                      ['text' => 'False'],
                      ['text' => 'True'],
                    ],
                    'correct_answer' => '2288',
                    'explanation' => 'The people who run for office are called candidates. There can be many candidates in an electoral district.'
                  ],
                  [
                    'text' => 'What is the role of opposition parties?',
                    'answers' => [
                      ['text' => 'To write bills'],
                      ['text' => 'To help the Prime Minister'],
                      ['text' => 'To peacefully oppose or try to improve government proposals'],
                      ['text' => 'To approve the leader party\'s bills'],
                    ],
                    'correctAnswerId' => 2291,
                    'correct_answer' => 'C',
                    'explanation' => 'The role of opposition parties is to peacefully oppose or try to improve government proposals.'
                  ],
                  [
                    'text' => 'Who can question the decisions of the government?',
                    'answers' => [
                      ['text' => 'The Queen only'],
                      ['text' => 'All members of the House of Commons'],
                      ['text' => 'The Senate only'],
                      ['text' => 'Only certain members of the House of Commons'],
                    ],
                    'correctAnswerId' => 2294,
                    'correct_answer' => 'B',
                    'explanation' => 'The Prime Minister and the Cabinet ministers are called the Cabinet and they make important decisions about how the country is governed. They prepare the budget and propose most new laws. Their decisions can be questioned by all members of the House of Commons.'
                  ],
                  [
                    'text' => 'Which of the following is a responsibility of a municipality?',
                    'answers' => [
                      ['text' => 'Natural Resources'],
                      ['text' => 'Citizenship'],
                      ['text' => 'Sanitation'],
                      ['text' => 'Education'],
                    ],
                    'correctAnswerId' => 2299,
                    'correct_answer' => 'C',
                    'explanation' => 'Municipalities are normally responsible for urban or regional planning, streets and roads, sanitation (such as garbage removal), snow removal, firefighting, ambulance and other emergency services, recreation facilities, public transit and some local health and social services.'
                  ],
                  [
                    'text' => 'Which of the following criteria makes you eligible to vote?',
                    'answers' => [
                      ['text' => 'You have a valid Canadian driving license'],
                      ['text' => 'You are on the voters\' list'],
                      ['text' => 'You own a property in Canada'],
                      ['text' => 'You are a landed immigrant'],
                    ],
                    'correctAnswerId' => 2302,
                    'correct_answer' => 'B',
                    'explanation' => 'One of the privileges of Canadian citizenship is the right to vote. You are eligible to vote in a federal election or cast a ballot in a federal referendum if you are: a Canadian citizen; and at least 18 years old on voting day; and on the voters’ list.'
                  ],
                  [
                    'text' => 'The rules for provincial, territorial and municipal elections are the same as for federal elections.',
                    'answers' => [
                      ['text' => 'False'],
                      ['text' => 'True'],
                    ],
                    'correctAnswerId' => 2305,
                    'correct_answer' => 'A',
                    'explanation' => 'Provincial, territorial and municipal elections are held by secret ballot, but the rules are not the same as those for federal elections. It is important to find out the rules for voting in provincial, territorial and local elections so that you can exercise your right to vote.'
                  ],
                  [
                    'text' => 'Which of the following is not a responsibility of a municipality?',
                    'answers' => [
                      ['text' => 'Regional planning'],
                      ['text' => 'Public transit'],
                      ['text' => 'Civil Rights'],
                      ['text' => 'Emergency services'],
                    ],
                    'correctAnswerId' => 2309,
                    'correct_answer' => 'C',
                    'explanation' => 'Municipalities are normally responsible for urban or regional planning, streets and roads, sanitation (such as garbage removal), snow removal, firefighting, ambulance and other emergency services, recreation facilities, public transit and some local health and social services.'
                  ],
                  [
                    'text' => 'What are Municipal laws called?',
                    'answers' => [
                      ['text' => 'By-laws'],
                      ['text' => 'Local laws'],
                      ['text' => 'City laws'],
                      ['text' => 'Municipal laws'],
                    ],
                    'correctAnswerId' => 2311,
                    'correct_answer' => 'A',
                    'explanation' => 'Municipal governments usually have a council that passes laws called “by-laws” that affect only the local community.'
                  ],
                  [
                    'text' => 'What is the opposition party with the most members of the House of Commons called?',
                    'answers' => [
                      ['text' => 'The Loyal Great Opposition'],
                      ['text' => 'The Official Opposition or Her Majesty\'s Loyal Opposition'],
                      ['text' => 'The Side Opposition'],
                      ['text' => 'The Outside Opposition or Her Majesty\'s Loyal Opposition'],
                    ],
                    'correctAnswerId' => 2316,
                    'correct_answer' => 'B',
                    'explanation' => 'The opposition party with the most members of the House of Commons is the Official Opposition or Her Majesty’s Loyal Opposition.'
                  ],
                  [
                    'text' => 'What is usually the result of a party in power being defeated?',
                    'answers' => [
                      ['text' => 'The Governor General asks the Prime Minister, on behalf of the Sovereign, to call an election'],
                      ['text' => 'The opposition party automatically gets to run the government'],
                      ['text' => 'The Prime Minister must resign from his party'],
                      ['text' => 'The Prime Minister asks the Governor General, on behalf of the Sovereign, to call an election'],
                    ],
                    'correctAnswerId' => 2322,
                    'correct_answer' => 'D',
                    'explanation' => 'If a majority of the members of the House of Commons vote against a major government decision, the party in power is defeated, which usually results in the Prime Minister asking the Governor General, on behalf of the Sovereign, to call an election.'
                  ],
                  [
                    'text' => 'Which of the following is a responsibility of a Member of Parliament?',
                    'answers' => [
                      ['text' => 'Education'],
                      ['text' => 'Public transit'],
                      ['text' => 'National Defence'],
                      ['text' => 'Civil Rights'],
                    ],
                    'correctAnswerId' => 2325,
                    'correct_answer' => 'C',
                    'explanation' => 'In our federal state, the federal government takes responsibility for matters of national and international concern. These include defence, foreign policy, interprovincial trade and communications, currency, navigation, criminal law and citizenship.'
                  ],
                  [
                    'text' => 'What does a vote by secret ballot mean?',
                    'answers' => [
                      ['text' => 'No one can watch you vote except the election officials'],
                      ['text' => 'No one can watch you vote and no one should look at how you voted'],
                      ['text' => 'You must not tell anyone who you voted for'],
                      ['text' => 'You can only show your ballot to one person'],
                    ],
                    'correctAnswerId' => 2328,
                    'correct_answer' => 'B',
                    'explanation' => 'You may choose to discuss how you voted with others, but no one, including family members, your employer or union representative, has the right to insist that you tell them how you voted.'
                  ],
                  [
                    'text' => 'What is a minority government?',
                    'answers' => [
                      ['text' => 'The party in power that holds less than half of the seats in the Senate and the House of Commons'],
                      ['text' => 'The party in power that holds less than half of the seats in the House of Commons'],
                      ['text' => 'The party in power that holds less than half of the seats in the Senate'],
                      ['text' => 'The party in power that holds at least half of the seats in the House of Commons'],
                    ],
                    'correctAnswerId' => 2332,
                    'correct_answer' => 'B',
                    'explanation' => 'If the party in power holds at least half of the seats in the House of Commons, this is called a majority government. If the party in power holds less than half of the seats in the House of Commons, this is called a minority government.'
                  ],
                  [
                    'text' => 'What is a voter information card?',
                    'answers' => [
                      ['text' => 'A letter explaining how to vote'],
                      ['text' => 'A card that you use to register for voting'],
                      ['text' => 'A list with all the election candidates'],
                      ['text' => 'A card that confirms that your name is on the voters\' list and states when and where you vote'],
                    ],
                    'correctAnswerId' => 2338,
                    'correct_answer' => 'D',
                    'explanation' => 'Electors whose information is in the National Register of Electors will receive a voter information card. This confirms that your name is on the voters’ list and states when and where you vote.'
                  ],
                  [
                    'text' => 'What is the name of the agency that produces the voters’ list?',
                    'answers' => [
                      ['text' => 'Voting Canada'],
                      ['text' => 'Elections Canada'],
                      ['text' => 'Electives Canada'],
                      ['text' => 'Voters Canada'],
                    ],
                    'correctAnswerId' => 2340,
                    'correct_answer' => 'B',
                    'explanation' => 'The voters’ lists used during federal elections and referendums are produced from the National Register of Electors by a neutral agency of Parliament called Elections Canada.'
                  ],
                  [
                    'text' => 'What does "constitutional monarchy" mean?',
                    'answers' => [
                      ['text' => 'Freedom of speech and mobility'],
                      ['text' => 'Canada\'s Head of State is a hereditary Sovereign (Queen or King)'],
                      ['text' => 'The responsibilities of the federal and provincial governments are constitutional'],
                      ['text' => 'The Sovereign (Queen or King) has the constitutional rights to make laws in Canada'],
                    ],
                    'correctAnswerId' => 2344,
                    'correct_answer' => 'B',
                    'explanation' => 'As a constitutional monarchy, Canada’s Head of State is a hereditary Sovereign (Queen or King), who reigns in accordance with the Constitution: the rule of law.'
                  ],
                  [
                    'text' => 'What are the responsibilities of the members to the House of Commons in Ottawa and to the provincial and territorial legislatures?',
                    'answers' => [
                      ['text' => 'Passing laws, and approving and monitoring expenditures'],
                      ['text' => 'Passing laws, approving and monitoring expenditures, and keeping the government accountable'],
                      ['text' => 'Monitoring expenditures, and keeping the government accountable'],
                      ['text' => 'Matters of international concern'],
                    ],
                    'correctAnswerId' => 2348,
                    'correct_answer' => 'B',
                    'explanation' => 'In Canada’s parliamentary democracy, the people elect members to the House of Commons in Ottawa and to the provincial and territorial legislatures. These representatives are responsible for passing laws, approving and monitoring expenditures, and keeping the government accountable.'
                  ],
                  [
                    'text' => 'What area does a "by-law" apply to in Canada?',
                    'answers' => [
                      ['text' => 'The territory'],
                      ['text' => 'The entire country'],
                      ['text' => 'The province'],
                      ['text' => 'The local community'],
                    ],
                    'correctAnswerId' => 2354,
                    'correct_answer' => 'D',
                    'explanation' => 'Municipal governments usually have a council that passes laws called “by-laws” that affect only the local community. The council usually includes a mayor (or a reeve) and councillors or aldermen.'
                  ],
                  [
                    'text' => 'What do you mark on a federal election ballot?',
                    'answers' => [
                      ['text' => 'The candidate\'s number'],
                      ['text' => 'The candidate\'s name'],
                      ['text' => 'An "X"'],
                      ['text' => 'The party\'s name'],
                    ],
                    'correctAnswerId' => 2357,
                    'correct_answer' => 'C',
                    'explanation' => 'Mark an “X” in the circle next to the name of the candidate of your choice.'
                  ],
                  [
                    'text' => 'What happens if you are not listed in the National Register of Electors?',
                    'answers' => [
                      ['text' => 'You can still be added to the voters\' list at any time, including election day'],
                      ['text' => 'You can still be added to the voters\' list but only on election day'],
                      ['text' => 'You can still be added to the voters\' list at any time, excluding election day'],
                      ['text' => 'You won\'t be able to vote'],
                    ],
                    'correctAnswerId' => 2359,
                    'correct_answer' => 'A',
                    'explanation' => 'Even if you choose not to be listed in the National Register of Electors or do not receive a voter information card, you can still be added to the voters’ list at any time, including on election day.'
                  ],
                  [
                    'text' => 'What is the leader of the party with the most seats in the House of Commons called?',
                    'answers' => [
                      ['text' => 'Queen or King'],
                      ['text' => 'Prime Minister'],
                      ['text' => 'Senator'],
                      ['text' => 'Governor General'],
                    ],
                    'correctAnswerId' => 2364,
                    'correct_answer' => 'B',
                    'explanation' => 'Ordinarily, after an election, the leader of the political party with the most seats in the House of Commons is invited by the Governor General to form the government.'
                  ],
                ]

              ],
            ],
            'topics' => [
              ['name' => 'Federal Elections'],
            ],
            'flashcards' => [
              [
                'question' => 'In Canadian politics, what does an MP stand for?',
                'answer' => 'Member of Parliament',
                'explanation' => 'An electoral district is a geographical area represented by a member of Parliament (MP).'
              ],
              [
                'question' => 'In Canadian politics, what does MHA stand for?',
                'answer' => 'Members of the House of Assembly',
                'explanation' => 'The members of the legislature are called members of the Legislative Assembly (MLAs), members of the National Assembly (MNAs), members of the Provincial Parliament (MPPs) or members of the House of Assembly (MHAs), depending on the province or territory.'
              ],
              [
                'question' => 'What should you do on election day?',
                'answer' => 'Go to your polling station',
                'explanation' => 'Go to your polling station. The location is on your voter information card. Bring this card and proof of your identity and address to the polling station.'
              ],
              [
                'question' => 'On election day, what should you bring to the polling station?',
                'answer' => 'The voter information card and proof of your identity and address',
                'explanation' => 'On election day, bring the voter information card and proof of your identity and address.'
              ],
              [
                'question' => 'What is the National Register of Electors?',
                'answer' => 'A database of Canadian citizens 18 years of age or older who are qualified to vote in federal elections and referendums',
                'explanation' => 'The voters’ lists used during federal elections and referendums are produced from the National Register of Electors by a neutral agency of Parliament called Elections Canada.'
              ],
              [
                'question' => 'What happens if you cannot or do not wish to vote on election day?',
                'answer' => 'You can vote at the advance polls or by special ballot',
                'explanation' => 'If you cannot or do not wish to vote on election day, you can vote at the advance polls or by special ballot. The dates and location are on your voter information card.'
              ],
              [
                'question' => 'How does Canada’s Head of State reign?',
                'answer' => 'In accordance with the Constitution: the rule of law',
                'explanation' => 'As a constitutional monarchy, Canada’s Head of State is a hereditary Sovereign (Queen or King), who reigns in accordance with the Constitution: the rule of law.'
              ],
              [
                'question' => 'In Canadian politics, what does MPP stand for?',
                'answer' => 'Members of the Provincial Parliament',
                'explanation' => 'The members of the legislature are called members of the Legislative Assembly (MLAs), members of the National Assembly (MNAs), members of the Provincial Parliament (MPPs) or members of the House of Assembly (MHAs), depending on the province or territory.'
              ],
              [
                'question' => 'What is the former name of the Constitution Act?',
                'answer' => 'The British North American Act',
                'explanation' => 'The responsibilities of the federal and provincial governments were defined in 1867 in the British North America Act, now known as the Constitution Act, 1867.'
              ],
              [
                'question' => 'Who has the right to run as a candidate in federal elections?',
                'answer' => 'Canadian citizens who are 18 years old or older',
                'explanation' => 'Canadian citizens who are 18 years old or older may run in a federal election. The people who run for office are called candidates. There can be many candidates in an electoral district.'
              ],
              [
                'question' => 'On election day, what should you do once you mark your ballot?',
                'answer' => 'Fold it and present it to the poll officials',
                'explanation' => 'Your vote is secret. You will be invited to go behind the screen to mark your ballot. Once marked, fold it and present it to the poll officials.'
              ],
              [
                'question' => 'How are the results of an election announced in Canada?',
                'answer' => 'Announced on radio, on television, and in the newspapers',
                'explanation' => 'Immediately after the polling stations close, election officers count the ballots and the results are announced on radio and television, and in the newspapers.'
              ],
              [
                'question' => 'Who is Canada’s Head of State?',
                'answer' => 'The King or Queen',
                'explanation' => 'As a constitutional monarchy, Canada’s Head of State is a hereditary Sovereign (Queen or King), who reigns in accordance with the Constitution: the rule of law.'
              ],
              [
                'question' => 'What do you call the elected officials on a federal level?',
                'answer' => 'Members of Parliament (MPs)',
                'explanation' => 'The citizens in each electoral district elect one MP who sits in the House of Commons to represent them, as well as all Canadians.'
              ],
              [
                'question' => 'In Canadian politics, what does MNA stand for?',
                'answer' => 'Members of the National Assembly',
                'explanation' => 'The members of the legislature are called members of the Legislative Assembly (MLAs), members of the National Assembly (MNAs), members of the Provincial Parliament (MPPs) or members of the House of Assembly (MHAs), depending on the province or territory.'
              ],
              [
                'question' => 'Into how many electoral districts is Canada divided?',
                'answer' => '308',
                'explanation' => 'Canada is divided into 308 electoral districts, also known as ridings or constituencies. An electoral district is a geographical area represented by a member of Parliament (MP).'
              ],
              [
                'question' => 'What is usually the result of a party in power being defeated?',
                'answer' => 'The Prime Minister asks the Governor General, on behalf of the Sovereign, to call an election',
                'explanation' => 'If a majority of the members of the House of Commons vote against a major government decision, the party in power is defeated, which usually results in the Prime Minister asking the Governor General, on behalf of the Sovereign, to call an election.'
              ],
              [
                'question' => 'What forms the Cabinet?',
                'answer' => 'The Prime Minister and the Cabinet ministers',
                'explanation' => 'The Prime Minister and the Cabinet ministers are called the Cabinet and they make important decisions about how the country is governed.'
              ],
              [
                'question' => 'What is an electoral district?',
                'answer' => 'A geographical area represented by a member of Parliament',
                'explanation' => 'An electoral district is a geographical area represented by a member of Parliament (MP).'
              ],
              [
                'question' => 'Who has the right to insist that you tell them how you voted?',
                'answer' => 'Nobody',
                'explanation' => 'Canadian law secures the right to a secret ballot. This means that no one can watch you vote and no one should look at how you voted.'
              ],
              [
                'question' => 'What do you mark on a federal election ballot?',
                'answer' => 'An "X"',
                'explanation' => 'Mark an “X” in the circle next to the name of the candidate of your choice.'
              ],
              [
                'question' => 'On election day, where should your ballot go?',
                'answer' => 'In the ballot box',
                'explanation' => 'The poll official will tear off the ballot number and give your ballot back to you to deposit in the ballot box.'
              ],
              [
                'question' => 'What do you call the people who run for office?',
                'answer' => 'Candidates',
                'explanation' => 'Canadian citizens who are 18 years old or older may run in a federal election. The people who run for office are called candidates. There can be many candidates in an electoral district.'
              ],
              [
                'question' => 'What is the leader of the party with the most seats in the House of Commons called?',
                'answer' => 'Prime Minister',
                'explanation' => 'Ordinarily, after an election, the leader of the political party with the most seats in the House of Commons is invited by the Governor General to form the government.'
              ],
              [
                'question' => 'Who does a member of Parliament represent?',
                'answer' => 'The citizens in his/her electoral district, as well as all Canadians',
                'explanation' => 'An electoral district is a geographical area represented by a member of Parliament (MP). The citizens in each electoral district elect one MP who sits in the House of Commons to represent them, as well as all Canadians.'
              ],
              [
                'question' => 'During an election period, where is the location of your polling station indicated?',
                'answer' => 'On your voter information card',
                'explanation' => 'To vote either on election day or at advance polls, go to the polling station listed on your voter information card.'
              ],
              [
                'question' => 'After an election, who is invited by the Governor General to form the government?',
                'answer' => 'The leader of the political party with the most seats in the House of Commons',
                'explanation' => 'Ordinarily, after an election, the leader of the political party with the most seats in the House of Commons is invited by the Governor General to form the government.'
              ],
              [
                "question" => "What are Municipal laws called?",
                "answer" => "By-laws",
                "explanation" => "Municipal governments usually have a council that passes laws called 'by-laws' that affect only the local community."
              ],
              [
                "question" => "In Canadian politics, what are the people who run for office called?",
                "answer" => "Candidates",
                "explanation" => "The people who run for office are called candidates. There can be many candidates in an electoral district."
              ],
              [
                "question" => "What do the initials 'MP' stand for in Canadian politics?",
                "answer" => "Member of Parliament",
                "explanation" => "An electoral district is a geographical area represented by a member of Parliament (MP)."
              ],
              [
                "question" => "In Canadian politics, what does MLA stand for?",
                "answer" => "Members of the Legislative Assembly",
                "explanation" => "The members of the legislature are called members of the Legislative Assembly (MLAs), members of the National Assembly (MNAs), members of the Provincial Parliament (MPPs) or members of the House of Assembly (MHAs), depending on the province or territory."
              ],
              [
                "question" => "What area does a 'by-law' apply to in Canada?",
                "answer" => "The local community",
                "explanation" => "Municipal governments usually have a council that passes laws called 'by-laws' that affect only the local community. The council usually includes a mayor (or a reeve) and councillors or aldermen."
              ],
              [
                "question" => "What is the name of the parties that are not in power?",
                "answer" => "Opposition parties",
                "explanation" => "The other parties that are not in power are known as opposition parties. The opposition party with the most members of the House of Commons is the Official Opposition or Her/His Majesty’s Loyal Opposition."
              ],
              [
                "question" => "What is the responsibility of the Cabinet Ministers?",
                "answer" => "They are responsible for running the federal government departments",
                "explanation" => "Cabinet ministers are responsible for running the federal government departments. The Prime Minister and the Cabinet ministers are called the Cabinet and they make important decisions about how the country is governed."
              ],
              [
                "question" => "Who can question the decisions of the government?",
                "answer" => "All members of the House of Commons",
                "explanation" => "The Prime Minister and the Cabinet ministers are called the Cabinet and they make important decisions about how the country is governed. They prepare the budget and propose most new laws. Their decisions can be questioned by all members of the House of Commons."
              ],
              [
                "question" => "Where can you see the results of an election?",
                "answer" => "On television or on the Elections Canada website",
                "explanation" => "You can see the results on television or on the Elections Canada website (www.elections.ca)."
              ],
              [
                "question" => "How does Elections Canada give the election card to the electors whose names are in the National Register of Electors?",
                "answer" => "By mail",
                "explanation" => "Once an election has been called, Elections Canada mails a voter information card to each elector whose name is in the National Register of Electors."
              ],
              [
                "question" => "In Canada, how can a party in power be defeated?",
                "answer" => "If a majority of the members of the House of Commons vote against a major government decision",
                "explanation" => "If a majority of the members of the House of Commons vote against a major government decision, the party in power is defeated, which usually results in the Prime Minister asking the Governor General, on behalf of the Sovereign, to call an election."
              ],
              [
                "question" => "Who chooses the ministers of the Crown?",
                "answer" => "The Prime Minister",
                "explanation" => "The Prime Minister chooses the ministers of the Crown, most of them from among members of the House of Commons."
              ],
              [
                "question" => "What is a voter information card?",
                "answer" => "A card that confirms that your name is on the voters' list and states when and where you vote",
                "explanation" => "Electors whose information is in the National Register of Electors will receive a voter information card. This confirms that your name is on the voters’ list and states when and where you vote."
              ],
              [
                "question" => "During an election period, what happens if you do not receive a voter information card?",
                "answer" => "You have to call your local elections office, or Elections Canada in Ottawa, to ensure that you are on the voters' list",
                "explanation" => "If you do not receive a voter information card, call your local elections office to ensure that you are on the voters’ list. If you do not have the number, call Elections Canada, in Ottawa, at 1-800-463-6868."
              ],
              [
                "question" => "How are members of Parliament chosen?",
                "answer" => "They are elected by voters in their local constituency",
                "explanation" => "The citizens in each electoral district elect one MP who sits in the House of Commons to represent them, as well as all Canadians."
              ],
              [
                "question" => "What is a minority government?",
                "answer" => "The party in power that holds less than half of the seats in the House of Commons",
                "explanation" => "If the party in power holds at least half of the seats in the House of Commons, this is called a majority government. If the party in power holds less than half of the seats in the House of Commons, this is called a minority government."
              ],
              [
                "question" => "What are the names of the three major political parties currently represented in the House of Commons?",
                "answer" => "Conservative Party, Liberal Party and New Democratic Party",
                "explanation" => "There are three major political parties currently represented in the House of Commons: the Conservative Party, the New Democratic Party, and the Liberal Party."
              ],
              [
                "question" => "What is the role of opposition parties?",
                "answer" => "To peacefully oppose or try to improve government proposals",
                "explanation" => "The role of opposition parties is to peacefully oppose or try to improve government proposals."
              ],
              [
                "question" => "What is the opposition party with the most members of the House of Commons called?",
                "answer" => "The Official Opposition or Her Majesty's Loyal Opposition",
                "explanation" => "The opposition party with the most members of the House of Commons is the Official Opposition or Her Majesty’s Loyal Opposition."
              ],
              [
                "question" => "What is the name of the agency that produces the voters’ list?",
                "answer" => "Elections Canada",
                "explanation" => "The voters’ lists used during federal elections and referendums are produced from the National Register of Electors by a neutral agency of Parliament called Elections Canada."
              ],
              [
                "question" => "Who are the representatives for the First Nations?",
                "answer" => "Band chiefs and councillors",
                "explanation" => "The First Nations have band chiefs and councillors who have major responsibilities on First Nations reserves, including housing, schools and other services."
              ],
              [
                "question" => "What are the responsibilities of the Cabinet?",
                "answer" => "Prepare the budget and propose most new laws",
                "explanation" => "They prepare the budget and propose most new laws. Their decisions can be questioned by all members of the House of Commons."
              ],
              [
                "question" => "What happens if you are not listed in the National Register of Electors?",
                "answer" => "You can still be added to the voters' list at any time, including election day",
                "explanation" => "Even if you choose not to be listed in the National Register of Electors or do not receive a voter information card, you can still be added to the voters’ list at any time, including on election day."
              ],
              [
                "question" => "In Canada, how are political representatives chosen (members of the House of Commons and members of the provincial and territorial legislatures)?",
                "answer" => "They are elected by the people",
                "explanation" => "The House of Commons is the representative chamber, made up of members of Parliament elected by the people, traditionally every four years."
              ],
              [
                "question" => "For how many years is the Governor General usually appointed?",
                "answer" => "Five",
                "explanation" => "The Sovereign is represented in Canada by the Governor General, who is appointed by the Sovereign on the advice of the Prime Minister, usually for five years."
              ],
              [
                "question" => "What does a vote by secret ballot mean?",
                "answer" => "No one can watch you vote and no one should look at how you voted",
                "explanation" => "You may choose to discuss how you voted with others, but no one, including family members, your employer or union representative, has the right to insist that you tell them how you voted."
              ],
              [
                "question" => "What are the responsibilities of the members to the House of Commons in Ottawa and to the provincial and territorial legislatures?",
                "answer" => "Passing laws, approving and monitoring expenditures, and keeping the government accountable",
                "explanation" => "In Canada’s parliamentary democracy, the people elect members to the House of Commons in Ottawa and to the provincial and territorial legislatures. These representatives are responsible for passing laws, approving and monitoring expenditures, and keeping the government accountable."
              ],
              [
                "question" => "What does 'constitutional monarchy' mean?",
                "answer" => "Canada's Head of State is a hereditary Sovereign (Queen or King)",
                "explanation" => "As a constitutional monarchy, Canada’s Head of State is a hereditary Sovereign (Queen or King), who reigns in accordance with the Constitution: the rule of law."
              ],
              [
                "question" => "On election day, what happens when the polls close?",
                "answer" => "Every ballot is counted and the results are made public",
                "explanation" => "When the polls close, every ballot is counted and the results are made public. You can see the results on television or on the Elections Canada website (www.elections.ca)."
              ],
              [
                "question" => "How do Canadians vote?",
                "answer" => "By secret ballot",
                "explanation" => "Canadian law secures the right to a secret ballot. This means that no one can watch you vote and no one should look at how you voted."
              ],
              [
                "question" => "What is a majority government?",
                "answer" => "The party in power that holds at least half of the seats in the House of Commons",
                "explanation" => "If the party in power holds at least half of the seats in the House of Commons, this is called a majority government."
              ]
            ]
          ],
          [
            'image' => '/images/chap 9.png',
            'name' => 'Chapter 8',
            'title' => 'The Justice System ',
            'description' => "Introduce yourself to the country's legal system. Get detailed information about the principles of justice, the court system, and the protection of rights and freedoms.",
            'questions' => 20,
            'mistakes' => 5,
            'step' => 2,
            'tests' => [
              [
                'name' => 'Practice Test 8.1',
                'info' => 'Practice Test 8.1',
                'questions' =>
                [
                  [
                    'text' => 'If you cannot pay for a lawyer how can you get legal help?',
                    'answers' => [
                      ['text' => 'Borrow money from the government and pay for the lawyer'],
                      ['text' => 'Go to Legal Aid Services in most communities'],
                      ['text' => 'Apply for financial aid from the government to pay for legal fees'],
                      ['text' => 'Do not go to a court'],
                    ],
                    'correctAnswerId' => 2368,
                    'correct_answer' => 'B',
                    'explanation' => 'If you cannot pay for a lawyer, in most communities there are legal aid services available free of charge or at a low cost.'
                  ],
                  [
                    'text' => 'What level of government passes “by-laws”?',
                    'answers' => [
                      ['text' => 'Provincial'],
                      ['text' => 'Municipal or local government'],
                      ['text' => 'Federal'],
                      ['text' => 'Senators'],
                    ],
                    'correctAnswerId' => 2372,
                    'correct_answer' => 'B',
                    'explanation' => 'Municipal governments usually have a council that passes laws called “by-laws” that affect only the local community.'
                  ],
                  [
                    'text' => 'Which courts are for civil cases involving small sums of money?',
                    'answers' => [
                      ['text' => 'the federal court'],
                      ['text' => 'the small claims courts'],
                      ['text' => 'a trial court'],
                      ['text' => 'a Provincial Court'],
                    ],
                    'correctAnswerId' => 2376,
                    'correct_answer' => 'B',
                    'explanation' => 'There are small claims courts for civil cases involving small sums of money.'
                  ],
                  [
                    'text' => 'In Canada\'s justice system what does “presumption of innocence” mean?',
                    'answers' => [
                      ['text' => 'The Prime Minister can determine who is innocent in a court'],
                      ['text' => 'Everybody is guilty until proven innocent'],
                      ['text' => 'Everyone is innocent until proven guilty'],
                      ['text' => 'The judge can determine who is guilty without evidence'],
                    ],
                    'correctAnswerId' => 2381,
                    'correct_answer' => 'C',
                    'explanation' => 'The Canadian justice system is founded on the presumption of innocence in criminal matters, meaning everyone is innocent until proven guilty.'
                  ],
                  [
                    'text' => 'In the Canadian justice system, what are the roles of the courts and the police?',
                    'answers' => [
                      ['text' => 'the courts make laws and the police enforce them'],
                      ['text' => 'the courts enforce federal laws and the police enforce provincial laws'],
                      ['text' => 'the courts enforce laws and the police settle disputes'],
                      ['text' => 'the court settled disputes and the police enforce the laws'],
                    ],
                    'correctAnswerId' => 2386,
                    'correct_answer' => 'D',
                    'explanation' => 'The courts settle disputes and the police enforce the laws in the Canadian justice system.'
                  ],
                  [
                    'text' => 'What is the other name for a trial court?',
                    'answers' => [
                      ['text' => 'the court of Queens bench'],
                      ['text' => 'the federal court'],
                      ['text' => 'the Provincial Court'],
                      ['text' => 'the small claims courts'],
                    ],
                    'correctAnswerId' => 2387,
                    'correct_answer' => 'A',
                    'explanation' => 'In most provinces, there is an appeal court and a trial court, sometimes called the Court of Queen’s Bench or the Supreme Court.'
                  ],
                  [
                    'text' => 'What does the Blindfolded Lady Justice symbolize?',
                    'answers' => [
                      ['text' => 'blind to all considerations other than facts'],
                      ['text' => 'the government must respect all of the legal rights a person is entitled to under the law'],
                      ['text' => 'our judicial system is founded on the presumption of innocence in criminal matters'],
                      ['text' => 'None of these'],
                    ],
                    'correctAnswerId' => 2391,
                    'correct_answer' => 'A',
                    'explanation' => 'The blindfolded Lady Justice symbolizes the impartial manner in which our laws are administered: blind to all considerations but the facts.'
                  ],
                  [
                    'text' => 'Under Canadian law why is every person presumed to be innocent until proven guilty?',
                    'answers' => [
                      ['text' => 'No person or group is above the law'],
                      ['text' => 'Men and women are equal under the law'],
                      ['text' => 'Freedom of thought belief opinion, and expression'],
                      ['text' => 'To guarantee the due legal process under the law'],
                    ],
                    'correctAnswerId' => 2398,
                    'correct_answer' => 'D',
                    'explanation' => 'The Canadian justice system guarantees everyone due process under the law, founded on the presumption of innocence in criminal matters.'
                  ],
                  [
                    'text' => 'What is a part of our heritage under the Canadian legal system?',
                    'answers' => [
                      ['text' => 'Freedom under law'],
                      ['text' => 'Democratic principles and due process'],
                      ['text' => 'Rule of law'],
                      ['text' => 'All of the above'],
                    ],
                    'correctAnswerId' => 2402,
                    'correct_answer' => 'D',
                    'explanation' => 'Canada’s legal system is based on a heritage that includes the rule of law, freedom under the law, democratic principles, and due process.'
                  ],
                  [
                    'text' => 'Which of the following is the highest court of Canada?',
                    'answers' => [
                      ['text' => 'a Provincial Court'],
                      ['text' => 'the small claims courts'],
                      ['text' => 'the Supreme Court'],
                      ['text' => 'the federal court'],
                    ],
                    'correctAnswerId' => 2405,
                    'correct_answer' => 'C',
                    'explanation' => 'The Supreme Court of Canada is our country’s highest court.'
                  ],
                  [
                    'text' => 'What is “Due process”?',
                    'answers' => [
                      ['text' => 'The government must respect all of the legal rights a person is entitled to under the law'],
                      ['text' => 'The rule of law and freedom under the law'],
                      ['text' => 'The impartial manner in which the laws are administered'],
                      ['text' => 'None of these'],
                    ],
                    'correctAnswerId' => 2407,
                    'correct_answer' => 'A',
                    'explanation' => 'Due process is the principle that the government must respect all the legal rights a person is entitled to under the law.'
                  ],
                  [
                    'text' => 'Who among the following can help you with legal problems?',
                    'answers' => [
                      ['text' => 'Politicians'],
                      ['text' => 'Lawyers'],
                      ['text' => 'Members of parliament'],
                      ['text' => 'The police'],
                    ],
                    'correctAnswerId' => 2412,
                    'correct_answer' => 'B',
                    'explanation' => 'Lawyers can help you with legal problems and act for you in court.'
                  ],
                  [
                    'text' => 'What does the Canadian justice system guarantee?',
                    'answers' => [
                      ['text' => 'Smooth process under the law'],
                      ['text' => 'Due process under the law'],
                      ['text' => 'Quick process under the law'],
                      ['text' => 'Arbitrary process under the law'],
                    ],
                    'correctAnswerId' => 2416,
                    'correct_answer' => 'B',
                    'explanation' => 'The Canadian justice system guarantees everyone due process under the law.'
                  ],
                  [
                    'text' => 'Who do the citizens in each electoral district elect?',
                    'answers' => [
                      ['text' => 'Ministers of Parliaments'],
                      ['text' => 'Masters of Parliament'],
                      ['text' => 'Member of Parliament'],
                      ['text' => 'Member of Politics'],
                    ],
                    'correctAnswerId' => 2421,
                    'correct_answer' => 'C',
                    'explanation' => 'The citizens in each electoral district elect one MP who sits in the House of Commons to represent them.'
                  ],
                  [
                    'text' => 'In Canada, the police are there to help you.',
                    'answers' => [
                      ['text' => 'False'],
                      ['text' => 'True'],
                    ],
                    'correctAnswerId' => 2424,
                    'correct_answer' => 'B',
                    'explanation' => 'The police in Canada are there to help you.'
                  ],
                  [
                    'text' => 'What is the role of the police in Canada?',
                    'answers' => [
                      ['text' => 'To resolve legal disputes'],
                      ['text' => 'To defend Canadian borders'],
                      ['text' => 'To keep people safe and to enforce the law'],
                      ['text' => 'To provide National Security data to the Federal government'],
                    ],
                    'correctAnswerId' => 2427,
                    'correct_answer' => 'C',
                    'explanation' => 'The role of the police in Canada is to keep people safe and to enforce the law.'
                  ],
                  [
                    'text' => 'In the Canadian justice system, what is the "presumption of innocence"?',
                    'answers' => [
                      ['text' => 'Most people are guilty until they prove it'],
                      ['text' => 'Women are innocent until proven guilty'],
                      ['text' => 'Some people are innocent until proven otherwise'],
                      ['text' => 'Everyone is innocent until proven guilty'],
                    ],
                    'correctAnswerId' => 2432,
                    'correct_answer' => 'D',
                    'explanation' => 'The Canadian justice system guarantees everyone due process under the law. Our judicial system is founded on the presumption of innocence in criminal matters, meaning everyone is innocent until proven guilty.'
                  ],
                  [
                    'text' => 'In Canada, to which following category do the laws not apply?',
                    'answers' => [
                      ['text' => 'Politicians'],
                      ['text' => 'Police'],
                      ['text' => 'None of the above'],
                      ['text' => 'Judges'],
                    ],
                    'correctAnswerId' => 2435,
                    'correct_answer' => 'C',
                    'explanation' => 'The law applies to everyone. No one is above the law in Canada.'
                  ],
                  [
                    'text' => 'Who has the right to vote in a federal election?',
                    'answers' => [
                      ['text' => 'Adult Canadian citizens and permanent residents'],
                      ['text' => 'Canadian citizens on the voters\' list'],
                      ['text' => 'A Canadian citizen, at least 18 years old on voting day and on the voters\' list'],
                      ['text' => 'An adult Canadian citizen'],
                    ],
                    'correctAnswerId' => 2439,
                    'correct_answer' => 'C',
                    'explanation' => 'One of the privileges of Canadian citizenship is the right to vote. You are eligible to vote in a federal election or cast a ballot in a federal referendum if you are:
                                - a Canadian citizen; and
                                - at least 18 years old on voting day; and
                                - on the voters’ list.'
                  ],
                  [
                    'text' => 'In a federal election, in each electoral district, what does the candidate who receives the most votes become?',
                    'answers' => [
                      ['text' => 'The House Leader'],
                      ['text' => 'The Prime Minister'],
                      ['text' => 'The Governor General'],
                      ['text' => 'The MP'],
                    ],
                    'correctAnswerId' => 2444,
                    'correct_answer' => 'D',
                    'explanation' => 'The people in each electoral district vote for the candidate and political party of their choice. The candidate who receives the most votes becomes the MP for that electoral district.'
                  ],
                ]
              ],
              [
                'name' => 'Practice Test 8.2',
                'info' => 'Practice Test 8.2',
                'questions' =>
                [
                  [
                    'text' => 'Which of the following is not a responsibility of the RCMP in Canada?',
                    'answers' => [
                      ['text' => 'Serve as municipal police in all major cities in Canada'],
                      ['text' => 'Serve as the provincial police in some municipalities'],
                      ['text' => 'Serve as the provincial police in all provinces and territories except Ontario and Quebec'],
                      ['text' => 'Enforce federal laws throughout Canada'],
                    ],
                    'correctAnswerId' => 2445,
                    'correct_answer' => 'A',
                    'explanation' => 'The Royal Canadian Mounted Police (RCMP) enforce federal laws throughout Canada, and serve as the provincial police in all provinces and territories except Ontario and Quebec, as well as in some municipalities.'
                  ],
                  [
                    'text' => 'What do Canadians vote for in a federal election?',
                    'answers' => [
                      ['text' => 'The Governor General they want to represent them in Canada'],
                      ['text' => 'All candidates in their electoral district'],
                      ['text' => 'A person to become the Premier of Canada'],
                      ['text' => 'The people they want to represent them in the House of Commons'],
                    ],
                    'correctAnswerId' => 2452,
                    'correct_answer' => 'D',
                    'explanation' => 'Canadians vote in elections for the people they want to represent them in the House of Commons. In each election, voters may re-elect the same members of the House of Commons or choose new ones.'
                  ],
                  [
                    'text' => 'How many candidates can there be in an electoral district?',
                    'answers' => [
                      ['text' => 'A maximum of five'],
                      ['text' => 'Two'],
                      ['text' => 'Many'],
                      ['text' => 'Three'],
                    ],
                    'correctAnswerId' => 2455,
                    'correct_answer' => 'C',
                    'explanation' => 'The people who run for office are called candidates. There can be many candidates in an electoral district.'
                  ],
                  [
                    'text' => 'Which of the following is not allowed by a non-Canadian Citizen?',
                    'answers' => [
                      ['text' => 'Vote in a federal or provincial election'],
                      ['text' => 'Own a house'],
                      ['text' => 'Go to University'],
                      ['text' => 'Drive a car'],
                    ],
                    'correctAnswerId' => 2457,
                    'correct_answer' => 'A',
                    'explanation' => 'One of the privileges of Canadian citizenship is the right to vote. You are eligible to vote in a federal election or cast a ballot in a federal referendum if you are:
                                - a Canadian citizen; and
                                - at least 18 years old on voting day; and
                                - on the voters’ list.'
                  ],
                  [
                    'text' => 'Which of the following is not an objective of the laws in Canada?',
                    'answers' => [
                      ['text' => 'Provide a peaceful way to settle disputes'],
                      ['text' => 'Provide order in society'],
                      ['text' => 'Put more people in jail'],
                      ['text' => 'Express the values and beliefs of Canadians'],
                    ],
                    'correctAnswerId' => 2463,
                    'correct_answer' => 'C',
                    'explanation' => 'Our laws are intended to provide order in society and a peaceful way to settle disputes, and to express the values and beliefs of Canadians.'
                  ],
                  [
                    'text' => 'In which province(s) does the RCMP not serve as the provincial police?',
                    'answers' => [
                      ['text' => 'Manitoba and Alberta'],
                      ['text' => 'Ontario'],
                      ['text' => 'Quebec'],
                      ['text' => 'Ontario and Quebec'],
                    ],
                    'correctAnswerId' => 2468,
                    'correct_answer' => 'D',
                    'explanation' => 'The Royal Canadian Mounted Police (RCMP) enforce federal laws throughout Canada, and serve as the provincial police in all provinces and territories except Ontario and Quebec, as well as in some municipalities.'
                  ],
                  [
                    'text' => 'In Canada, how are the rules made?',
                    'answers' => [
                      ['text' => 'By the Prime Minister'],
                      ['text' => 'By the Queen'],
                      ['text' => 'By the people'],
                      ['text' => 'By elected representatives'],
                    ],
                    'correctAnswerId' => 2472,
                    'correct_answer' => 'D',
                    'explanation' => 'Canada is governed by an organized system of laws. These laws are the written rules intended to guide people in our society. They are made by elected representatives.'
                  ],
                  [
                    'text' => 'What information does the Elector Card contain?',
                    'answers' => [
                      ['text' => 'The number to call if an interpreter or other special services are required'],
                      ['text' => 'When and where to vote and the number to call if an interpreter or other special services are required'],
                      ['text' => 'When and where to vote'],
                      ['text' => 'The elector\'s name'],
                    ],
                    'correctAnswerId' => 2474,
                    'correct_answer' => 'B',
                    'explanation' => 'Once an election has been called, Elections Canada mails a voter information card to each elector whose name is in the National Register of Electors. The card lists when and where you vote and the number to call if you require an interpreter or other special services.'
                  ],
                  [
                    'text' => 'In Canada, how are the laws administered?',
                    'answers' => [
                      ['text' => 'In a partial manner, the facts may be taken into consideration'],
                      ['text' => 'In an impartial manner, only the facts are taken into consideration'],
                      ['text' => 'Randomly, it depends on the judge\'s personal opinion'],
                      ['text' => 'Only by the police'],
                    ],
                    'correctAnswerId' => 2478,
                    'correct_answer' => 'B',
                    'explanation' => 'Justice in Canada is like the blindfolded Lady Justice. It symbolizes the impartial manner in which our laws are administered: blind to all considerations but the facts.'
                  ],
                  [
                    'text' => 'If you cannot pay for a lawyer, how can you get legal help?',
                    'answers' => [
                      ['text' => 'Apply for financial aid with the Court'],
                      ['text' => 'Go to legal aid services available in most communities'],
                      ['text' => 'Go to the Police'],
                      ['text' => 'Borrow money from the government'],
                    ],
                    'correctAnswerId' => 2482,
                    'correct_answer' => 'B',
                    'explanation' => 'Lawyers can help you with legal problems and act for you in court. If you cannot pay for a lawyer, in most communities there are legal aid services available free of charge or at a low cost.'
                  ],
                  [
                    'text' => 'Who will receive a voter information card?',
                    'answers' => [
                      ['text' => 'Electors whose information is in the National Register of Electors'],
                      ['text' => 'Everybody'],
                      ['text' => 'Electors who own a house'],
                      ['text' => 'Electors who are 18 years or older'],
                    ],
                    'correctAnswerId' => 2485,
                    'correct_answer' => 'A',
                    'explanation' => 'Once an election has been called, Elections Canada mails a voter information card to each elector whose name is in the National Register of Electors.'
                  ],
                  [
                    'text' => 'What does RCMP stand for?',
                    'answers' => [
                      ['text' => 'Registered Canadian Mounted Police'],
                      ['text' => 'Royal Canadian Mounted Police'],
                      ['text' => 'Roy\'s Corona Military Police'],
                      ['text' => 'Royal California Miller Protection'],
                    ],
                    'correctAnswerId' => 2490,
                    'correct_answer' => 'B',
                    'explanation' => 'Today, the Royal Canadian Mounted Police (RCMP or “the Mounties”) are the national police force and one of Canada’s best-known symbols.'
                  ],
                  [
                    'text' => 'In Canada, what is the definition of "law"?',
                    'answers' => [
                      ['text' => 'The written rules intended to guide people in our society'],
                      ['text' => 'The rules only applicable to a certain category of people'],
                      ['text' => 'The rules intended to punish people whenever possible'],
                      ['text' => 'The oral rules intended to guide people in our society'],
                    ],
                    'correctAnswerId' => 2493,
                    'correct_answer' => 'A',
                    'explanation' => 'Canada is governed by an organized system of laws. These laws are the written rules intended to guide people in our society.'
                  ],
                ]
              ],
            ],
            'topics' => [
              ['name' => 'The Justice System'],
            ],
            'flashcards' => [
              [
                'question' => 'Who do the citizens in each electoral district elect?',
                'answer' => 'Member of Parliament',
                'explanation' => 'The citizens in each electoral district elect one MP who sits in the House of Commons to represent them, as well as all Canadians.'
              ],
              [
                'question' => 'What does the Canadian justice system guarantee?',
                'answer' => 'Due process under the law',
                'explanation' => 'The Canadian justice system guarantees everyone due process under the law. Our judicial system is founded on the presumption of innocence in criminal matters, meaning everyone is innocent until proven guilty.'
              ],
              [
                'question' => 'In Canada, how are the laws administered?',
                'answer' => 'In an impartial manner, only the facts are taken into consideration',
                'explanation' => 'Justice in Canada is like the blindfolded Lady Justice. It symbolizes the impartial manner in which our laws are administered: blind to all considerations but the facts.'
              ],
              [
                'question' => 'In Canada, how are the rules made?',
                'answer' => 'By elected representatives',
                'explanation' => 'Canada is governed by an organized system of laws. These laws are the written rules intended to guide people in our society. They are made by elected representatives.'
              ],
              [
                'question' => 'What is the role of the police in Canada?',
                'answer' => 'To keep people safe and to enforce the law',
                'explanation' => 'The police are there to keep people safe and to enforce the law. You can ask the police for help in all kinds of situations—if there’s been an accident, if someone has stolen something from you, if you are a victim of assault, if you see a crime taking place or if someone you know has gone missing.'
              ],
              [
                'question' => 'How many candidates can there be in an electoral district?',
                'answer' => 'Many',
                'explanation' => 'The people who run for office are called candidates. There can be many candidates in an electoral district.'
              ],
              [
                'question' => 'What does RCMP stand for?',
                'answer' => 'Royal Canadian Mounted Police',
                'explanation' => 'Today, the Royal Canadian Mounted Police (RCMP or “the Mounties”) are the national police force and one of Canada’s best-known symbols.'
              ],
              [
                'question' => 'Who will receive a voter information card?',
                'answer' => 'Electors whose information is in the National Register of Electors',
                'explanation' => 'Once an election has been called, Elections Canada mails a voter information card to each elector whose name is in the National Register of Electors.'
              ],
              [
                'question' => 'If you cannot pay for a lawyer, how can you get legal help?',
                'answer' => 'Go to legal aid services available in most communities',
                'explanation' => 'Lawyers can help you with legal problems and act for you in court. If you cannot pay for a lawyer, in most communities there are legal aid services available free of charge or at a low cost.'
              ],
              [
                'question' => 'In Canada, what is the definition of "law"?',
                'answer' => 'The written rules intended to guide people in our society',
                'explanation' => 'Canada is governed by an organized system of laws. These laws are the written rules intended to guide people in our society.'
              ],
              [
                'question' => 'In a federal election, in each electoral district, what does the candidate who receives the most votes become?',
                'answer' => 'The MP',
                'explanation' => 'The people in each electoral district vote for the candidate and political party of their choice. The candidate who receives the most votes becomes the MP for that electoral district.'
              ],
              [
                'question' => 'Who has the right to vote in a federal election?',
                'answer' => 'A Canadian citizen, at least 18 years old on voting day and on the voters\' list',
                'explanation' => 'One of the privileges of Canadian citizenship is the right to vote. You are eligible to vote in a federal election or cast a ballot in a federal referendum if you are:
                        - a Canadian citizen; and
                        - at least 18 years old on voting day; and
                        - on the voters’ list.'
              ],
              [
                'question' => 'What do Canadians vote for in a federal election?',
                'answer' => 'The people they want to represent them in the House of Commons',
                'explanation' => 'Canadians vote in elections for the people they want to represent them in the House of Commons. In each election, voters may re-elect the same members of the House of Commons or choose new ones.'
              ],
              [
                'question' => 'In the Canadian justice system, what is the "presumption of innocence"?',
                'answer' => 'Everyone is innocent until proven guilty',
                'explanation' => 'The Canadian justice system guarantees everyone due process under the law. Our judicial system is founded on the presumption of innocence in criminal matters, meaning everyone is innocent until proven guilty.'
              ],
              [
                'question' => 'In which province(s) does the RCMP not serve as the provincial police?',
                'answer' => 'Ontario and Quebec',
                'explanation' => 'The Royal Canadian Mounted Police (RCMP) enforce federal laws throughout Canada, and serve as the provincial police in all provinces and territories except Ontario and Quebec, as well as in some municipalities.'
              ],
              [
                'question' => 'What information does the Elector Card contain?',
                'answer' => 'When and where to vote and the number to call if an interpreter or other special services are required',
                'explanation' => 'Once an election has been called, Elections Canada mails a voter information card to each elector whose name is in the National Register of Electors. The card lists when and where you vote and the number to call if you require an interpreter or other special services.'
              ]
            ]
          ],
          [
            'image' => '/images/chap 10.png',
            'name' => 'Chapter 9',
            'title' => 'Canadian Symbols',
            'description' => "Introduce yourself to Canada's most important national symbols, such as the maple leaf, flag, coat of arms, and significant landmarks.",
            'questions' => 20,
            'mistakes' => 5,
            'step' => 2,
            'tests' => [
              [
                'name' => 'Practice Test 9.1',
                'info' => 'Practice Test 9.1',
                'questions' =>
                [
                  [
                    'text' => 'What is the name of the Royal Anthem of Canada?',
                    'answers' => [
                      ['text' => 'Great Canada'],
                      ['text' => 'O Canada'],
                      ['text' => 'God Save the King (or Queen)'],
                      ['text' => 'Oh Canada'],
                    ],
                    'correctAnswerId' => 2499,
                    'correct_answer' => 'C',
                    'explanation' => 'The Royal Anthem of Canada, “God Save the King (or Queen)”, can be played or sung on any occasion when Canadians wish to honour the Sovereign. (P40)'
                  ],
                  [
                    'text' => 'What is the primary role of the police in Canada?',
                    'answers' => [
                      ['text' => 'To resolve disputes and interpret law'],
                      ['text' => 'To keep people safe and to enforce the law'],
                      ['text' => 'To provide National Security intelligence to the government'],
                      ['text' => 'To conduct or support land Warfare, peacekeeping, or humanitarian missions'],
                    ],
                    'correctAnswerId' => 2502,
                    'correct_answer' => 'B',
                    'explanation' => 'The police are there to keep people safe and to enforce the law. (P37)'
                  ],
                  [
                    'text' => 'What are the two official languages of Canada?',
                    'answers' => [
                      ['text' => 'Inuktitut and English'],
                      ['text' => 'French and inactive'],
                      ['text' => 'English and French'],
                      ['text' => 'Mandarin and English'],
                    ],
                    'correctAnswerId' => 2507,
                    'correct_answer' => 'C',
                    'explanation' => 'English and French are the two official languages and are important symbols of identity. (P39)'
                  ],
                  [
                    'text' => 'What does the crown mean for Canadians?',
                    'answers' => [
                      ['text' => 'The crown is a symbol of government, including Parliament legislatures, courts, police services and the Armed Forces'],
                      ['text' => 'The crown contains symbols of England, France, Scotland, and Ireland, as well as red maple leaves'],
                      ['text' => 'A national motto, A mari usque Ad Mare, which, in Latin, means “from sea to sea”.'],
                      ['text' => 'The crown reflects the Greco-Roman heritage of Western civilization in which democracy originated'],
                    ],
                    'correctAnswerId' => 2509,
                    'correct_answer' => 'A',
                    'explanation' => 'The Crown is a symbol of government, including Parliament, the legislatures, the courts, police services and the Canadian Forces. (P38)'
                  ],
                  [
                    'text' => 'What is the meaning of the Canadian Coat of Arms and motto “A Mari Usque Ad Mare”?',
                    'answers' => [
                      ['text' => 'From Air to land'],
                      ['text' => 'From sea to land'],
                      ['text' => 'From land to Sea'],
                      ['text' => 'From sea to sea'],
                    ],
                    'correctAnswerId' => 2516,
                    'correct_answer' => 'D',
                    'explanation' => 'A Mari Usque Ad Mare, which in Latin means “from sea to sea”. (P38)'
                  ],
                  [
                    'text' => 'What are the colors present in the Canadian flag?',
                    'answers' => [
                      ['text' => 'Blue and white'],
                      ['text' => 'Red and white'],
                      ['text' => 'Green and white'],
                      ['text' => 'Red and blue'],
                    ],
                    'correctAnswerId' => 2518,
                    'correct_answer' => 'B',
                    'explanation' => 'The red-white-red pattern comes from the flag of the Royal Military College, Kingston, founded in 1876. (P38)'
                  ],
                  [
                    'text' => 'What is the significance of hockey?',
                    'answers' => [
                      ['text' => 'It is the national summer sport'],
                      ['text' => 'It is the most popular spectator sport in Canada and also its National winter sport'],
                      ['text' => 'Canada won a gold medal in 2008\'s Olympics in this event'],
                      ['text' => 'None of these'],
                    ],
                    'correctAnswerId' => 2522,
                    'correct_answer' => 'B',
                    'explanation' => 'Hockey is Canada’s most popular spectator sport and is considered to be the national winter sport. (P39)'
                  ],
                  [
                    'text' => 'What is celebrated on the 26th of December?',
                    'answers' => [
                      ['text' => 'Remembrance Day'],
                      ['text' => 'Victoria Day'],
                      ['text' => 'Boxing Day'],
                      ['text' => 'Canada Day'],
                    ],
                    'correctAnswerId' => 2527,
                    'correct_answer' => 'C',
                    'explanation' => 'Boxing Day is celebrated on the 26th of December. (P41)'
                  ],
                  [
                    'text' => 'What is Canada\'s national winter sport?',
                    'answers' => [
                      ['text' => 'Lacrosse'],
                      ['text' => 'Basketball'],
                      ['text' => 'Hockey'],
                      ['text' => 'Golf'],
                    ],
                    'correctAnswerId' => 2531,
                    'correct_answer' => 'C',
                    'explanation' => 'Hockey is Canada’s most popular spectator sport and is considered to be the national winter sport. (P39)'
                  ],
                  [
                    'text' => 'When was the current flag of Canada raised for the first time?',
                    'answers' => [
                      ['text' => '1921'],
                      ['text' => '1965'],
                      ['text' => '1949'],
                      ['text' => '1892'],
                    ],
                    'correctAnswerId' => 2534,
                    'correct_answer' => 'B',
                    'explanation' => 'A new Canadian flag was raised for the first time in 1965. (P38)'
                  ],
                  [
                    'text' => 'Who are Anglophones?',
                    'answers' => [
                      ['text' => 'People who were taught English at school'],
                      ['text' => 'People who understand but do not speak English'],
                      ['text' => 'People who do not speak English as a first language'],
                      ['text' => 'People speaking English as a first language'],
                    ],
                    'correctAnswerId' => 2540,
                    'correct_answer' => 'D',
                    'explanation' => 'English speakers (Anglophones) and French speakers (Francophones) have lived together in partnership and creative tension for more than 300 years. (P39)'
                  ],
                  [
                    'text' => 'Which of the following best describes the sport of Lacrosse?',
                    'answers' => [
                      ['text' => 'The official winter sport'],
                      ['text' => 'The second most popular sport in Canada'],
                      ['text' => 'The official summer sport'],
                      ['text' => 'The most popular sport in Canada'],
                    ],
                    'correctAnswerId' => 2543,
                    'correct_answer' => 'C',
                    'explanation' => 'Lacrosse, an ancient sport first played by Aboriginals, is the official summer sport. (P39)'
                  ],
                  [
                    'text' => 'What is the highest honor available to Canadians?',
                    'answers' => [
                      ['text' => 'The Queen\'s Medal'],
                      ['text' => 'Elizabeth cross'],
                      ['text' => 'Victoria medal'],
                      ['text' => 'Victoria Cross'],
                    ],
                    'correctAnswerId' => 2548,
                    'correct_answer' => 'D',
                    'explanation' => 'The Victoria Cross (V.C.) is the highest honour available to Canadians and is awarded for the most conspicuous bravery, a daring or pre-eminent act of valour or self-sacrifice, or extreme devotion to duty in the presence of the enemy. (P41)'
                  ],
                  [
                    'text' => 'When does Canada celebrate Thanksgiving?',
                    'answers' => [
                      ['text' => 'The second Monday of October'],
                      ['text' => 'The first Friday of October'],
                      ['text' => 'The first Monday of September'],
                      ['text' => 'The first Monday of July'],
                    ],
                    'correctAnswerId' => 2549,
                    'correct_answer' => 'A',
                    'explanation' => 'Canada celebrates Thanksgiving on the second Monday of October. (P41)'
                  ],
                  [
                    'text' => 'What is the symbol of the Canadian government?',
                    'answers' => [
                      ['text' => 'The parliament'],
                      ['text' => 'The crown'],
                      ['text' => 'The national flag'],
                      ['text' => 'The snowbirds'],
                    ],
                    'correctAnswerId' => 2554,
                    'correct_answer' => 'B',
                    'explanation' => 'The Crown is a symbol of government, including Parliament, the legislatures, the courts, police services and the Canadian Forces. (P38)'
                  ],
                  [
                    'text' => 'How many Canadians have been awarded the Victoria Cross?',
                    'answers' => [
                      ['text' => '96'],
                      ['text' => '500'],
                      ['text' => '2'],
                      ['text' => '1222'],
                    ],
                    'correctAnswerId' => 2557,
                    'correct_answer' => 'A',
                    'explanation' => 'The Victoria Cross (V.C.) has been awarded to 96 Canadians since 1854 for acts of valour. (P41)'
                  ],
                  [
                    'text' => 'Which animal is an official symbol of Canada?',
                    'answers' => [
                      ['text' => 'The bear'],
                      ['text' => 'The moose'],
                      ['text' => 'The beaver'],
                      ['text' => 'The snowbird'],
                    ],
                    'correctAnswerId' => 2563,
                    'correct_answer' => 'C',
                    'explanation' => 'The beaver is an official symbol of Canada, appearing on coins and various coats of arms. (P39)'
                  ],
                  [
                    'text' => 'When is Sir Wilfred Laurier Day celebrated?',
                    'answers' => [
                      ['text' => '12th of November'],
                      ['text' => '20th of November'],
                      ['text' => '22nd of November'],
                      ['text' => '2nd of November'],
                    ],
                    'correctAnswerId' => 2566,
                    'correct_answer' => 'B',
                    'explanation' => 'Sir Wilfred Laurier Day is celebrated on the 20th of November. (P41)'
                  ],
                  [
                    'text' => 'Where do English and French have equal status in Canada?',
                    'answers' => [
                      ['text' => 'In the workplace'],
                      ['text' => 'In schools'],
                      ['text' => 'In the Parliament of Canada'],
                      ['text' => 'At the city hall'],
                    ],
                    'correctAnswerId' => 2571,
                    'correct_answer' => 'C',
                    'explanation' => 'English and French have equal status in the Parliament of Canada, as per the Official Languages Act of 1969. (P39)'
                  ],
                  [
                    'text' => 'Who is exempted from the requirement of adequate knowledge of English or French in order to become a Canadian citizen?',
                    'answers' => [
                      ['text' => 'Anyone who doesn\'t live in a major city'],
                      ['text' => 'Anyone who doesn\'t want to'],
                      ['text' => 'Any adult applicants who are 55 years of age and over'],
                      ['text' => 'Any adult applicants who are 55 years of age and under'],
                    ],
                    'correctAnswerId' => 2575,
                    'correct_answer' => 'C',
                    'explanation' => 'Adult applicants who are 55 years of age and over are exempted from the requirement of adequate knowledge of English or French to become a Canadian citizen. (P39)'
                  ],
                ]
              ],
              [
                'name' => 'Practice Test 9.2',
                'info' => 'Practice Test 9.2',
                'questions' =>
                [
                  [
                    'text' => 'What does the Canadian flag look like?',
                    'answers' => [
                      ['text' => 'Red with a white Maple Leaf'],
                      ['text' => 'Red and white with a bear'],
                      ['text' => 'White with a red border on each end and a red maple leaf in the center'],
                      ['text' => 'Red and white with provincial emblems'],
                    ],
                    'correctAnswerId' => 2579,
                    'correct_answer' => 'C',
                    'explanation' => 'The Canadian flag is white with a red border on each end and a red maple leaf in the center. (P38)'
                  ],
                  [
                    'text' => 'What does the Canadian Crown symbolize?',
                    'answers' => [
                      ['text' => 'A Mari Usque Ad Mare.'],
                      ['text' => 'Symbols of England, France, Scotland, and Ireland'],
                      ['text' => 'RCMP, the national police force and one of Canada\'s best-known symbols'],
                      ['text' => 'Canada is a constitutional monarchy'],
                    ],
                    'correctAnswerId' => 2584,

                    'explanation' => 'The Canadian Crown symbolizes Canada as a constitutional monarchy. It has been a symbol of the state in Canada for 400 years. (P38)'
                  ],
                  [
                    'text' => 'Who is awarded the honor of Victoria Cross?',
                    'answers' => [
                      ['text' => 'Canadian politicians'],
                      ['text' => 'Police officers'],
                      ['text' => 'Best innovation of the year'],
                      ['text' => 'A Canadian showing conspicuous bravery or self-sacrifice'],
                    ],
                    'correctAnswerId' => 2588,
                    'explanation' => 'The Victoria Cross (V.C.) is awarded to Canadians showing conspicuous bravery or self-sacrifice. It is the highest honour available. (P41)'
                  ],
                  [
                    'text' => 'Which sport has the greatest number of registered players in Canada?',
                    'answers' => [
                      ['text' => 'Lacrosse'],
                      ['text' => 'Soccer'],
                      ['text' => 'Curling'],
                      ['text' => 'Basketball'],
                    ],
                    'correctAnswerId' => 2590,
                    'explanation' => 'Soccer has the most registered players of any game in Canada. (P39)'
                  ],
                  [
                    'text' => 'Which one of these is a Canadian icon?',
                    'answers' => [
                      ['text' => 'The national flag'],
                      ['text' => 'The crown'],
                      ['text' => 'The snowbirds'],
                      ['text' => 'The arms'],
                    ],
                    'correctAnswerId' => 2595,
                    'explanation' => 'The Snowbirds (431 Air Demonstration Squadron) are considered a Canadian icon. (P38)'
                  ],
                  [
                    'text' => 'What is the last line of our national anthem?',
                    'answers' => [
                      ['text' => 'God keep our land glorious and free!'],
                      ['text' => 'The true north strong and free!'],
                      ['text' => 'O Canada! Our home and native land!'],
                      ['text' => 'O Canada, we stand on guard for thee!'],
                    ],
                    'correctAnswerId' => 2600,
                    'explanation' => 'The last line of Canada\'s national anthem "O Canada" is "O Canada, we stand on guard for thee!" (P40)'
                  ],
                  [
                    'text' => 'The arms that can be seen on dollar bills contain symbols of:',
                    'answers' => [
                      ['text' => 'Scotland and Ireland'],
                      ['text' => 'England and France'],
                      ['text' => 'Red maple leaves'],
                      ['text' => 'All of the above'],
                    ],
                    'correctAnswerId' => 2604,
                    'explanation' => 'The arms on Canadian dollar bills contain symbols of England, France, Scotland, and Ireland, as well as red maple leaves. (P38)'
                  ],
                  [
                    'text' => 'Who are Francophones?',
                    'answers' => [
                      ['text' => 'People speaking French as a first language'],
                      ['text' => 'People who come from France'],
                      ['text' => 'People who are learning French'],
                      ['text' => 'People speaking French as a secondary language'],
                    ],
                    'correctAnswerId' => 2605,
                    'explanation' => 'Francophones are people who speak French as their first language. (P39)'
                  ],
                  [
                    'text' => 'What song is Canada\'s National Anthem?',
                    'answers' => [
                      ['text' => 'God Save the Queen (or King)'],
                      ['text' => 'O Canada'],
                      ['text' => 'Oh Canada'],
                      ['text' => 'Great Canada'],
                    ],
                    'correctAnswerId' => 2610,
                    'explanation' => '"O Canada" was proclaimed as Canada\'s national anthem in 1980. It was first sung in Québec City in 1880. (P40)'
                  ],
                  [
                    'text' => 'When is Labor Day celebrated in Canada?',
                    'answers' => [
                      ['text' => 'The 1st of July'],
                      ['text' => 'The first Monday of September'],
                      ['text' => 'The 1st of May'],
                      ['text' => 'The 3rd Monday of October'],
                    ],
                    'correctAnswerId' => 2614,
                    'explanation' => 'Labor Day is celebrated in Canada on the first Monday of September. (P41)'
                  ],
                  [
                    'text' => 'What is the most popular spectator sport of Canada?',
                    'answers' => [
                      ['text' => 'Soccer'],
                      ['text' => 'Canadian football'],
                      ['text' => 'Hockey'],
                      ['text' => 'Basketball'],
                    ],
                    'correctAnswerId' => 2619,
                    'explanation' => 'Hockey is Canada\'s most popular spectator sport and is considered to be the national winter sport. (P39)'
                  ],
                  [
                    'text' => 'The Peace Tower was built in memory of:',
                    'answers' => [
                      ['text' => 'The First World War'],
                      ['text' => 'The Second World War'],
                      ['text' => 'The Korean War'],
                      ['text' => 'The Battle of the Plains of Abraham'],
                    ],
                    'correctAnswerId' => 2621,
                    'explanation' => 'The Peace Tower was completed in 1927 in memory of the First World War. (P39)'
                  ],
                  [
                    'text' => 'Which legal documents protect the rights of Canadians with regards to the official languages?',
                    'answers' => [
                      ['text' => 'British Charter of Rights and Freedoms'],
                      ['text' => 'Canadian Constitution and Official Languages Act'],
                      ['text' => 'Canadian Languages Act'],
                      ['text' => 'Official English Act'],
                    ],
                    'correctAnswerId' => 2626,
                    'explanation' => 'The rights of Canadians regarding official languages are protected by the Canadian Constitution and the Official Languages Act. (P39)'
                  ],
                  [
                    'text' => 'When was the modern Canadian Flag first raised?',
                    'answers' => [
                      ['text' => '1855'],
                      ['text' => '1999'],
                      ['text' => '1865'],
                      ['text' => '1965'],
                    ],
                    'correctAnswerId' => 2632,

                    'explanation' => 'The modern Canadian flag was first raised in 1965. The red-white-red pattern comes from the flag of the Royal Military College, Kingston, founded in 1876. (P38)'
                  ],
                  [
                    'text' => 'In which of the following situations can you not ask the police for help?',
                    'answers' => [
                      ['text' => 'There has been an accident'],
                      ['text' => 'You are a victim of assault'],
                      ['text' => 'Someone has stolen something from you'],
                      ['text' => 'Your water pipes are leaking'],
                    ],
                    'correctAnswerId' => 2636,

                    'explanation' => 'You can ask the police for help in situations such as accidents, assault, theft, or if you witness a crime. (P37)'
                  ],
                  [
                    'text' => 'In Canada, what does the Crown symbolize?',
                    'answers' => [
                      ['text' => 'The government, including Parliament, the legislatures, the courts, police services and the Canadian Forces'],
                      ['text' => 'The Queen'],
                      ['text' => 'The government'],
                      ['text' => 'The RCMP'],
                    ],
                    'correctAnswerId' => 2637,

                    'explanation' => 'The Crown is a symbol of government in Canada, including Parliament, courts, police services, and the Canadian Forces. (P38)'
                  ],
                  [
                    'text' => 'When were the Parliament buildings completed?',
                    'answers' => [
                      ['text' => 'In the 1920s'],
                      ['text' => 'In the 1860s'],
                      ['text' => 'In the 1820s'],
                      ['text' => 'In the 1780s'],
                    ],
                    'correctAnswerId' => 2642,

                    'explanation' => 'The Parliament buildings were completed in the 1860s. The Centre Block was destroyed by fire in 1916 and rebuilt in 1922. (P39)'
                  ],
                  [
                    'text' => 'When was O Canada declared the National anthem?',
                    'answers' => [
                      ['text' => '1805'],
                      ['text' => '1822'],
                      ['text' => '1920'],
                      ['text' => '1980'],
                    ],
                    'correctAnswerId' => 2648,

                    'explanation' => 'O Canada was proclaimed as the national anthem in 1980. It was first sung in Québec City in 1880. French and English Canadians sing different words to the national anthem. (P40)'
                  ],
                  [
                    'text' => 'What do Canadians celebrate on Victoria Day?',
                    'answers' => [
                      ['text' => 'The Sovereign\'s birthday'],
                      ['text' => 'The Birth of Christ'],
                      ['text' => 'The sacrifices of Canadian veterans and brave fallen in all wars'],
                      ['text' => 'The Canadian Victory in the war of 1812 against the United States'],
                    ],
                    'correctAnswerId' => 2649,

                    'explanation' => 'Canadians celebrate the Sovereign’s birthday on Victoria Day, which falls on the Monday preceding May 25. (P41)'
                  ],
                  [
                    'text' => 'Who are Anglophones?',
                    'answers' => [
                      ['text' => 'People who speak English'],
                      ['text' => 'French speakers in Canada'],
                      ['text' => 'Members of the Anglican Church'],
                      ['text' => 'Native Indian People'],
                    ],

                    'correctAnswerId' => 2653,
                    'explanation' => 'Anglophones are people who speak English as their first language. English and French are the two official languages of Canada. (P39)'
                  ],
                ]
              ],
              [
                'name' => 'Practice Test 9.3',
                'info' => 'Practice Test 9.3',
                'questions' => [

                  [
                    'text' => 'For what is the Victoria Cross awarded?',
                    'answers' => [
                      ['text' => 'The best Canadian film-making of the year'],
                      ['text' => 'The most conspicuous bravery or self-sacrifice in the presence of the enemy'],
                      ['text' => 'The most brilliant scientific research'],
                      ['text' => 'The best hockey player in the Stanley Cup'],
                    ],

                    'correctAnswerId' => 2658,
                    'explanation' => 'The Victoria Cross (V.C.) is the highest honour available to Canadians and is awarded for the most conspicuous bravery, a daring or pre-eminent act of valour or self-sacrifice, or extreme devotion to duty in the presence of the enemy.',
                  ],
                  [
                    'text' => 'What is Canada’s national winter sport?',
                    'answers' => [
                      ['text' => 'Skiing'],
                      ['text' => 'Ice Hockey'],
                      ['text' => 'Ice fishing'],
                      ['text' => 'Ice skating'],
                    ],
                    'correctAnswerId' => 2662,
                    'explanation' => 'Ice hockey is considered Canada’s national winter sport, with Canadian teams historically dominating at the international level.',
                  ],
                  [
                    'text' => 'What is the origin of the beaver as a symbol of Canada?',
                    'answers' => [
                      ['text' => 'The beaver was adopted centuries ago as a symbol of the fur trade in general'],
                      ['text' => 'The beaver was adopted centuries ago as a mascot by the first pioneers'],
                      ['text' => 'The beaver was adopted centuries ago as a mascot by the Natives'],
                      ['text' => 'The beaver was adopted centuries ago as a symbol of the Hudson\'s Bay Company'],
                    ],

                    'correctAnswerId' => 2668,
                    'explanation' => 'The beaver was adopted centuries ago as a symbol of the Hudson’s Bay Company. It became an emblem of the St. Jean Baptiste Society, a French-Canadian patriotic association, in 1834, and was also adopted by other groups.',
                  ],
                  [
                    'text' => 'What year did Canada start its own honours system?',
                    'answers' => [
                      ['text' => '1889'],
                      ['text' => '1867'],
                      ['text' => '1947'],
                      ['text' => '1967'],
                    ],

                    'correctAnswerId' => 2672,
                    'explanation' => 'After using British honours for many years, Canada started its own honours system with the Order of Canada in 1967, the centennial of Confederation.',
                  ],
                  [
                    'text' => 'When was "O Canada" proclaimed as the national anthem?',
                    'answers' => [
                      ['text' => '1867'],
                      ['text' => '1889'],
                      ['text' => '1980'],
                      ['text' => '1947'],
                    ],

                    'correctAnswerId' => 2675,
                    'explanation' => 'O Canada was proclaimed as the national anthem in 1980. It was first sung in Québec City in 1880. French and English Canadians sing different words to the national anthem.',
                  ],
                  [
                    'text' => 'What does the Canadian flag look like?',
                    'answers' => [
                      ['text' => 'Red maple leaf on a white background'],
                      ['text' => 'Red-white-red stripes with a red maple leaf in the center'],
                      ['text' => 'Red-white-red stripes with the Queen emblem in the center'],
                      ['text' => 'Red-white-red stripes with a red lily flower in the center'],
                    ],

                    'correctAnswerId' => 2678,
                    'explanation' => 'A new Canadian flag was raised for the first time in 1965. The red-white-red pattern comes from the flag of the Royal Military College, Kingston, founded in 1876.',
                  ],
                  [
                    'text' => 'What is the meaning of the Canadian national motto, "A Mari Usque Ad Mare"?',
                    'answers' => [
                      ['text' => 'From east to west'],
                      ['text' => 'From mountains to sea'],
                      ['text' => '"From sea to sea"'],
                      ['text' => 'From land to land'],
                    ],

                    'correctAnswerId' => 2683,
                    'explanation' => 'As an expression of national pride after the First World War, Canada adopted an official coat of arms and a national motto, A mari usque ad mare, which in Latin means “from sea to sea.” The arms contain symbols of England, France, Scotland and Ireland as well as red maple leaves.',
                  ],
                  [
                    'text' => 'For which championship does the National Hockey League play?',
                    'answers' => [
                      ['text' => 'Clarkson Cup'],
                      ['text' => 'NHL Cup'],
                      ['text' => 'Stanley Cup'],
                      ['text' => 'The All Star Hockey Cup'],
                    ],

                    'correctAnswerId' => 2687,
                    'explanation' => 'The National Hockey League (NHL) plays for the championship Stanley Cup, donated by Lord Stanley, the Governor General, in 1892.',
                  ],
                  [
                    'text' => 'For how many years has the Crown been a symbol of the state in Canada?',
                    'answers' => [
                      ['text' => '300'],
                      ['text' => '400'],
                      ['text' => '200'],
                      ['text' => '100'],
                    ],

                    'correctAnswerId' => 2690,
                    'explanation' => 'The Crown has been a symbol of the state in Canada for 400 years. Canada has been a constitutional monarchy in its own right since Confederation in 1867 during Queen Victoria’s reign.',
                  ],
                  [
                    'text' => 'When do Canadians celebrate Labour Day?',
                    'answers' => [
                      ['text' => 'First Monday of September'],
                      ['text' => 'Third Monday of October'],
                      ['text' => 'Third Monday of September'],
                      ['text' => 'Second Monday of September'],
                    ],

                    'correctAnswerId' => 2693,
                    'explanation' => 'Labour Day is celebrated on the first Monday of September.',
                  ],
                  [
                    'text' => 'In Canada, who is above the law?',
                    'answers' => [
                      ['text' => 'The Prime Minister'],
                      ['text' => 'The King or Queen'],
                      ['text' => 'Nobody'],
                      ['text' => 'The police'],
                    ],

                    'correctAnswerId' => 2699,
                    'explanation' => 'One of Canada’s founding principles is the rule of law. Individuals and governments are regulated by laws and not by arbitrary actions. No person or group is above the law.',
                  ],
                  [
                    'text' => 'When do Canadians celebrate Vimy Day?',
                    'answers' => [
                      ['text' => 'April 9th'],
                      ['text' => 'February 9th'],
                      ['text' => 'April 10th'],
                      ['text' => 'March 9th'],
                    ],

                    'correctAnswerId' => 2701,
                    'explanation' => 'April 9th is celebrated as Vimy Day in Canada, commemorating the Battle of Vimy Ridge.',
                  ],
                  [
                    'text' => 'What does the Federal Court deal with?',
                    'answers' => [
                      ['text' => 'Matters concerning National Defence'],
                      ['text' => 'Matters concerning the federal and provincial government'],
                      ['text' => 'Matters concerning the police'],
                      ['text' => 'Matters concerning the federal government'],
                    ],

                    'correctAnswerId' => 2708,
                    'explanation' => 'The Federal Court of Canada deals with matters concerning the federal government.',
                  ],
                  [
                    'text' => 'What is Canada’s most popular spectator sport?',
                    'answers' => [
                      ['text' => 'Table Tennis'],
                      ['text' => 'Ice skating'],
                      ['text' => 'Ice hockey'],
                      ['text' => 'Football'],
                    ],

                    'correctAnswerId' => 2711,
                    'explanation' => 'Hockey is Canada’s most popular spectator sport and is considered to be the national winter sport. Ice hockey was developed in Canada in the 1800s.',
                  ],
                  [
                    'text' => 'What is the name of the Royal Anthem of Canada?',
                    'answers' => [
                      ['text' => 'Canada Save the Queen'],
                      ['text' => 'God Save Canada'],
                      ['text' => 'Canada Honour the Queen'],
                      ['text' => 'God Save the Queen'],
                    ],

                    'correctAnswerId' => 2716,
                    'explanation' => 'The Royal Anthem of Canada is “God Save the Queen (or King),” and it can be played or sung on any occasion when Canadians wish to honour the Sovereign.',
                  ],
                  [
                    'text' => 'What do you call the Canadian honours system that recognizes outstanding citizens?',
                    'answers' => [
                      ['text' => 'The Decoration of Canada'],
                      ['text' => 'The Medal of Canada'],
                      ['text' => 'The Order of Canada'],
                      ['text' => 'The Honour of Canada'],
                    ],

                    'correctAnswerId' => 2719,
                    'explanation' => 'The Order of Canada is part of Canada’s honours system that recognizes outstanding citizens. It was established in 1967.',
                  ],
                  [
                    'text' => 'Which of the following is not an objective of the Official Languages Act?',
                    'answers' => [
                      ['text' => 'Maintain and develop official language minority communities in Canada'],
                      ['text' => 'Establish equality between French and English in Parliament, the Government of Canada and institutions subject to the Act'],
                      ['text' => 'Restrict the ability to speak French outside of Quebec'],
                      ['text' => 'Promote equality of French and English in Canadian society'],
                    ],

                    'correctAnswerId' => 2723,
                    'explanation' => 'The Official Languages Act, passed in 1969, aims to establish equality between French and English in Parliament, the Government of Canada, and institutions subject to the Act. It also aims to maintain and develop official language minority communities in Canada and promote equality of French and English in Canadian society.',
                  ],
                  [
                    'text' => 'Which of the following is a criterion to become a Canadian citizen?',
                    'answers' => [
                      ['text' => 'Have a Canadian driving license'],
                      ['text' => 'Own property in Canada'],
                      ['text' => 'Have adequate knowledge of English or French'],
                      ['text' => 'Play hockey'],
                    ],

                    'correctAnswerId' => 2727,
                    'explanation' => 'One of the criteria to become a Canadian citizen is to have adequate knowledge of English or French. Immigrants between the ages of 18 and 54 must demonstrate proficiency in one of Canada’s official languages.',
                  ],
                  [
                    'text' => 'Which of the following is the only part of the original Parliament building that still remains?',
                    'answers' => [
                      ['text' => 'The Library'],
                      ['text' => 'The Memorial Chamber'],
                      ['text' => 'The Peace Tower'],
                      ['text' => 'The Centre Block'],
                    ],

                    'correctAnswerId' => 2731,
                    'explanation' => 'The Centre Block of the Parliament buildings was destroyed by an accidental fire in 1916 and rebuilt in 1922. The Library is the only part of the original building that remains intact.',
                  ],
                  [
                    'text' => 'When is the Royal Anthem of Canada sung?',
                    'answers' => [
                      ['text' => 'On any occasions when Canadians wish to honour the Queen or King'],
                      ['text' => 'Only when the Queen visits Canada'],
                      ['text' => 'Only on Canada Day'],
                      ['text' => 'Never'],
                    ],

                    'correctAnswerId' => 2733,
                    'explanation' => 'The Royal Anthem of Canada, “God Save the Queen (or King),” can be played or sung on any occasion when Canadians wish to honour the Sovereign.',
                  ],

                ]
              ],
              [
                'name' => 'Practice Test 9.4',
                'info' => 'Practice Test 9.4',
                'questions' => [
                  [
                    'text' => 'When was the maple leaf first adopted as a symbol in Canada?',
                    'answers' => [
                      ['text' => 'In the 1800s'],
                      ['text' => 'In the 1700s'],
                      ['text' => 'In the 1900s'],
                      ['text' => 'In the 1600s'],
                    ],

                    'correctAnswerId' => 2738,
                    'explanation' => 'The maple leaf was adopted as a symbol by French Canadians in the 1700s. It has since become Canada’s best-known national symbol.',
                  ],
                  [
                    'text' => 'What is the first sentence of the National Anthem?',
                    'answers' => [
                      ['text' => 'From far and wide, O Canada'],
                      ['text' => 'The true North strong and free!'],
                      ['text' => 'O Canada, we stand on guard for thee'],
                      ['text' => 'O Canada! Our home and native land!'],
                    ],

                    'correctAnswerId' => 2744,
                    'explanation' => 'The first sentence of the National Anthem of Canada, "O Canada," is "O Canada! Our home and native land!"',
                  ],
                  [
                    'text' => 'When is Sir John A. Macdonald Day celebrated in Canada?',
                    'answers' => [
                      ['text' => 'January 4th'],
                      ['text' => 'January 11th'],
                      ['text' => 'February 11th'],
                      ['text' => 'November 11th'],
                    ],

                    'correctAnswerId' => 2746,
                    'explanation' => 'Sir John A. Macdonald Day is celebrated on January 11th in Canada to honour his contributions as a lawyer, politician, and Prime Minister.',
                  ],
                  [
                    'text' => 'What is the official Royal Flag of Canada?',
                    'answers' => [
                      ['text' => 'The Royal Standard Flag'],
                      ['text' => 'The Union Jack Flag'],
                      ['text' => 'Her Majesty personal Flag'],
                      ['text' => 'The Royal Arms Flag'],
                    ],

                    'correctAnswerId' => 2750,
                    'explanation' => 'The official Royal Flag of Canada is the Union Jack Flag.',
                  ],
                  [
                    'text' => 'What kind of symbols does the Canadian coat of arms contain?',
                    'answers' => [
                      ['text' => 'Symbols of England, France, Scotland and Ireland as well as red maple leaves'],
                      ['text' => 'Symbols of England and red maple leaves'],
                      ['text' => 'Symbols of England, France and Scotland'],
                      ['text' => 'Symbols of England and France'],
                    ],

                    'correctAnswerId' => 2757,
                    'explanation' => 'The Canadian coat of arms contains symbols of England, France, Scotland, and Ireland, as well as red maple leaves.',
                  ],
                  [
                    'text' => 'Which sport has the most registered players of any game in Canada?',
                    'answers' => [
                      ['text' => 'Baseball'],
                      ['text' => 'Ice hockey'],
                      ['text' => 'Lacrosse'],
                      ['text' => 'Soccer'],
                    ],

                    'correctAnswerId' => 2764,
                    'explanation' => 'Soccer has the most registered players of any game in Canada, making it highly popular across the country.',
                  ],
                  [
                    'text' => 'What is the highest honour available to Canadians?',
                    'answers' => [
                      ['text' => 'The Royal Cross'],
                      ['text' => 'The Canadian Cross'],
                      ['text' => 'The Victoria Cross'],
                      ['text' => 'The British Cross'],
                    ],

                    'correctAnswerId' => 2767,
                    'explanation' => 'The Victoria Cross (V.C.) is the highest honour available to Canadians, awarded for conspicuous bravery or self-sacrifice in the presence of the enemy.',
                  ],
                  [
                    'text' => 'Who was the first Canadian to be awarded the Victoria Cross?',
                    'answers' => [
                      ['text' => 'Able Seaman William Hall of Horton'],
                      ['text' => 'Flying ace Captain Billy Bishop'],
                      ['text' => 'Corporal Filip Konowal'],
                      ['text' => 'Lieutenant Alexander Roberts Dunn'],
                    ],

                    'correctAnswerId' => 2772,
                    'explanation' => 'Lieutenant Alexander Roberts Dunn was the first Canadian to be awarded the Victoria Cross for his bravery in the Crimean War.',
                  ],
                  [
                    'text' => 'What is Canada’s official summer sport?',
                    'answers' => [
                      ['text' => 'Lacrosse'],
                      ['text' => 'Basketball'],
                      ['text' => 'Baseball'],
                      ['text' => 'Soccer'],
                    ],

                    'correctAnswerId' => 2773,
                    'explanation' => 'Lacrosse, an ancient sport first played by Aboriginals, is recognized as Canada’s official summer sport.',
                  ],
                  [
                    'text' => 'Why was the Peace Tower built in Ottawa?',
                    'answers' => [
                      ['text' => 'In memory of the First World War'],
                      ['text' => 'In memory of the Second World War'],
                      ['text' => 'In memory of the war between Canada and the United States'],
                      ['text' => 'To portray Canada as a peaceful nation'],
                    ],

                    'correctAnswerId' => 2777,
                    'explanation' => 'The Peace Tower in Ottawa was built in memory of the First World War and remains a significant national monument.',
                  ],
                  [
                    'text' => 'Why did Canada adopt an official coat of arms and a national motto?',
                    'answers' => [
                      ['text' => 'To imitate the United States'],
                      ['text' => 'As a direct request from the Queen of England'],
                      ['text' => 'As an expression of national pride after the First World War'],
                      ['text' => 'As an expression of imperialism after the First World War'],
                    ],

                    'correctAnswerId' => 2779,
                    'explanation' => 'Canada adopted an official coat of arms and a national motto, A mari usque ad mare ("From sea to sea"), as an expression of national pride after the First World War.',
                  ],
                  [
                    'text' => 'When do Canadians celebrate Sir Wilfrid Laurier Day?',
                    'answers' => [
                      ['text' => 'November 11th'],
                      ['text' => 'November 20th'],
                      ['text' => 'October 20th'],
                      ['text' => 'November 21st'],
                    ],

                    'correctAnswerId' => 2782,
                    'explanation' => 'Sir Wilfrid Laurier Day is celebrated on November 20th in Canada to honour his contributions as a Prime Minister.',
                  ],
                  [
                    'text' => 'Which one of the following is not a provincial court?',
                    'answers' => [
                      ['text' => 'Small claims court'],
                      ['text' => 'High court'],
                      ['text' => 'Court of Queen'],
                      ['text' => 'Traffic court'],
                    ],

                    'correctAnswerId' => 2786,
                    'explanation' => 'A high court is not typically classified as a provincial court in Canada.',
                  ],
                  [
                    'text' => 'Which of the following does not contain the Canadian coat of arms?',
                    'answers' => [
                      ['text' => 'RCMP logo'],
                      ['text' => 'Dollar bills'],
                      ['text' => 'Public buildings'],
                      ['text' => 'Government documents'],
                    ],

                    'correctAnswerId' => 2789,
                    'explanation' => 'The RCMP logo does not typically include the Canadian coat of arms, unlike dollar bills, public buildings, and government documents.',
                  ],
                  [
                    'text' => 'When did King Charles III become King?',
                    'answers' => [
                      ['text' => '2021'],
                      ['text' => '1654'],
                      ['text' => '2022'],
                      ['text' => '1988'],
                    ],

                    'correctAnswerId' => 2795,
                    'explanation' => 'King Charles III became King in 2022, succeeding Queen Elizabeth II as the monarch of Canada.',
                  ],
                  [
                    'text' => 'When was the Official Languages Act passed?',
                    'answers' => [
                      ['text' => '1869'],
                      ['text' => '1941'],
                      ['text' => '1949'],
                      ['text' => '1969'],
                    ],

                    'correctAnswerId' => 2800,
                    'explanation' => 'The Official Languages Act was passed in 1969 by Parliament to establish language rights and promote bilingualism in Canada.',
                  ],
                  [
                    'text' => 'Where does the red-white-red pattern on the Canadian flag come from?',
                    'answers' => [
                      ['text' => 'The Royal Military College in Kingston'],
                      ['text' => 'The Royal Military College in Quebec'],
                      ['text' => 'The British Flag'],
                      ['text' => 'The French flag'],
                    ],

                    'correctAnswerId' => 2801,
                    'explanation' => 'The red-white-red pattern on the Canadian flag comes from the flag of the Royal Military College in Kingston, Ontario.',
                  ],
                  [
                    'text' => 'Since when has Canada been a constitutional monarchy?',
                    'answers' => [
                      ['text' => '1667'],
                      ['text' => '1767'],
                      ['text' => '1849'],
                      ['text' => '1867'],
                    ],

                    'correctAnswerId' => 2808,
                    'explanation' => 'Canada has been a constitutional monarchy since Confederation in 1867 during Queen Victoria’s reign.',
                  ],
                  [
                    'text' => 'On what is Canada’s legal system based?',
                    'answers' => [
                      ['text' => 'The rule of law'],
                      ['text' => 'The rule of law, freedom under the law, democratic principles and due process'],
                      ['text' => 'Democratic principles and due process'],
                      ['text' => 'The rule of law and freedom under the law'],
                    ],

                    'correctAnswerId' => 2810,
                    'explanation' => 'Canada’s legal system is based on a heritage that includes the rule of law, freedom under the law, democratic principles, and due process. Due process ensures that the government respects all legal rights entitled to individuals under the law.',
                  ],
                  [
                    'text' => 'When was Ice Hockey invented?',
                    'answers' => [
                      ['text' => '1900s'],
                      ['text' => '1500s'],
                      ['text' => '1800s'],
                      ['text' => '1700s'],
                    ],

                    'correctAnswerId' => 2815,
                    'explanation' => 'Ice hockey, Canada’s most popular spectator sport and the national winter sport, was developed in Canada in the 1800s.',
                  ],

                ]
              ],
              [
                'name' => 'Practice Test 9.5',
                'info' => 'Practice Test 9.5',
                'questions' => [
                  [
                    'text' => 'In Canada, you can question the police about their service or conduct if you feel the need.',
                    'answers' => [
                      ['text' => 'True'],
                      ['text' => 'False'],
                    ],
                    'correctAnswerId' => 2818,
                    'explanation' => 'You can question the police about their service or conduct if you feel the need to do so. Almost all police forces in Canada have a process for citizens to bring concerns and seek action.',
                  ],
                  [
                    'text' => 'In the Canadian justice system, what is "due process"?',
                    'answers' => [
                      ['text' => 'The principle that the government must respect all of legal rights a person is entitled to under the law'],
                      ['text' => 'The principle that the government must complete a particular judicial process before convicting anyone'],
                      ['text' => 'The principle that the government must respect certain legal rights a person is entitled under the law'],
                      ['text' => 'The principle that the government has its own process when dealing with criminals'],
                    ],
                    'correctAnswerId' => 2819,
                    'explanation' => 'Due process is the principle that the government must respect all the legal rights a person is entitled to under the law.',
                  ],
                  [
                    'text' => 'What does the lily flower ("fleur-de-lys") symbolize?',
                    'answers' => [
                      ['text' => 'English Royalty'],
                      ['text' => 'French Royalty'],
                      ['text' => 'Canadian Peace Act with the First Nations'],
                      ['text' => 'Canadian Armed Forces'],
                    ],
                    'correctAnswerId' => 2824,
                    'explanation' => 'The lily flower ("fleur-de-lys") was adopted by French royalty in 496 AD and became a symbol of French royalty for over 1,000 years, including during the period of New France.',
                  ],
                  [
                    'text' => 'When was the modern Canadian Flag first raised?',
                    'answers' => [
                      ['text' => '1855'],
                      ['text' => '1999'],
                      ['text' => '1865'],
                      ['text' => '1965'],
                    ],
                    'correctAnswerId' => 2830,
                    'explanation' => 'A new Canadian flag was raised for the first time in 1965. The red-white-red pattern comes from the flag of the Royal Military College, Kingston, founded in 1876.',
                  ],
                  [
                    'text' => 'In which of the following situations can you not ask the police for help?',
                    'answers' => [
                      ['text' => 'There has been an accident'],
                      ['text' => 'You are a victim of assault'],
                      ['text' => 'Someone has stolen something from you'],
                      ['text' => 'Your water pipes are leaking'],
                    ],
                    'correctAnswerId' => 2834,
                    'explanation' => 'You can ask the police for help in various situations including accidents, assaults, and thefts. However, issues like water leaks are typically handled by other authorities.',
                  ],
                  [
                    'text' => 'In Canada, what does the Crown symbolize?',
                    'answers' => [
                      ['text' => 'The government, including Parliament, the legislatures, the courts, police services and the Canadian Forces'],
                      ['text' => 'The Queen'],
                      ['text' => 'The government'],
                      ['text' => 'The RCMP'],
                    ],
                    'correctAnswerId' => 2838,
                    'explanation' => 'The Crown symbolizes the government of Canada, including Parliament, the legislatures, the courts, police services, and the Canadian Forces.',
                  ],
                  [
                    'text' => 'When were the Parliament buildings completed?',
                    'answers' => [
                      ['text' => 'In the 1920s'],
                      ['text' => 'In the 1860s'],
                      ['text' => 'In the 1820s'],
                      ['text' => 'In the 1780s'],
                    ],
                    'correctAnswerId' => 2840,
                    'explanation' => 'The Parliament buildings were completed in the 1860s. The Centre Block, part of these buildings, was rebuilt in 1922 after being destroyed by fire in 1916.',
                  ],
                  [
                    'text' => 'When was O Canada declared the National anthem?',
                    'answers' => [
                      ['text' => '1805'],
                      ['text' => '1822'],
                      ['text' => '1920'],
                      ['text' => '1980'],
                    ],
                    'correctAnswerId' => 2846,
                    'explanation' => 'O Canada was proclaimed as the national anthem in 1980. It was first sung in Québec City in 1880. French and English Canadians sing different words to the national anthem.',
                  ],
                  [
                    'text' => 'What do Canadians celebrate on Victoria Day?',
                    'answers' => [
                      ['text' => 'The Sovereign\'s birthday'],
                      ['text' => 'The Birth of Christ'],
                      ['text' => 'The sacrifices of Canadian veterans and brave fallen in all wars'],
                      ['text' => 'The Canadian Victory in the war of 1812 against the United States'],
                    ],
                    'correctAnswerId' => 2847,
                    'explanation' => 'Victoria Day is celebrated in Canada to commemorate the birthday of the Sovereign (currently Queen Victoria). It falls on the Monday preceding May 25th.',
                  ],
                  [
                    'text' => 'Who are Anglophones?',
                    'answers' => [
                      ['text' => 'People who speak English'],
                      ['text' => 'French speakers in Canada'],
                      ['text' => 'Members of the Anglican Church'],
                      ['text' => 'Native Indian People'],
                    ],
                    'correctAnswerId' => 2851,
                    'explanation' => 'Anglophones are people who speak English. English and French are the two official languages of Canada, reflecting the country\'s linguistic diversity.',
                  ],
                  [
                    'text' => 'Since when have red and white been the national colors of Canada?',
                    'answers' => [
                      ['text' => '1965'],
                      ['text' => '1949'],
                      ['text' => '1921'],
                      ['text' => '1892'],
                    ],
                    'correctAnswerId' => 2857,
                    'explanation' => 'Red and white have been the national colors of Canada since 1921. These colors were historically associated with France and England, and were adopted as Canada\'s national colors to symbolize unity and diversity.',
                  ],


                ]
              ],
            ],
            'topics' => [
              ['name' => 'Canadian Symbols'],
              ['name' => 'The Timeline'],
            ],
            'flashcards' => [
              [
                'question' => 'What is Canada’s official summer sport?',
                'answer' => 'Lacrosse',
                'explanation' => 'Lacrosse, an ancient sport first played by Aboriginals, is the official summer sport.'
              ],
              [
                'question' => 'In the Canadian justice system, what is "due process"?',
                'answer' => 'The principle that the government must respect all of the legal rights a person is entitled to under the law',
                'explanation' => 'Due process is the principle that the government must respect all the legal rights a person is entitled to under the law.'
              ],
              [
                'question' => 'Why did Canada adopt an official coat of arms and a national motto?',
                'answer' => 'As an expression of national pride after the First World War',
                'explanation' => 'As an expression of national pride after the First World War, Canada adopted an official coat of arms and a national motto, A mari usque ad mare, which in Latin means “from sea to sea.”'
              ],
              [
                'question' => 'Which sport has the most registered players of any game in Canada?',
                'answer' => 'Soccer',
                'explanation' => 'Lacrosse, an ancient sport first played by Aboriginals, is the official summer sport. Soccer has the most registered players of any game in Canada.'
              ],
              [
                'question' => 'What is the highest honour available to Canadians?',
                'answer' => 'The Victoria Cross',
                'explanation' => 'The Victoria Cross (V.C.) is the highest honour available to Canadians and is awarded for the most conspicuous bravery, a daring or pre-eminent act of valour or self-sacrifice, or extreme devotion to duty in the presence of the enemy.'
              ],
              [
                'question' => 'What is the origin of the beaver as a symbol of Canada?',
                'answer' => 'The beaver was adopted centuries ago as a symbol of the Hudson\'s Bay Company',
                'explanation' => 'The beaver was adopted centuries ago as a symbol of the Hudson’s Bay Company. It became an emblem of the St. Jean Baptiste Society, a French-Canadian patriotic association, in 1834, and was also adopted by other groups.'
              ],
              [
                'question' => 'Who are Anglophones?',
                'answer' => 'People who speak English',
                'explanation' => 'English and French are the two official languages and are important symbols of identity. English speakers (Anglophones) and French speakers (Francophones) have lived together in partnership and creative tension for more than 300 years.'
              ],
              [
                'question' => 'What is the first sentence of the National Anthem?',
                'answer' => 'O Canada! Our home and native land!',
                'explanation' => 'The first parts of O Canada are as follows; O Canada! Our home and native land! True patriot love in all thy sons command With glowing hearts we see thee rise The true North strong and free! From far and wide, O Canada We stand on guard for thee God keep our land glorious and free! O Canada, we stand on guard for thee O Canada, we stand on guard for thee'
              ],
              [
                'question' => 'What does the lily flower ("fleur-de-lys") symbolize?',
                'answer' => 'French Royalty',
                'explanation' => 'It is said that the lily flower (“fleur-de-lys”) was adopted by the French king in the year 496. It became the symbol of French royalty for more than 1,000 years, including the colony of New France.'
              ],
              [
                'question' => 'On what is Canada’s legal system based?',
                'answer' => 'The rule of law, freedom under the law, democratic principles and due process',
                'explanation' => 'Canada’s legal system is based on a heritage that includes the rule of law, freedom under the law, democratic principles and due process. Due process is the principle that the government must respect all the legal rights a person is entitled to under the law.'
              ],
              [
                'question' => 'What does the Canadian flag look like?',
                'answer' => 'Red-white-red stripes with a red maple leaf in the center',
                'explanation' => 'A new Canadian flag was raised for the first time in 1965. The red-white-red pattern comes from the flag of the Royal Military College, Kingston, founded in 1876.'
              ],
              [
                'question' => 'What kind of symbols does the Canadian coat of arms contain?',
                'answer' => 'Symbols of England, France, Scotland and Ireland as well as red maple leaves',
                'explanation' => 'The arms contain symbols of England, France, Scotland and Ireland as well as red maple leaves. Today the arms can be seen on dollar bills, government documents and public buildings.'
              ],
              [
                'question' => 'In Canada, what does the Crown symbolize?',
                'answer' => 'The government, including Parliament, the legislatures, the courts, police services and the Canadian Forces',
                'explanation' => 'The Crown is a symbol of government, including Parliament, the legislatures, the courts, police services and the Canadian Forces.'
              ],
              [
                'question' => 'What is Canada’s most popular spectator sport?',
                'answer' => 'Ice hockey',
                'explanation' => 'Hockey is Canada’s most popular spectator sport and is considered to be the national winter sport. Ice hockey was developed in Canada in the 1800s.'
              ],
              [
                'question' => 'Who was the first Canadian to be awarded the Victoria Cross?',
                'answer' => 'Lieutenant Alexander Roberts Dunn',
                'explanation' => 'Lieutenant Alexander Roberts Dunn, born in present-day Toronto, served in the British Army in the Charge of the Light Brigade at Balaclava (1854) in the Crimean War, and was the first Canadian to be awarded the Victoria Cross.'
              ],
              [
                'question' => 'What is the name of the Royal Anthem of Canada?',
                'answer' => 'God Save the Queen',
                'explanation' => 'The Royal Anthem of Canada, “God Save the Queen (or King),” can be played or sung on any occasion when Canadians wish to honour the Sovereign.'
              ],
              [
                'question' => 'What do Canadians celebrate on Victoria Day?',
                'answer' => 'The Sovereign\'s birthday',
                'explanation' => 'The Sovereign’s birthday is celebrated on Victoria Day (Monday preceding May 25).'
              ],
              [
                'question' => 'For what is the Victoria Cross awarded?',
                'answer' => 'The most conspicuous bravery or self-sacrifice in the presence of the enemy',
                'explanation' => 'The Victoria Cross (V.C.) is the highest honour available to Canadians and is awarded for the most conspicuous bravery, a daring or pre-eminent act of valour or self-sacrifice, or extreme devotion to duty in the presence of the enemy.'
              ],
              [
                'question' => 'What is Canada’s national winter sport?',
                'answer' => 'Ice Hockey',
                'explanation' => 'Many major league sports boast Canadian talent and in the national sport of ice hockey, Canadian teams have dominated the world.'
              ],
              [
                'question' => 'What is the official Royal Flag of Canada?',
                'answer' => 'The Union Jack Flag',
                'explanation' => 'The Union Jack is our official Royal Flag.'
              ],
              [
                'question' => 'Where does the red-white-red pattern on the Canadian flag come from?',
                'answer' => 'The Royal Military College in Kingston',
                'explanation' => 'The red-white-red pattern comes from the flag of the Royal Military College, Kingston, founded in 1876.'
              ],
              [
                'question' => 'What do you call the Canadian honours system that recognizes outstanding citizens?',
                'answer' => 'The Order of Canada',
                'explanation' => 'All countries have ways to recognize outstanding citizens. Official awards are called honours, consisting of orders, decorations and medals. After using British honours for many years, Canada started its own honours system with the Order of Canada in 1967, the centennial of Confederation.'
              ],
              [
                'question' => 'What does the Federal Court deal with?',
                'answer' => 'Matters concerning the federal government',
                'explanation' => 'The Supreme Court of Canada is our country’s highest court. The Federal Court of Canada deals with matters concerning the federal government.'
              ],
              [
                'question' => 'In Canada, who is above the law?',
                'answer' => 'Nobody',
                'explanation' => 'One of Canada’s founding principles is the rule of law. Individuals and governments are regulated by laws and not by arbitrary actions. No person or group is above the law.'
              ],
              [
                'question' => 'What is the meaning of the Canadian national motto, "A Mari Usque Ad Mare"?',
                'answer' => '"From sea to sea"',
                'explanation' => 'As an expression of national pride after the First World War, Canada adopted an official coat of arms and a national motto, A mari usque ad mare, which in Latin means “from sea to sea.” The arms contain symbols of England, France, Scotland and Ireland as well as red maple leaves.'
              ],
              [
                'question' => 'For which championship does the National Hockey League play?',
                'answer' => 'Stanley Cup',
                'explanation' => 'The National Hockey League plays for the championship Stanley Cup, donated by Lord Stanley, the Governor General, in 1892.'
              ],
              [
                'question' => 'Why was the Peace Tower built in Ottawa?',
                'answer' => 'In memory of the First World War',
                'explanation' => 'The Peace Tower was completed in 1927 in memory of the First World War.'
              ],
              [
                'question' => 'What is the name of the National Anthem?',
                'answer' => 'O Canada',
                'explanation' => 'O Canada was proclaimed as the national anthem in 1980. It was first sung in Québec City in 1880. French and English Canadians sing different words to the national anthem.'
              ]
            ]

          ],
          [
            'image' => '/images/chap 11.png',
            'name' => 'Chapter 10',
            'title' => "Canada's Economy",
            'description' => "Canada has always been a trading nation. Learn about its natural resources, manufacturing, technology, trade, and the importance of economic diversity.",
            'questions' => 20,
            'mistakes' => 5,
            'step' => 2,
            'tests' => [
              [
                'name' => 'Practice Test 10.1',
                'info' => 'Practice Test 10.1',
                'questions' => [
                  [
                    'text' => 'What was the main advantage of NAFTA agreement?',
                    'answers' => [
                      ['text' => 'Free trade among Canada, the USA and Mexico'],
                      ['text' => 'Free trade between Canada and China'],
                      ['text' => 'Free trade between Canada and the UK'],
                      ['text' => 'Free trade between Canada and Japan'],
                    ],
                    'correctAnswerId' => 2859,
                    'explanation' => 'The main advantage of the NAFTA agreement was free trade among Canada, the USA, and Mexico, facilitating extensive economic cooperation and trade between these countries.',
                  ],
                  [
                    'text' => 'What types of jobs are provided by Service Industries?',
                    'answers' => [
                      ['text' => 'Communications and Retail Services'],
                      ['text' => 'Transportation and education'],
                      ['text' => 'Tourism and government'],
                      ['text' => 'All answers are correct'],
                    ],
                    'correctAnswerId' => 2866,
                    'explanation' => 'Service industries provide a wide range of jobs including communications, retail services, transportation, education, health care, construction, banking, tourism, and government.',
                  ],
                  [
                    'text' => 'Why is trade with other countries important to Canada?',
                    'answers' => [
                      ['text' => 'Trade with other countries change the native way of life forever'],
                      ['text' => 'To increase the trade and enjoy one of the world\'s highest standards of living'],
                      ['text' => 'Canada has become a member of the World Trade Organization'],
                      ['text' => 'The French and Aboriginal people collaborated with Canada in the vast fur-trade economy'],
                    ],
                    'correctAnswerId' => 2868,
                    'explanation' => 'Trade with other countries is important to Canada because it helps to increase trade and maintain one of the world\'s highest standards of living, supporting economic growth and prosperity.',
                  ],
                  [
                    'text' => 'What country is Canada\'s largest trading partner?',
                    'answers' => [
                      ['text' => 'China'],
                      ['text' => 'The United States of America'],
                      ['text' => 'The United Kingdom'],
                      ['text' => 'Mexico'],
                    ],
                    'correctAnswerId' => 2872,
                    'explanation' => 'The United States of America is Canada\'s largest trading partner, with extensive bilateral trade and economic relations.',
                  ],
                  [
                    'text' => 'Which of the following answers is not true about the relationship between Canada and the USA?',
                    'answers' => [
                      ['text' => 'Canada and the USA share the longest undefended international border'],
                      ['text' => 'Canada and the USA are the largest trading partners in the world'],
                      ['text' => 'Canada exports very few goods to the USA'],
                      ['text' => 'The relationship between Canada and the USA is the closest and the most extensive in the world'],
                    ],
                    'correctAnswerId' => 2877,
                    'explanation' => 'Canada and the USA are indeed each other\'s largest trading partners, and they share the longest undefended international border. Canada exports a significant amount of goods to the USA, making option C incorrect.',
                  ],
                  [
                    'text' => 'In which province are more than half of Canada\'s Aeronautics and Space industry located?',
                    'answers' => [
                      ['text' => 'Saskatchewan'],
                      ['text' => 'Ontario'],
                      ['text' => 'Quebec'],
                      ['text' => 'Manitoba'],
                    ],
                    'correctAnswerId' => 2881,
                    'explanation' => 'More than half of Canada\'s Aeronautics and Space industry is located in Quebec, where the province plays a leading role in these cutting-edge sectors.',
                  ],
                  [
                    'text' => 'In what sorts of jobs do most Canadians work?',
                    'answers' => [
                      ['text' => 'Service'],
                      ['text' => 'Lumbering'],
                      ['text' => 'Farming'],
                      ['text' => 'Natural resources'],
                    ],
                    'correctAnswerId' => 2883,
                    'explanation' => 'The majority of working Canadians are employed in service industries, which encompass a broad range of sectors including retail, healthcare, education, and more.',
                  ],
                  [
                    'text' => 'What are the three main types of industry in Canada?',
                    'answers' => [
                      ['text' => 'Natural resources, manufacturing and services'],
                      ['text' => 'Mining, services and Manufacturing'],
                      ['text' => 'Oil, tourism and Manufacturing'],
                      ['text' => 'Fishery, tourism and services'],
                    ],
                    'correctAnswerId' => 2887,
                    'explanation' => 'The three main types of industry in Canada are natural resources (including forestry, mining, energy), manufacturing, and services (which cover a wide array of sectors).',
                  ],
                  [
                    'text' => 'What is the meaning of the phrase “the world\'s longest undefended border”?',
                    'answers' => [
                      ['text' => 'Canada exports billions of dollars worth of Energy Products to the USA.'],
                      ['text' => 'Canada enjoys close relations with the United States'],
                      ['text' => 'Over three-quarters of Canadian exports are destined for the USA'],
                      ['text' => 'Millions of Canadians and Americans cross the border every year in safety'],
                    ],
                    'correctAnswerId' => 2894,
                    'explanation' => 'The phrase refers to the fact that millions of Canadians and Americans cross the Canada-US border every year without significant security or defense infrastructure, symbolizing peaceful and cooperative relations.',
                  ],
                  [
                    'text' => 'How much of Canadian exports are destined for the USA?',
                    'answers' => [
                      ['text' => 'Over one-third'],
                      ['text' => 'Over three-quarters'],
                      ['text' => 'Two-thirds'],
                      ['text' => 'Half'],
                    ],
                    'correctAnswerId' => 2896,
                    'explanation' => 'Over three-quarters of Canadian exports are destined for the USA, reflecting the close economic ties and extensive trade relationship between the two countries.',
                  ],
                  [
                    'text' => 'In what industry do most Canadians work?',
                    'answers' => [
                      ['text' => 'Tourism'],
                      ['text' => 'Natural resources mining'],
                      ['text' => 'Service'],
                      ['text' => 'Manufacturing and Technology'],
                    ],
                    'correctAnswerId' => 2901,
                    'explanation' => 'Most Canadians work in service industries, which form a significant part of the Canadian economy and provide diverse job opportunities.',
                  ],
                  [
                    'text' => 'Which of the following symbolizes close ties between Canada and the U.S.?',
                    'answers' => [
                      ['text' => 'The Peace Arch in Blaine Washington'],
                      ['text' => 'Statue of Liberty in New York'],
                      ['text' => 'International Peace Garden Crossing between Canada and the United States'],
                      ['text' => 'White Pass in Yukon'],
                    ],
                    'correctAnswerId' => 2903,
                    'explanation' => 'The Peace Arch in Blaine, Washington, symbolizes the close ties and common interests between Canada and the United States, emphasizing their historic and cooperative relationship.',
                  ],
                  [
                    'text' => 'Where are the names of soldiers, sailors and airmen, who died serving Canada in wars or while on duty, written?',
                    'answers' => [
                      ['text' => 'The Memorial Chamber'],
                      ['text' => 'The Centre Block'],
                      ['text' => 'The Peace Arch'],
                      ['text' => 'The Library'],
                    ],
                    'correctAnswerId' => 2907,
                    'explanation' => 'The names of soldiers, sailors, and airmen who died serving Canada in wars or on duty are written in the Memorial Chamber within the Tower, a solemn tribute to their sacrifice.',
                  ],
                  [
                    'text' => 'Canada’s economy is among the top:',
                    'answers' => [
                      ['text' => '10'],
                      ['text' => '5'],
                      ['text' => '3'],
                      ['text' => '20'],
                    ],
                    'correctAnswerId' => 2911,
                    'explanation' => 'Canada has one of the top ten largest economies in the world, positioning it among the leading industrialized nations globally.',
                  ],
                  [
                    'text' => 'To which industries do forestry, fishing, agriculture, mining and energy belong to?',
                    'answers' => [
                      ['text' => 'Trading Industries'],
                      ['text' => 'Natural resources industries'],
                      ['text' => 'Service industries'],
                      ['text' => 'Manufacturing industries'],
                    ],
                    'correctAnswerId' => 2916,
                    'explanation' => 'Forestry, fishing, agriculture, mining, and energy belong to the natural resources industries in Canada, which have historically played a crucial role in the country\'s development.',
                  ],
                  [
                    'text' => 'Which animal is an official symbol of Canada?',
                    'answers' => [
                      ['text' => 'The bear'],
                      ['text' => 'The eagle'],
                      ['text' => 'The moose'],
                      ['text' => 'The beaver'],
                    ],
                    'correctAnswerId' => 2922,
                    'explanation' => 'The beaver is an official symbol of Canada, representing industriousness and resilience. It has been an emblem of Canada for centuries.',
                  ],
                  [
                    'text' => 'Which industries have played an important part in Canada’s story and development?',
                    'answers' => [
                      ['text' => 'Service industries'],
                      ['text' => 'Trading industries'],
                      ['text' => 'Natural resources industries'],
                      ['text' => 'Manufacturing industries'],
                    ],
                    'correctAnswerId' => 2925,
                    'explanation' => 'Natural resources industries including forestry, fishing, agriculture, mining, and energy have significantly contributed to Canada’s history and economic development.',
                  ],
                  [
                    'text' => 'How much of Canadian exports are destined for the U.S.A.?',
                    'answers' => [
                      ['text' => 'Over one-third'],
                      ['text' => 'Over three-quarters'],
                      ['text' => 'Half'],
                      ['text' => 'Two-thirds'],
                    ],
                    'correctAnswerId' => 2928,
                    'explanation' => 'Over three-quarters of Canadian exports are destined for the U.S.A., highlighting the critical importance of the economic relationship between the two countries.',
                  ],
                  [
                    'text' => 'How much merchandise trade was involved within NAFTA in 2008?',
                    'answers' => [
                      ['text' => 'About $100 billion'],
                      ['text' => 'Over $100 trillion'],
                      ['text' => 'Over $1 trillion'],
                      ['text' => 'About $500 billion'],
                    ],
                    'correctAnswerId' => 2933,
                    'explanation' => 'In 2008, NAFTA facilitated over $1 trillion in merchandise trade among Canada, the United States, and Mexico, underscoring its substantial economic impact and integration.',
                  ],
                  [
                    'text' => 'When was ice hockey developed in Canada?',
                    'answers' => [
                      ['text' => 'In the 1800s'],
                      ['text' => 'In the 1700s'],
                      ['text' => 'In the 1600s'],
                      ['text' => 'In the 1900s'],
                    ],
                    'correctAnswerId' => 2935,
                    'explanation' => 'Ice hockey was developed in Canada in the 1800s, becoming a beloved national sport with deep cultural significance.',
                  ],

                ]
              ],
              [
                'name' => 'Practice Test 10.2',
                'info' => 'Practice Test 10.2',
                'questions' => [
                  [
                    'text' => 'What is traditionally known as "the world’s longest undefended border"?',
                    'answers' => [
                      ['text' => 'Canada-U.S.A border'],
                      ['text' => 'The Great Wall of China'],
                      ['text' => 'Mexico-U.S.A border'],
                      ['text' => 'Both Canadian Atlantic and Pacific coasts'],
                    ],
                    'correctAnswerId' => 2941,
                    'explanation' => 'Millions of Canadians and Americans cross every year in safety what is traditionally known as “the world’s longest undefended border.” Over three-quarters of Canadian exports are destined for the U.S.A., highlighting the deep economic integration and cooperation between the two countries.',
                  ],
                  [
                    'text' => 'To which industries do transportation, education, health care, construction, banking, communications, retail services, tourism and government belong to?',
                    'answers' => [
                      ['text' => 'Manufacturing industries'],
                      ['text' => 'Natural resources industries'],
                      ['text' => 'Service industries'],
                      ['text' => 'Trading Industries'],
                    ],
                    'correctAnswerId' => 2945,
                    'explanation' => 'Service industries encompass a wide range of sectors including transportation, education, health care, construction, banking, communications, retail services, tourism, and government, providing diverse employment opportunities across Canada.',
                  ],
                  [
                    'text' => 'What is the G8?',
                    'answers' => [
                      ['text' => 'A group of 8 famous Canadian artists'],
                      ['text' => 'A group of 8 leading industrialized countries'],
                      ['text' => 'The group of 8 Fathers of Confederation'],
                      ['text' => 'The 8 countries involved in NAFTA'],
                    ],
                    'correctAnswerId' => 2948,
                    'explanation' => 'The G8 refers to a group of 8 leading industrialized countries, including Canada, the United States, Germany, the United Kingdom, Italy, France, Japan, and Russia, who meet annually to discuss economic policies and global issues.',
                  ],
                  [
                    'text' => 'When do Canadians celebrate Thanksgiving?',
                    'answers' => [
                      ['text' => 'Third Monday of October'],
                      ['text' => 'Second Monday of October'],
                      ['text' => 'Second Tuesday of October'],
                      ['text' => 'Second Monday of November'],
                    ],
                    'correctAnswerId' => 2952,
                    'explanation' => 'Thanksgiving in Canada is celebrated on the second Monday of October, marking a time of gratitude and harvest.',
                  ],
                  [
                    'text' => 'Which of the following statements is false about the Canada-U.S.A. relationship?',
                    'answers' => [
                      ['text' => 'Millions of Canadians and Americans cross every year the Canada-U.S.A. border'],
                      ['text' => 'They have the world\'s longest undefended border'],
                      ['text' => 'They have the biggest bilateral trading relationship in the world'],
                      ['text' => 'Canada exports almost no goods to the U.S.A.'],
                    ],
                    'correctAnswerId' => 2958,
                    'explanation' => 'Over three-quarters of Canadian exports are destined for the U.S.A., and the Canada-U.S.A. border is known as the world\'s longest undefended border, facilitating significant economic and cultural exchange between the two nations.',
                  ],
                  [
                    'text' => 'Who first adopted the maple leaf as a symbol in Canada?',
                    'answers' => [
                      ['text' => 'Irish'],
                      ['text' => 'Metis'],
                      ['text' => 'English'],
                      ['text' => 'French-Canadians'],
                    ],
                    'correctAnswerId' => 2962,
                    'explanation' => 'The maple leaf was adopted as a symbol by French Canadians in the 1700s, and has since become an enduring symbol of Canada, appearing on various insignia, uniforms, and official documents.',
                  ],
                  [
                    'text' => 'What is Canada’s second most popular sport?',
                    'answers' => [
                      ['text' => 'Ice hockey'],
                      ['text' => 'Basketball'],
                      ['text' => 'Curling'],
                      ['text' => 'Football'],
                    ],
                    'correctAnswerId' => 2966,
                    'explanation' => 'Canadian football is the second most popular sport in Canada, following ice hockey.',
                  ],
                  [
                    'text' => 'Who are Francophones?',
                    'answers' => [
                      ['text' => 'People that migrated from France'],
                      ['text' => 'People who speak French as a first language'],
                      ['text' => 'People born in England'],
                      ['text' => 'Native American People'],
                    ],
                    'correctAnswerId' => 2968,
                    'explanation' => 'Francophones are people who speak French as their first language. Canada has a significant Francophone population, particularly in Quebec and other parts of Canada.',
                  ],
                  [
                    'text' => 'When was the Free Trade agreement signed with the United States?',
                    'answers' => [
                      ['text' => '1905'],
                      ['text' => '1988'],
                      ['text' => '1814'],
                      ['text' => '1810'],
                    ],
                    'correctAnswerId' => 2972,
                    'explanation' => 'The Free Trade Agreement between Canada and the United States was signed in 1988, marking a significant milestone in economic relations between the two countries.',
                  ],
                  [
                    'text' => 'Who is Canada’s largest international trading partner?',
                    'answers' => [
                      ['text' => 'United States'],
                      ['text' => 'Europe'],
                      ['text' => 'Mexico'],
                      ['text' => 'China'],
                    ],
                    'correctAnswerId' => 2975,
                    'explanation' => 'The United States is Canada’s largest international trading partner, with extensive trade relations spanning various industries and sectors.',
                  ],
                  [
                    'text' => 'When do Canadians celebrate Victoria Day?',
                    'answers' => [
                      ['text' => 'Tuesday preceding June 25th'],
                      ['text' => 'Monday preceding May 25th'],
                      ['text' => 'Monday preceding June 25th'],
                      ['text' => 'Tuesday preceding May 25th'],
                    ],
                    'correctAnswerId' => 2980,
                    'explanation' => 'Victoria Day is celebrated on the Monday preceding May 25th in Canada, commemorating the birthday of Queen Victoria.',
                  ],
                  [
                    'text' => 'To which industries do products such as paper, high technology equipment, aerospace technology, automobiles, machinery, food and clothing belong to?',
                    'answers' => [
                      ['text' => 'Natural resources industries'],
                      ['text' => 'Manufacturing industries'],
                      ['text' => 'Service industries'],
                      ['text' => 'Trading Industries'],
                    ],
                    'correctAnswerId' => 2984,
                    'explanation' => 'Manufacturing industries encompass a wide range of sectors producing goods such as paper, high technology equipment, aerospace technology, automobiles, machinery, food, clothing, and more.',
                  ],

                ]
              ],
            ],
            'topics' => [
              ['name' => "Canada's Economy"],
              ['name' => 'The Timeline'],
            ],
            'flashcards' => [
              [
                'question' => 'How much merchandise trade was involved within NAFTA in 2008?',
                'answer' => 'Over $1 trillion',
                'explanation' => 'In 1988, Canada enacted free trade with the United States. Mexico became a partner in 1994 in the broader North American Free Trade Agreement (NAFTA), with over 444 million people and over $1 trillion in merchandise trade in 2008.'
              ],
              [
                'question' => 'Where are the names of soldiers, sailors and airmen, who died serving Canada in wars or while on duty, written?',
                'answer' => 'The Memorial Chamber',
                'explanation' => 'The Memorial Chamber within the Tower contains the Books of Remembrance in which are written the names of soldiers, sailors and airmen who died serving Canada in wars or while on duty.'
              ],
              [
                'question' => 'What is Canada’s second most popular sport?',
                'answer' => 'Football',
                'explanation' => 'Canadian football is the second most popular sport in Canada.'
              ],
              [
                'question' => 'To which industries do forestry, fishing, agriculture, mining and energy belong to?',
                'answer' => 'Natural resources industries',
                'explanation' => 'Natural resources industries include forestry, fishing, agriculture, mining and energy. These industries have played an important part in the country’s history and development.'
              ],
              [
                'question' => 'Who is Canada’s largest international trading partner?',
                'answer' => 'United States',
                'explanation' => 'Our largest international trading partner is the United States.'
              ],
              [
                'question' => 'What is traditionally known as "the world’s longest undefended border"?',
                'answer' => 'Canada-U.S.A border',
                'explanation' => 'Over three-quarters of Canadian exports are destined for the U.S.A. In fact we have the biggest bilateral trading relationship in the world. Integrated Canada-U.S.A. supply chains compete with the rest of the world. Canada exports billions of dollars worth of energy products, industrial goods, machinery, equipment, automotive, agricultural, fishing and forestry products, and consumer goods every year. Millions of Canadians and Americans cross every year and in safety what is traditionally known as “the world’s longest undefended border.”'
              ],
              [
                'question' => 'How much of Canadian exports are destined for the U.S.A.?',
                'answer' => 'Over three-quarters',
                'explanation' => 'Over three-quarters of Canadian exports are destined for the U.S.A. In fact we have the biggest bilateral trading relationship in the world.'
              ],
              [
                'question' => 'Who are Francophones?',
                'answer' => 'People who speak French as a first language',
                'explanation' => 'Today, there are 18 million Anglophones—people who speak English as a first language—and seven million Francophones—people who speak French as their first language.'
              ],
              [
                'question' => 'Which industries have played an important part in Canada’s story and development?',
                'answer' => 'Natural resources industries',
                'explanation' => 'Natural resources industries include forestry, fishing, agriculture, mining and energy. These industries have played an important part in the country’s history and development.'
              ],
              [
                'question' => 'Which animal is an official symbol of Canada?',
                'answer' => 'The beaver',
                'explanation' => 'The beaver was adopted centuries ago as a symbol of the Hudson’s Bay Company. It became an emblem of the St. Jean Baptiste Society, a French-Canadian patriotic association, in 1834, and was also adopted by other groups.'
              ],
              [
                'question' => 'To which industries do products such as paper, high technology equipment, aerospace technology, automobiles, machinery, food and clothing belong to?',
                'answer' => 'Manufacturing industries',
                'explanation' => 'Manufacturing industries make products to sell in Canada and around the world. Manufactured products include paper, high technology equipment, aerospace technology, automobiles, machinery, food, clothing and many other goods.'
              ],
              [
                'question' => 'Who first adopted the maple leaf as a symbol in Canada?',
                'answer' => 'French-Canadians',
                'explanation' => 'The maple leaf is Canada’s best-known symbol. Maple leaves were adopted as a symbol by French Canadians in the 1700s, have appeared on Canadian uniforms and insignia since the 1850s, and are carved into the headstones of our fallen soldiers buried overseas and in Canada.'
              ],
              [
                'question' => 'To which industries do transportation, education, health care, construction, banking, communications, retail services, tourism and government belong to?',
                'answer' => 'Service industries',
                'explanation' => 'Service industries provide thousands of different jobs in areas like transportation, education, health care, construction, banking, communications, retail services, tourism and government.'
              ],
              [
                'question' => 'What is the G8?',
                'answer' => 'A group of 8 leading industrialized countries',
                'explanation' => 'Today, Canada has one of the ten largest economies in the world and is part of the G8 group of leading industrialized countries with the United States, Germany, the United Kingdom, Italy, France, Japan and Russia.'
              ]
            ]

          ],
          [
            'image' => '/images/chap 12.png',
            'name' => 'Chapter 11',
            'title' => "Canada's Region",
            'description' => "Canada has five distinct regions. Discover the unique landscapes, climates, cultures, and contributions of these regions.",
            'questions' => 20,
            'mistakes' => 5,
            'step' => 2,
            'tests' => [
              [
                'name' => 'Practice Test 11.1',
                'info' => 'Practice Test 11.1',
                'questions' => [
                  [
                    'text' => 'Where do more than half of the people in Canada live?',
                    'answers' => [
                      ['text' => 'Coastal Pacific'],
                      ['text' => 'Atlantic Canada'],
                      ['text' => 'Prairies'],
                      ['text' => 'Central Canada'],
                    ],
                    'correctAnswerId' => 2990,
                    'explanation' => 'More than half of the people in Canada live in cities and towns near the Great Lakes and the St. Lawrence River in southern Quebec and Ontario, known as Central Canada and the industrial and manufacturing heartland.',
                  ],
                  [
                    'text' => 'Which region covers more than one-third of Canada?',
                    'answers' => [
                      ['text' => 'Northern Territories'],
                      ['text' => 'South Region'],
                      ['text' => 'North Region'],
                      ['text' => 'Southern territories'],
                    ],
                    'correctAnswerId' => 2991,
                    'explanation' => 'The Northwest Territories, Nunavut, and Yukon cover one-third of Canada’s land mass, although they have a small population.',
                  ],
                  [
                    'text' => 'Which province is one of the most productive agricultural regions in the world?',
                    'answers' => [
                      ['text' => 'Manitoba'],
                      ['text' => 'Saskatchewan'],
                      ['text' => 'British Columbia'],
                      ['text' => 'Alberta'],
                    ],
                    'correctAnswerId' => 2996,
                    'explanation' => 'Saskatchewan is known as the “breadbasket of the world” with 40% of Canada’s arable land, and is the largest producer of grains and oilseeds in the country.',
                  ],
                  [
                    'text' => 'Can you name five Great Lakes between Canada and the U.S.?',
                    'answers' => [
                      ['text' => 'Lake Toronto, Lake Michigan, Lake Mexico, Lake Ontario, Lake St. Louis'],
                      ['text' => 'Lake Superior, Lake Michigan, Lake Huron, Lake Erie, Lake Ontario'],
                      ['text' => 'Lake Michigan, Lake Victoria, Lake Mexico, Lake Ontario, Lake St. Louis'],
                      ['text' => 'None of the above'],
                    ],
                    'correctAnswerId' => 3000,
                    'explanation' => 'The five Great Lakes between Canada and the U.S. are Lake Superior, Lake Michigan, Lake Huron, Lake Erie, and Lake Ontario. These lakes provide freshwater and extensive waterways for both countries.',
                  ],
                  [
                    'text' => 'Which region is known as the industrial and Manufacturing Heartland of Canada?',
                    'answers' => [
                      ['text' => 'Atlantic provinces'],
                      ['text' => 'Prairie Provinces'],
                      ['text' => 'Central Canada'],
                      ['text' => 'West Coast'],
                    ],
                    'correctAnswerId' => 3005,
                    'explanation' => 'Central Canada, specifically the region near the Great Lakes and the St. Lawrence River in Quebec and Ontario, is known as the industrial and manufacturing heartland of Canada.',
                  ],
                  [
                    'text' => 'What are the provinces of Central Canada?',
                    'answers' => [
                      ['text' => 'Ontario and Quebec'],
                      ['text' => 'Ontario and Alberta'],
                      ['text' => 'Quebec and New Brunswick'],
                      ['text' => 'Alberta and Saskatchewan'],
                    ],
                    'correctAnswerId' => 3007,
                    'explanation' => 'Central Canada includes Ontario and Quebec, where the majority of Canadians live and where significant industrial and manufacturing activities are concentrated.',
                  ],
                  [
                    'text' => 'Which province is Canada\'s main producer of Pulp and Paper?',
                    'answers' => [
                      ['text' => 'Quebec'],
                      ['text' => 'British Columbia'],
                      ['text' => 'Saskatchewan'],
                      ['text' => 'Ontario'],
                    ],
                    'correctAnswerId' => 3011,
                    'explanation' => 'Quebec is Canada\'s main producer of pulp and paper, contributing significantly to the forestry industry in the province.',
                  ],
                  [
                    'text' => 'Which of the following is the oldest colony of the British Empire in Canada?',
                    'answers' => [
                      ['text' => 'Quebec'],
                      ['text' => 'Ontario'],
                      ['text' => 'Alberta'],
                      ['text' => 'Newfoundland and Labrador'],
                    ],
                    'correctAnswerId' => 3018,
                    'explanation' => 'Newfoundland and Labrador is the oldest colony of the British Empire in Canada, known for its rich maritime history and unique cultural heritage.',
                  ],
                  [
                    'text' => 'Which region of Canada is known for its fertile agricultural land and energy resources?',
                    'answers' => [
                      ['text' => 'Central Canada'],
                      ['text' => 'Quebec'],
                      ['text' => 'Prairie Provinces'],
                      ['text' => 'Maritime Provinces'],
                    ],
                    'correctAnswerId' => 3021,
                    'explanation' => 'The Prairie Provinces of Manitoba, Saskatchewan, and Alberta are known for their fertile agricultural land and abundant energy resources, contributing significantly to Canada\'s economy.',
                  ],
                  [
                    'text' => 'Why are the Great Lakes important to Canada?',
                    'answers' => [
                      ['text' => 'They provide water for irrigation'],
                      ['text' => 'They provide fresh water and waterways'],
                      ['text' => 'They provide waterways'],
                      ['text' => 'They are tourist attractions'],
                    ],
                    'correctAnswerId' => 3024,
                    'explanation' => 'The Great Lakes are important to Canada because they provide a significant source of freshwater and extensive waterways, supporting transportation, trade, and ecological diversity.',
                  ],
                  [
                    'text' => 'What is a major river in Quebec?',
                    'answers' => [
                      ['text' => 'Hudson\'s Bay'],
                      ['text' => 'Niagara'],
                      ['text' => 'Fraser River'],
                      ['text' => 'St. Lawrence River'],
                    ],
                    'correctAnswerId' => 3030,
                    'explanation' => 'Nearly eight million people live in Quebec, the vast majority along or near the St. Lawrence River.',
                  ],
                  [
                    'text' => 'Why is the north sometimes called the land of the Midnight Sun?',
                    'answers' => [
                      ['text' => 'It is closer to the Sun'],
                      ['text' => 'The Northern Lights appear at midnight'],
                      ['text' => 'It is night most of the time'],
                      ['text' => 'Summer daylight can last up to 24 hours'],
                    ],
                    'correctAnswerId' => 3034,
                    'explanation' => 'The North is often referred to as the “Land of the Midnight Sun” because at the height of summer, daylight can last up to 24 hours.',
                  ],
                  [
                    'text' => 'One-third of all Canadians live in which province?',
                    'answers' => [
                      ['text' => 'Saskatchewan'],
                      ['text' => 'Quebec'],
                      ['text' => 'Alberta'],
                      ['text' => 'Ontario'],
                    ],
                    'correctAnswerId' => 3038,
                    'explanation' => 'Ontario is home to more than 12 million people, making up more than one-third of Canada\'s population.',
                  ],
                  [
                    'text' => 'Who chose Ottawa as the capital of Canada?',
                    'answers' => [
                      ['text' => 'Queen Elizabeth I'],
                      ['text' => 'Queen Elizabeth II'],
                      ['text' => 'Queen Victoria'],
                      ['text' => 'Queen Anne'],
                    ],
                    'correctAnswerId' => 3041,
                    'explanation' => 'Ottawa was chosen as the capital in 1857 by Queen Victoria, the great-great-grandmother of Queen Elizabeth II.',
                  ],
                  [
                    'text' => 'What are the territories of Northern Canada and their Capital Cities?',
                    'answers' => [
                      ['text' => 'Yukon (White Horse), Northwest Territories (Yellowknife), and Nunavut (Iqaluit)'],
                      ['text' => 'The Northwest Territories (Yellowknife) and Alaska (Juneau)'],
                      ['text' => 'Northwest Territories (Yellowknife)'],
                      ['text' => 'Alaska (Juneau) and Yukon (White horse)'],
                    ],
                    'correctAnswerId' => 3043,
                    'explanation' => 'The territories of Northern Canada and their capital cities are Yukon (Whitehorse), Northwest Territories (Yellowknife), and Nunavut (Iqaluit).',
                  ],
                  [
                    'text' => 'Which province is on the Pacific coast of Canada?',
                    'answers' => [
                      ['text' => 'Nova Scotia'],
                      ['text' => 'Alberta'],
                      ['text' => 'New Brunswick'],
                      ['text' => 'British Columbia'],
                    ],
                    'correctAnswerId' => 3050,
                    'explanation' => 'British Columbia (B.C.), on the Pacific coast, is Canada’s westernmost province, with a population of four million.',
                  ],
                  [
                    'text' => 'How many Great Lakes are located between Ontario and the United States?',
                    'answers' => [
                      ['text' => 'Four'],
                      ['text' => 'Five'],
                      ['text' => 'Six'],
                      ['text' => 'Seven'],
                    ],
                    'correctAnswerId' => 3052,
                    'explanation' => 'There are five Great Lakes located between Ontario and the United States: Lake Superior, Lake Michigan, Lake Huron, Lake Erie, and Lake Ontario.',
                  ],
                  [
                    'text' => 'Which group of Aboriginal peoples has the largest population in the Northern Territories and Nunavut?',
                    'answers' => [
                      ['text' => 'Acadians'],
                      ['text' => 'Metis'],
                      ['text' => 'First Nations'],
                      ['text' => 'Inuit'],
                    ],
                    'correctAnswerId' => 3058,
                    'explanation' => 'Inuit have the largest population among Aboriginal peoples in the Northern Territories (Yukon, Northwest Territories, Nunavut) of Canada.',
                  ],
                  [
                    'text' => 'Which province has the most valuable Forest industry in Canada?',
                    'answers' => [
                      ['text' => 'Ontario'],
                      ['text' => 'Alberta'],
                      ['text' => 'Quebec'],
                      ['text' => 'British Columbia'],
                    ],
                    'correctAnswerId' => 3062,
                    'explanation' => 'British Columbia has the most valuable forestry industry in Canada, producing a significant portion of the country\'s lumber, newsprint, and pulp and paper products.',
                  ],
                  [
                    'text' => 'Which city provides important shipping and Air Links across the Pacific Ocean?',
                    'answers' => [
                      ['text' => 'Victoria'],
                      ['text' => 'Calgary'],
                      ['text' => 'Edmonton'],
                      ['text' => 'Vancouver'],
                    ],
                    'correctAnswerId' => 3066,
                    'explanation' => 'Vancouver is a key city for shipping and air links across the Pacific Ocean, serving as Canada\'s largest and busiest port.',
                  ],

                ]
              ],
              [
                'name' => 'Practice Test 11.2',
                'info' => 'Practice Test 11.2',
                'questions' => [
                  [
                    'text' => 'What are three minerals still mined in the territories today?',
                    'answers' => [
                      ['text' => 'Lead, gold and zinc'],
                      ['text' => 'Silver, lead and zinc'],
                      ['text' => 'Zinc, gold and bronze'],
                      ['text' => 'Zinc, lead and aluminum'],
                    ],
                    'correctAnswerId' => 3067,
                    'explanation' => 'The Northwest Territories, Nunavut and Yukon contain one-third of Canada’s land mass but have a population of only 100,000. There are gold, lead, copper, diamond and zinc mines.',
                  ],
                  [
                    'text' => 'What are the regions of Canada?',
                    'answers' => [
                      ['text' => 'West, North, South, East and Central'],
                      ['text' => 'West Coast, Central, East, Canadian Shield and South'],
                      ['text' => 'Atlantic, North, Central, Prairies and West Coast'],
                      ['text' => 'Rockies, Ontario, Quebec and Prairies'],
                    ],
                    'correctAnswerId' => 3073,
                    'explanation' => 'The regions of Canada are Atlantic, North, Central, Prairies and West Coast.',
                  ],
                  [
                    'text' => 'Which province is the only officially bilingual province?',
                    'answers' => [
                      ['text' => 'Ontario'],
                      ['text' => 'Quebec'],
                      ['text' => 'Nova Scotia'],
                      ['text' => 'New Brunswick'],
                    ],
                    'correctAnswerId' => 3078,
                    'explanation' => 'New Brunswick is the only officially bilingual province, with about one-third of the population living and working in French.',
                  ],
                  [
                    'text' => 'Where do most French-speaking Canadians live?',
                    'answers' => [
                      ['text' => 'Nova Scotia'],
                      ['text' => 'Quebec'],
                      ['text' => 'Ontario'],
                      ['text' => 'New Brunswick'],
                    ],
                    'correctAnswerId' => 3080,
                    'explanation' => 'Nearly eight million people live in Quebec, the vast majority along or near the St. Lawrence River. More than three-quarters speak French as their first language.',
                  ],
                  [
                    'text' => 'What region is called the “Land of the Midnight Sun”?',
                    'answers' => [
                      ['text' => 'Central Canada'],
                      ['text' => 'The Northern Territories'],
                      ['text' => 'The Prairies'],
                      ['text' => 'The Maritimes'],
                    ],
                    'correctAnswerId' => 3084,
                    'explanation' => 'The North is often referred to as the “Land of Midnight Sun” because at the height of summer, daylight can last up to 24 hours.',
                  ],
                  [
                    'text' => 'Which two provinces produce more than three-quarters of Canadian manufactured goods?',
                    'answers' => [
                      ['text' => 'Quebec and Manitoba'],
                      ['text' => 'British Columbia and Ontario'],
                      ['text' => 'Ontario and Quebec'],
                      ['text' => 'Alberta and Ontario'],
                    ],
                    'correctAnswerId' => 3089,
                    'explanation' => 'Together, Ontario and Quebec produce more than three-quarters of all Canadian manufactured goods.',
                  ],
                  [
                    'text' => 'Which Canadian province is the largest producer of oil and natural gas?',
                    'answers' => [
                      ['text' => 'Quebec'],
                      ['text' => 'Nova Scotia'],
                      ['text' => 'Ontario'],
                      ['text' => 'Alberta'],
                    ],
                    'correctAnswerId' => 3094,
                    'explanation' => 'Alberta is the largest producer of oil and gas in Canada, including significant development of the oil sands in the north.',
                  ],
                  [
                    'text' => 'Which is the northeastern province in Canada that has its own time zone?',
                    'answers' => [
                      ['text' => 'Alberta'],
                      ['text' => 'Newfoundland and Labrador'],
                      ['text' => 'Nova Scotia'],
                      ['text' => 'Prince Edward Island'],
                    ],
                    'correctAnswerId' => 3096,
                    'explanation' => 'Newfoundland and Labrador is the most easterly point in North America and has its own time zone.',
                  ],
                  [
                    'text' => 'Which is the Canadian province with the largest population?',
                    'answers' => [
                      ['text' => 'Ontario'],
                      ['text' => 'Quebec'],
                      ['text' => 'Nova Scotia'],
                      ['text' => 'Alberta'],
                    ],
                    'correctAnswerId' => 3099,
                    'explanation' => 'Ontario is home to more than 12 million people, making up more than one-third of Canadians.',
                  ],
                  [
                    'text' => 'Which oceans line Canada\'s Frontiers?',
                    'answers' => [
                      ['text' => 'The Pacific Ocean in the West'],
                      ['text' => 'The Atlantic Ocean in the east'],
                      ['text' => 'The Arctic Ocean to the north'],
                      ['text' => 'All of the above'],
                    ],
                    'correctAnswerId' => 3106,
                    'explanation' => 'Three oceans line Canada’s frontiers: the Pacific Ocean in the west, the Atlantic Ocean in the east, and the Arctic Ocean to the north.',
                  ],
                  [
                    'text' => 'Which province has the largest population of Aboriginals?',
                    'answers' => [
                      ['text' => 'Manitoba'],
                      ['text' => 'Ontario'],
                      ['text' => 'Nova Scotia'],
                      ['text' => 'Alberta'],
                    ],
                    'correctAnswerId' => 3107,
                    'explanation' => 'Manitoba has the largest Aboriginal population of any province, with over 15% of its population being of Aboriginal descent.',
                  ],
                  [
                    'text' => 'How large is Canada?',
                    'answers' => [
                      ['text' => 'About 8 million square kilometers'],
                      ['text' => 'About 10 million square kilometers'],
                      ['text' => 'About 11 million square kilometers'],
                      ['text' => 'About 9 million square kilometers'],
                    ],
                    'correctAnswerId' => 3112,
                    'explanation' => 'Canada is the second largest country on earth, covering about 10 million square kilometers.',
                  ],
                  [
                    'text' => 'Where is the most important Harbor in Eastern Canada located?',
                    'answers' => [
                      ['text' => 'Vancouver'],
                      ['text' => 'Yellowknife'],
                      ['text' => 'Halifax'],
                      ['text' => 'Quebec'],
                    ],
                    'correctAnswerId' => 3117,
                    'explanation' => 'Halifax is Canada’s largest east coast port, strategically located and home to the country’s largest naval base.',
                  ],
                  [
                    'text' => 'What three oceans border Canada?',
                    'answers' => [
                      ['text' => 'Hudson, Pacific and Atlantic'],
                      ['text' => 'Atlantic, Arctic and bearing'],
                      ['text' => 'Pacific, Indian and Atlantic'],
                      ['text' => 'Atlantic, Arctic and Pacific'],
                    ],
                    'correctAnswerId' => 3122,
                    'explanation' => 'Canada is bordered by three oceans: the Pacific Ocean to the west, the Atlantic Ocean to the east, and the Arctic Ocean to the north.',
                  ],
                  [
                    'text' => 'To what ocean is Newfoundland closest?',
                    'answers' => [
                      ['text' => 'Atlantic'],
                      ['text' => 'Pacific'],
                      ['text' => 'Labrador Sea'],
                      ['text' => 'Arctic'],
                    ],
                    'correctAnswerId' => 3123,
                    'explanation' => 'Newfoundland is closest to the Atlantic Ocean.',
                  ],
                  [
                    'text' => 'What is the Okanagan Valley famous for?',
                    'answers' => [
                      ['text' => 'Coal mines'],
                      ['text' => 'Lakes and fishing'],
                      ['text' => 'Fruit orchards'],
                      ['text' => 'Sunrise and sunset'],
                    ],
                    'correctAnswerId' => 3129,
                    'explanation' => 'The Okanagan Valley in British Columbia is famous for its fruit orchards and wine industry.',
                  ],
                  [
                    'text' => 'Where are the Great Lakes?',
                    'answers' => [
                      ['text' => 'Atlantic Canada'],
                      ['text' => 'Manitoba'],
                      ['text' => 'Between Ontario and the United States'],
                      ['text' => 'Northern Quebec'],
                    ],
                    'correctAnswerId' => 3133,
                    'explanation' => 'The Great Lakes are located between Ontario in Canada and the United States.',
                  ],
                  [
                    'text' => 'When did thousands of miners first come to Yukon?',
                    'answers' => [
                      ['text' => '1870s'],
                      ['text' => '1980s'],
                      ['text' => '1780s'],
                      ['text' => '1890s'],
                    ],
                    'correctAnswerId' => 3138,
                    'explanation' => 'Thousands of miners came to Yukon during the Gold Rush of the 1890s.',
                  ],
                  [
                    'text' => 'What are the provinces of the Atlantic region?',
                    'answers' => [
                      ['text' => 'Newfoundland, Nova Scotia, New Brunswick and Quebec'],
                      ['text' => 'Nova Scotia, New Brunswick, Prince Edward Island and Quebec'],
                      ['text' => 'Nova Scotia, Newfoundland, New Brunswick and Prince Edward Island'],
                      ['text' => 'New Brunswick, Nova Scotia, Ontario and Quebec'],
                    ],
                    'correctAnswerId' => 3141,
                    'explanation' => 'The provinces of the Atlantic region are Nova Scotia, Newfoundland, New Brunswick, and Prince Edward Island.',
                  ],
                  [
                    'text' => 'Which country lies on Canada\'s Southern border?',
                    'answers' => [
                      ['text' => 'Central America'],
                      ['text' => 'Mexico'],
                      ['text' => 'Michigan'],
                      ['text' => 'United States of America'],
                    ],
                    'correctAnswerId' => 3146,
                    'explanation' => 'The United States of America lies on Canada\'s southern border.',
                  ],

                ]
              ],
              [
                'name' => 'Practice Test 11.3',
                'info' => 'Practice Test 11.3',
                'questions' => [
                  [
                    'text' => 'What are the Prairie Provinces?',
                    'answers' => [
                      ['text' => 'Saskatchewan and Manitoba'],
                      ['text' => 'Alberta, Manitoba, and British Columbia'],
                      ['text' => 'Saskatchewan, Alberta, and Manitoba'],
                      ['text' => 'Saskatchewan and Alberta'],
                    ],
                    'correctAnswerId' => 3149,
                    'explanation' => 'The Prairie Provinces are Saskatchewan, Alberta, and Manitoba. (P45)',
                  ],
                  [
                    'text' => 'Which two provinces are on the Atlantic coast of Canada?',
                    'answers' => [
                      ['text' => 'British Columbia and Yukon'],
                      ['text' => 'Nova Scotia and New Brunswick'],
                      ['text' => 'Newfoundland and British Columbia'],
                      ['text' => 'Prince Edward Island and Ontario'],
                    ],
                    'correctAnswerId' => 3153,
                    'explanation' => 'Nova Scotia and New Brunswick are on the Atlantic coast of Canada. (P45)',
                  ],
                  [
                    'text' => 'How many provinces and territories are there in Canada?',
                    'answers' => [
                      ['text' => 'Eight provinces and three territories'],
                      ['text' => 'Ten provinces and two territories'],
                      ['text' => 'Nine provinces and two territories'],
                      ['text' => 'Ten provinces and three territories'],
                    ],
                    'correctAnswerId' => 3158,
                    'explanation' => 'Canada has ten provinces and three territories. (P44)',
                  ],
                  [
                    'text' => 'Which two are Great Lakes?',
                    'answers' => [
                      ['text' => 'St Lawrence and Superior'],
                      ['text' => 'Ontario and Okanagan'],
                      ['text' => 'Michigan and Okanagan'],
                      ['text' => 'Huron and Erie'],
                    ],
                    'correctAnswerId' => 3159,
                    'explanation' => 'Lake Huron and Lake Erie are two of the Great Lakes located between Ontario and the United States. (P48)',
                  ],
                  [
                    'text' => 'What do political parties do?',
                    'answers' => [
                      ['text' => 'Follow commands from the King'],
                      ['text' => 'Share ideas about how government should work'],
                      ['text' => 'Plan for the celebration of Canada Day'],
                      ['text' => 'Work with the local governments'],
                    ],
                    'correctAnswerId' => 3164,
                    'explanation' => 'Political parties in Canada share ideas about how government should work. (P31)',
                  ],
                  [
                    'text' => 'Which province is Canada\'s largest producer of hydroelectricity?',
                    'answers' => [
                      ['text' => 'British Columbia'],
                      ['text' => 'Manitoba'],
                      ['text' => 'Ontario'],
                      ['text' => 'Quebec'],
                    ],
                    'correctAnswerId' => 3170,
                    'explanation' => 'Quebec is Canada’s largest producer of hydroelectricity due to its abundant fresh water supply. (P47)',
                  ],
                  [
                    'text' => 'Which territory shares a border with another country?',
                    'answers' => [
                      ['text' => 'British Columbia'],
                      ['text' => 'Alberta'],
                      ['text' => 'Northwest Territories'],
                      ['text' => 'Yukon Territory'],
                    ],
                    'correctAnswerId' => 3174,
                    'explanation' => 'Yukon Territory shares a border with the United States (Alaska). (P50)',
                  ],
                  [
                    'text' => 'When was the Canadian Pacific Railway finished?',
                    'answers' => [
                      ['text' => 'Late 1600s'],
                      ['text' => 'Late 1700s'],
                      ['text' => 'Late 1800s'],
                      ['text' => 'Early 1700s'],
                    ],
                    'correctAnswerId' => 3177,
                    'explanation' => 'The Canadian Pacific Railway was completed in the late 1800s, specifically on November 7, 1885. (P20)',
                  ],
                  [
                    'text' => 'What are the territories of Northern Canada?',
                    'answers' => [
                      ['text' => 'Nunavut and Yukon Territory'],
                      ['text' => 'Northwest Territories and Alaska'],
                      ['text' => 'Yukon and Northwest Territories'],
                      ['text' => 'Yukon Territory, Northwest Territories, and Nunavut'],
                    ],
                    'correctAnswerId' => 3182,
                    'explanation' => 'The territories of Northern Canada are Yukon Territory, Northwest Territories, and Nunavut. (P50)',
                  ],
                  [
                    'text' => 'Why is British Columbia known as Canada\'s Pacific Gateway?',
                    'answers' => [
                      ['text' => 'Because billions of dollars in goods are shipped to and from Asia'],
                      ['text' => 'Because it has the Pacific Ocean on its coastline'],
                      ['text' => 'Because many people of Asian origin live there'],
                      ['text' => 'Because it attracts many tourists all year round'],
                    ],
                    'correctAnswerId' => 3183,
                    'explanation' => 'British Columbia is known as Canada\'s Pacific Gateway because billions of dollars in goods are shipped to and from Asia through its ports, particularly Vancouver. (P49)',
                  ],
                  [
                    'text' => 'Which is Canada\'s largest city and main financial center?',
                    'answers' => [
                      ['text' => 'Vancouver'],
                      ['text' => 'Toronto'],
                      ['text' => 'Montreal'],
                      ['text' => 'Calgary'],
                    ],
                    'correctAnswerId' => 3188,
                    'explanation' => 'Toronto is the largest city in Canada and the country’s main financial centre. (P48)',
                  ],
                  [
                    'text' => 'What language do more than three-quarters of the people who live in Quebec speak?',
                    'answers' => [
                      ['text' => 'French as their second language'],
                      ['text' => 'French as their first language'],
                      ['text' => 'German as their first language'],
                      ['text' => 'English as their first language'],
                    ],
                    'correctAnswerId' => 3192,
                    'explanation' => 'More than three-quarters of people in Quebec speak French as their first language. (P47)',
                  ],
                  [
                    'text' => 'Which province is connected to Mainland Canada by one of the longest continuous multi-span bridges in the world?',
                    'answers' => [
                      ['text' => 'Prince Edward Island'],
                      ['text' => 'Newfoundland and Labrador'],
                      ['text' => 'Alberta'],
                      ['text' => 'Ontario'],
                    ],
                    'correctAnswerId' => 3196,
                    'explanation' => 'Prince Edward Island is connected to mainland Canada by the Confederation Bridge, one of the longest continuous multi-span bridges in the world. (P46)',
                  ],
                  [
                    'text' => 'What is significant about the number of people living in Ontario?',
                    'answers' => [
                      ['text' => 'They make up two-thirds of all Canadians'],
                      ['text' => 'They make up three-fourths of all Canadians'],
                      ['text' => 'They make up one-third of all Canadians'],
                      ['text' => 'They make up half of all Canadians'],
                    ],
                    'correctAnswerId' => 3201,
                    'explanation' => 'At more than 12 million, the people of Ontario make up more than one-third of Canadians. (P48)',
                  ],
                  [
                    'text' => 'Which province has a long history of coal mining, forestry, and agriculture?',
                    'answers' => [
                      ['text' => 'Nova Scotia'],
                      ['text' => 'New Brunswick'],
                      ['text' => 'Prince Edward Island'],
                      ['text' => 'Ontario'],
                    ],
                    'correctAnswerId' => 3204,
                    'explanation' => 'Nova Scotia has a long history of coal mining, forestry, and agriculture. Today there is also offshore oil and gas exploration. (P46)',
                  ],
                  [
                    'text' => 'How is Canada ranked in terms of geographical size in the world?',
                    'answers' => [
                      ['text' => 'It is the second largest country on Earth'],
                      ['text' => 'It is the smallest country on Earth'],
                      ['text' => 'It is the largest country on Earth'],
                      ['text' => 'It is the seventh largest country on Earth'],
                    ],
                    'correctAnswerId' => 3207,
                    'explanation' => 'Canada is the second largest country on Earth, covering approximately 10 million square kilometers. (P44)',
                  ],
                  [
                    'text' => 'Which province is Canada\'s leading wheat producer?',
                    'answers' => [
                      ['text' => 'Manitoba'],
                      ['text' => 'New Brunswick'],
                      ['text' => 'Alberta'],
                      ['text' => 'Saskatchewan'],
                    ],
                    'correctAnswerId' => 3214,
                    'explanation' => 'Saskatchewan, known as the "breadbasket of the world", has 40% of Canada\'s arable land and is the largest producer of grains and oilseeds. (P48)',
                  ],
                  [
                    'text' => 'Which Port is the largest and busiest in Canada?',
                    'answers' => [
                      ['text' => 'The port of Halifax'],
                      ['text' => 'The port of Montreal'],
                      ['text' => 'The port of Vancouver'],
                      ['text' => 'The port of Victoria'],
                    ],
                    'correctAnswerId' => 3217,
                    'explanation' => 'The Port of Vancouver is Canada’s largest and busiest, handling billions of dollars in goods traded worldwide. (P49)',
                  ],
                  [
                    'text' => 'What are the Atlantic provinces?',
                    'answers' => [
                      ['text' => 'Nova Scotia, New Brunswick, Prince Edward Island in Quebec'],
                      ['text' => 'New Brunswick, Newfoundland, Nova Scotia, Prince Edward Island'],
                      ['text' => 'Alberta, Saskatchewan, and Manitoba'],
                      ['text' => 'Nova Scotia, New Brunswick, Quebec, and Ontario'],
                    ],
                    'correctAnswerId' => 3220,
                    'explanation' => 'The Atlantic provinces are New Brunswick, Newfoundland, Nova Scotia, and Prince Edward Island. (P45)',
                  ],

                ]
              ],
              [
                'name' => 'Practice Test 11.4',
                'info' => 'Practice Test 11.4',
                'questions' => [
                  [
                    'text' => 'What is the capital city of Canada?',
                    'answers' => [
                      ['text' => 'Ottawa'],
                      ['text' => 'Victoria'],
                      ['text' => 'Toronto'],
                      ['text' => 'Ontario'],
                    ],
                    'correctAnswerId' => 3225,
                    'explanation' => 'Ottawa, located on the Ottawa River, was chosen as the capital in 1857 by Queen Victoria, the great-great-grandmother of Queen Elizabeth II. (P44)',
                  ],
                  [
                    'text' => 'Prairies Province includes:',
                    'answers' => [
                      ['text' => 'Manitoba, Alberta, Saskatchewan'],
                      ['text' => 'Ontario, Quebec, Nova Scotia, New Brunswick'],
                      ['text' => 'New Brunswick, Newfoundland, Nova Scotia, Prince Edward Island'],
                      ['text' => 'Ontario, Nova Scotia, New Brunswick and Alberta'],
                    ],
                    'correctAnswerId' => 3227,
                    'explanation' => 'The Prairie Provinces include Manitoba, Alberta, and Saskatchewan. (P45)',
                  ],
                  [
                    'text' => 'Which province is the most easterly point in Canada?',
                    'answers' => [
                      ['text' => 'Prince Edward Island'],
                      ['text' => 'New Brunswick'],
                      ['text' => 'Nova Scotia'],
                      ['text' => 'Newfoundland and Labrador'],
                    ],
                    'correctAnswerId' => 3234,
                    'explanation' => 'Newfoundland and Labrador is the most easterly point in North America and has its own time zone. (P46)',
                  ],
                  [
                    'text' => 'Where is Canada\'s largest naval base located?',
                    'answers' => [
                      ['text' => 'Vancouver'],
                      ['text' => 'Quebec City'],
                      ['text' => 'Halifax'],
                      ['text' => 'Toronto'],
                    ],
                    'correctAnswerId' => 3237,
                    'explanation' => 'Halifax is Canada’s largest east coast port, deep-water and ice-free, and is home to Canada’s largest naval base. (P46)',
                  ],
                  [
                    'text' => 'Which one of the following is the most populated province in Canada?',
                    'answers' => [
                      ['text' => 'Quebec'],
                      ['text' => 'British Columbia'],
                      ['text' => 'Ontario'],
                      ['text' => 'Alberta'],
                    ],
                    'correctAnswerId' => 3241,
                    'explanation' => 'Ontario is the most populated province in Canada. (P48)',
                  ],
                  [
                    'text' => 'Why did thousands of miners come to the Yukon in the 1890s?',
                    'answers' => [
                      ['text' => 'To build the Yukon Railway'],
                      ['text' => 'For the Gold rush'],
                      ['text' => 'Because of the discovery of oil'],
                      ['text' => 'To build the Pacific Railway'],
                    ],
                    'correctAnswerId' => 3244,
                    'explanation' => 'Thousands of miners came to the Yukon during the Gold Rush of the 1890s. (P50)',
                  ],
                  [
                    'text' => 'What are the central provinces?',
                    'answers' => [
                      ['text' => 'British Columbia and Ontario'],
                      ['text' => 'Alberta and Ontario'],
                      ['text' => 'Quebec and Ontario'],
                      ['text' => 'British Columbia and Alberta'],
                    ],
                    'correctAnswerId' => 3249,
                    'explanation' => 'Quebec and Ontario are known as Central Canada, the industrial and manufacturing heartland. (P47)',
                  ],
                  [
                    'text' => 'Which province in Canada is the smallest in land size?',
                    'answers' => [
                      ['text' => 'British Columbia'],
                      ['text' => 'Prince Edward Island'],
                      ['text' => 'Alberta'],
                      ['text' => 'New Brunswick'],
                    ],
                    'correctAnswerId' => 3252,
                    'explanation' => 'Prince Edward Island (P.E.I.) is the smallest province in Canada. (P46)',
                  ],
                  [
                    'text' => 'From whom is Canada\'s tallest mountain named?',
                    'answers' => [
                      ['text' => 'William Logan'],
                      ['text' => 'Louis Riel'],
                      ['text' => 'Terry Fox'],
                      ['text' => 'Wayne Gretzky'],
                    ],
                    'correctAnswerId' => 3255,
                    'explanation' => 'Mount Logan, the highest mountain in Canada, is named after Sir William Logan, a renowned geologist. (P50)',
                  ],
                  [
                    'text' => 'Which of the following describes two responsibilities of the federal government?',
                    'answers' => [
                      ['text' => 'National Defense and foreign policy'],
                      ['text' => 'National Defense and firefighting'],
                      ['text' => 'Citizenship and maintaining highways'],
                      ['text' => 'Healthcare and education'],
                    ],
                    'correctAnswerId' => 3259,
                    'explanation' => 'Two responsibilities of the federal government of Canada are National Defense and foreign policy. (P54)',
                  ],
                  [
                    'text' => 'What is the NAFTA agreement?',
                    'answers' => [
                      ['text' => 'Free trade between Canada, the United States and the United Kingdom'],
                      ['text' => 'Free trade between Canada, Europe and Mexico'],
                      ['text' => 'Free trade between Canada, the United States and Europe'],
                      ['text' => 'Free trade between Canada, the United States and Mexico'],
                    ],
                    'correctAnswerId' => 3266,
                    'explanation' => 'NAFTA stands for North American Free Trade Agreement, which is an agreement for free trade between Canada, the United States, and Mexico. (Explanation provided)',
                  ],
                  [
                    'text' => 'Which province has its own time zone?',
                    'answers' => [
                      ['text' => 'Newfoundland and Labrador'],
                      ['text' => 'Prince Edward Island'],
                      ['text' => 'Nunavut'],
                      ['text' => 'Yukon'],
                    ],
                    'correctAnswerId' => 3267,
                    'explanation' => 'Newfoundland and Labrador is the most easterly point in North America and has its own time zone. (Explanation provided)',
                  ],
                  [
                    'text' => 'Which of the following provinces/territories borders the Arctic Ocean?',
                    'answers' => [
                      ['text' => 'Manitoba'],
                      ['text' => 'Ontario'],
                      ['text' => 'Nunavut'],
                      ['text' => 'Newfoundland and Labrador'],
                    ],
                    'correctAnswerId' => 3273,
                    'explanation' => 'The territory of Nunavut borders the Arctic Ocean. (Explanation provided)',
                  ],
                  [
                    'text' => 'Which of the following is Canada’s second largest city?',
                    'answers' => [
                      ['text' => 'Vancouver'],
                      ['text' => 'Toronto'],
                      ['text' => 'Montreal'],
                      ['text' => 'Ottawa'],
                    ],
                    'correctAnswerId' => 3277,
                    'explanation' => 'Montreal is Canada’s second largest city and the second largest mainly French-speaking city in the world after Paris. (Explanation provided)',
                  ],
                  [
                    'text' => 'Which of the following does not border Quebec?',
                    'answers' => [
                      ['text' => 'Ontario'],
                      ['text' => 'Nova Scotia'],
                      ['text' => 'New Brunswick'],
                      ['text' => 'Atlantic Ocean'],
                    ],
                    'correctAnswerId' => 3280,
                    'explanation' => 'Nova Scotia does not border Quebec. (Explanation provided)',
                  ],
                  [
                    'text' => 'Who chose Ottawa as the capital of Canada?',
                    'answers' => [
                      ['text' => 'Queen Elizabeth I'],
                      ['text' => 'Queen Anne'],
                      ['text' => 'Queen Victoria'],
                      ['text' => 'Queen Elizabeth II'],
                    ],
                    'correctAnswerId' => 3285,
                    'explanation' => 'Ottawa was chosen as the capital in 1857 by Queen Victoria, the great-great-grandmother of Queen Elizabeth II. (Explanation provided)',
                  ],
                  [
                    'text' => 'Which province has 40% of the arable land in Canada?',
                    'answers' => [
                      ['text' => 'New Brunswick'],
                      ['text' => 'Saskatchewan'],
                      ['text' => 'Manitoba'],
                      ['text' => 'Yukon'],
                    ],
                    'correctAnswerId' => 3288,
                    'explanation' => 'Saskatchewan has 40% of the arable land in Canada and is the country’s largest producer of grains and oilseeds. (Explanation provided)',
                  ],
                  [
                    'text' => 'Which provinces have some of the most fertile farmlands in the world?',
                    'answers' => [
                      ['text' => 'Ontario, Quebec and New Brunswick'],
                      ['text' => 'Manitoba, Saskatchewan and Alberta'],
                      ['text' => 'British Columbia, Alberta and Yukon'],
                      ['text' => 'Manitoba, Ontario and Quebec'],
                    ],
                    'correctAnswerId' => 3292,
                    'explanation' => 'Manitoba, Saskatchewan, and Alberta are known for having some of the most fertile farmland in the world. (Explanation provided)',
                  ],
                  [
                    'text' => 'What are the main goods produced in British Columbia?',
                    'answers' => [
                      ['text' => 'Fishing products'],
                      ['text' => 'Auto industry products'],
                      ['text' => 'Farming products'],
                      ['text' => 'Forestry products'],
                    ],
                    'correctAnswerId' => 3298,
                    'explanation' => 'About one-half of all the goods produced in British Columbia are forestry products, making it the most valuable forestry industry in Canada. (Explanation provided)',
                  ],
                  [
                    'text' => 'Where is the world-famous Lake Louise?',
                    'answers' => [
                      ['text' => 'Appalachian Mountains'],
                      ['text' => 'Rocky Mountains'],
                      ['text' => 'Selkirk Mountains'],
                      ['text' => 'Interior Mountains'],
                    ],
                    'correctAnswerId' => 3300,
                    'explanation' => 'Lake Louise is located in the Rocky Mountains of Alberta, Canada. (Explanation provided)',
                  ],

                ]
              ],
              [
                'name' => 'Practice Test 11.5',
                'info' => 'Practice Test 11.5',
                'questions' => [
                  [
                    'text' => 'What is the capital of British Columbia?',
                    'answers' => [
                      ['text' => 'Vancouver'],
                      ['text' => 'Victoria'],
                      ['text' => 'Calgary'],
                      ['text' => 'Edmonton'],
                    ],
                    'correctAnswerId' => 3304,
                    'explanation' => 'Victoria is the capital of British Columbia. (Explanation provided)',
                  ],
                  [
                    'text' => 'In Quebec, how many people speak French as their first language?',
                    'answers' => [
                      ['text' => 'Less than half'],
                      ['text' => 'About one-third'],
                      ['text' => '1'],
                      ['text' => 'More than three-quarters'],
                    ],
                    'correctAnswerId' => 3310,
                    'explanation' => 'More than three-quarters of people in Quebec speak French as their first language. (Explanation provided)',
                  ],
                  [
                    'text' => 'In Canada, where can you find one of the longest continuous multispan bridges in the world?',
                    'answers' => [
                      ['text' => 'Nova Scotia'],
                      ['text' => 'Quebec'],
                      ['text' => 'Ontario'],
                      ['text' => 'Prince Edward Island'],
                    ],
                    'correctAnswerId' => 3314,
                    'explanation' => 'Prince Edward Island (P.E.I.) is connected to mainland Canada by one of the longest continuous multispan bridges in the world, the Confederation Bridge. (Explanation provided)',
                  ],
                  [
                    'text' => 'What is the capital of Nova Scotia?',
                    'answers' => [
                      ['text' => 'St. John\'s'],
                      ['text' => 'Halifax'],
                      ['text' => 'Charlottetown'],
                      ['text' => 'Fredericton'],
                    ],
                    'correctAnswerId' => 3316,
                    'explanation' => 'Halifax is the capital of Nova Scotia. (Explanation provided)',
                  ],
                  [
                    'text' => 'In terms of size, how does Ottawa’s metropolitan area rank in Canada?',
                    'answers' => [
                      ['text' => 'Second largest metropolitan area'],
                      ['text' => 'Third largest metropolitan area'],
                      ['text' => 'Largest metropolitan area'],
                      ['text' => 'Fourth largest metropolitan area'],
                    ],
                    'correctAnswerId' => 3322,
                    'explanation' => 'Ottawa’s metropolitan area is the fourth largest in Canada. (Explanation provided)',
                  ],
                  [
                    'text' => 'In Nunavut, beside English, which other language is also an official language and first language in schools?',
                    'answers' => [
                      ['text' => 'Metis'],
                      ['text' => 'French'],
                      ['text' => 'Acadian'],
                      ['text' => 'Inuktitut'],
                    ],
                    'correctAnswerId' => 3326,
                    'explanation' => 'Inuktitut is an official language and the first language in schools in Nunavut. (Explanation provided)',
                  ],
                  [
                    'text' => 'How many provinces and territories are there in Canada?',
                    'answers' => [
                      ['text' => 'Ten provinces and three territories'],
                      ['text' => 'Ten provinces and four territories'],
                      ['text' => 'Eight provinces and five territories'],
                      ['text' => 'Nine provinces and three territories'],
                    ],
                    'correctAnswerId' => 3327,
                    'explanation' => 'Canada has ten provinces and three territories. (Explanation provided)',
                  ],
                  [
                    'text' => 'For what is Lake Superior known?',
                    'answers' => [
                      ['text' => 'Deepest lake in the world'],
                      ['text' => 'Largest fresh water lake in the world'],
                      ['text' => 'Largest dam in the world'],
                      ['text' => 'Largest fresh water fishing industry in the world'],
                    ],
                    'correctAnswerId' => 3332,
                    'explanation' => 'Lake Superior is known as the largest fresh water lake in the world. (Explanation provided)',
                  ],
                  [
                    'text' => 'What is the capital of New Brunswick?',
                    'answers' => [
                      ['text' => 'Halifax'],
                      ['text' => 'Regina'],
                      ['text' => 'Fredericton'],
                      ['text' => 'Winnipeg'],
                    ],
                    'correctAnswerId' => 3337,
                    'explanation' => 'Fredericton is the capital of New Brunswick. (Explanation provided)',
                  ],
                  [
                    'text' => 'In Canada, where do more than half of the people live?',
                    'answers' => [
                      ['text' => 'West Coast'],
                      ['text' => 'Atlantic provinces'],
                      ['text' => 'Central Canada'],
                      ['text' => 'Prairie provinces'],
                    ],
                    'correctAnswerId' => 3341,
                    'explanation' => 'More than half of the people in Canada live in Central Canada, near the Great Lakes and the St. Lawrence River. (Explanation provided)',
                  ],
                  [
                    'text' => 'In terms of size, how does Canada rank?',
                    'answers' => [
                      ['text' => 'Third largest country on earth'],
                      ['text' => 'First largest country on earth'],
                      ['text' => 'Second largest country on earth'],
                      ['text' => 'Fourth largest country on earth'],
                    ],
                    'correctAnswerId' => 3345,
                    'explanation' => 'Canada is the second largest country on earth, covering 10 million square kilometers. (Explanation provided)',
                  ],
                  [
                    'text' => 'How many national parks does Alberta have?',
                    'answers' => [
                      ['text' => 'One'],
                      ['text' => 'Five'],
                      ['text' => 'Ten'],
                      ['text' => 'Three'],
                    ],
                    'correctAnswerId' => 3348,
                    'explanation' => 'Alberta has five national parks, including Banff National Park. (Explanation provided)',
                  ],
                  [
                    'text' => 'What is the capital of Manitoba?',
                    'answers' => [
                      ['text' => 'Winnipeg'],
                      ['text' => 'Regina'],
                      ['text' => 'Edmonton'],
                      ['text' => 'Calgary'],
                    ],
                    'correctAnswerId' => 3351,
                    'explanation' => 'Winnipeg is the capital of Manitoba. (Explanation provided)',
                  ],
                  [
                    'text' => 'What is Canada’s smallest province?',
                    'answers' => [
                      ['text' => 'Nunavut'],
                      ['text' => 'Prince Edward Island'],
                      ['text' => 'Nova Scotia'],
                      ['text' => 'Saskatchewan'],
                    ],
                    'correctAnswerId' => 3355,
                    'explanation' => 'Prince Edward Island (P.E.I.) is the smallest province in Canada. (Explanation provided)',
                  ],
                  [
                    'text' => 'What is Canada’s second largest, mainly French-speaking city in the world, after Paris?',
                    'answers' => [
                      ['text' => 'Quebec City'],
                      ['text' => 'Ottawa'],
                      ['text' => 'Montreal'],
                      ['text' => 'Halifax'],
                    ],
                    'correctAnswerId' => 3361,
                    'explanation' => 'Montreal is Canada’s second largest city and the second largest mainly French-speaking city in the world after Paris. (Explanation provided)',
                  ],
                  [
                    'text' => 'What is Canada’s national capital?',
                    'answers' => [
                      ['text' => 'Vancouver'],
                      ['text' => 'Montreal'],
                      ['text' => 'Toronto'],
                      ['text' => 'Ottawa'],
                    ],
                    'correctAnswerId' => 3366,
                    'explanation' => 'Ottawa is Canada’s national capital. (Explanation provided)',
                  ],
                  [
                    'text' => 'How many of the Great Lakes are located between Ontario and the United States?',
                    'answers' => [
                      ['text' => 'Three'],
                      ['text' => 'Two'],
                      ['text' => 'Four'],
                      ['text' => 'Five'],
                    ],
                    'correctAnswerId' => 3370,
                    'explanation' => 'There are five Great Lakes located between Ontario and the United States. (Explanation provided)',
                  ],
                  [
                    'text' => 'What is known as the birthplace of Confederation?',
                    'answers' => [
                      ['text' => 'Nova Scotia'],
                      ['text' => 'Quebec'],
                      ['text' => 'Prince Edward Island'],
                      ['text' => 'Ontario'],
                    ],
                    'correctAnswerId' => 3373,
                    'explanation' => 'Prince Edward Island (P.E.I.) is known as the birthplace of Confederation. (Explanation provided)',
                  ],
                  [
                    'text' => 'What is the capital of Alberta?',
                    'answers' => [
                      ['text' => 'Calgary'],
                      ['text' => 'Edmonton'],
                      ['text' => 'Red Deer'],
                      ['text' => 'Regina'],
                    ],
                    'correctAnswerId' => 3376,
                    'explanation' => 'Edmonton is the capital of Alberta. (Explanation provided)',
                  ],
                  [
                    'text' => 'What is the capital of Newfoundland and Labrador?',
                    'answers' => [
                      ['text' => 'Charlottetown'],
                      ['text' => 'St. John\'s'],
                      ['text' => 'Halifax'],
                      ['text' => 'Fredericton'],
                    ],
                    'correctAnswerId' => 3380,
                    'explanation' => 'St. John’s is the capital of Newfoundland and Labrador. (Explanation provided)',
                  ],

                ]
              ],

              [
                'name' => 'Practice Test 11.6',
                'info' => 'Practice Test 11.6',
                'questions' => [
                  [
                    'text' => 'What is the capital of Nunavut?',
                    'answers' => [
                      ['text' => 'Edmonton'],
                      ['text' => 'Iqaluit'],
                      ['text' => 'Yellowknife'],
                      ['text' => 'Inuit'],
                    ],
                    'correctAnswerId' => 3384,
                    'explanation' => 'Iqaluit is the capital of Nunavut.',
                  ],

                  [
                    'text' => 'Which of the following does not border New Brunswick?',
                    'answers' => [
                      ['text' => 'Nova Scotia'],
                      ['text' => 'Prince Edward Island'],
                      ['text' => 'Quebec'],
                      ['text' => 'Atlantic Ocean'],
                    ],
                    'correctAnswerId' => 3388,
                    'explanation' => 'Prince Edward Island does not border New Brunswick.',
                  ],

                  [
                    'text' => 'What is the capital of Quebec?',
                    'answers' => [
                      ['text' => 'Quebec City'],
                      ['text' => 'Montreal'],
                      ['text' => 'Chicoutimi'],
                      ['text' => 'Saint-Jean'],
                    ],
                    'correctAnswerId' => 3391,
                    'explanation' => 'Quebec City is the capital of Quebec.',
                  ],

                  [
                    'text' => 'Which of the following does not border British Columbia?',
                    'answers' => [
                      ['text' => 'Saskatchewan'],
                      ['text' => 'Alberta'],
                      ['text' => 'Yukon'],
                      ['text' => 'Northwest Territories'],
                    ],
                    'correctAnswerId' => 3395,
                    'explanation' => 'Saskatchewan does not border British Columbia.',
                  ],

                  [
                    'text' => 'What is the capital of the Yukon?',
                    'answers' => [
                      ['text' => 'Yellowknife'],
                      ['text' => 'Iqaluit'],
                      ['text' => 'Whitehorse'],
                      ['text' => 'Edmonton'],
                    ],
                    'correctAnswerId' => 3401,
                    'explanation' => 'Whitehorse is the capital of the Yukon.',
                  ],

                  [
                    'text' => 'Which of the following does not border Nunavut?',
                    'answers' => [
                      ['text' => 'Northwest Territories'],
                      ['text' => 'Ontario'],
                      ['text' => 'Arctic Ocean'],
                      ['text' => 'Manitoba'],
                    ],
                    'correctAnswerId' => 3404,
                    'explanation' => 'Ontario does not border Nunavut.',
                  ],

                  [
                    'text' => 'Which of the following borders Nova Scotia?',
                    'answers' => [
                      ['text' => 'Ontario'],
                      ['text' => 'Quebec'],
                      ['text' => 'New Brunswick'],
                      ['text' => 'Prince Edward Island'],
                    ],
                    'correctAnswerId' => 3409,
                    'explanation' => 'New Brunswick borders Nova Scotia.',
                  ],

                  [
                    'text' => 'What is the oldest colony of the British Empire?',
                    'answers' => [
                      ['text' => 'New Brunswick'],
                      ['text' => 'Prince Edward Island'],
                      ['text' => 'Nova Scotia'],
                      ['text' => 'Newfoundland and Labrador'],
                    ],
                    'correctAnswerId' => 3414,
                    'explanation' => 'Newfoundland and Labrador is the oldest colony of the British Empire and a strategic prize in Canada’s early history, known for its fisheries, coastal fishing villages, and distinct culture.',
                  ],

                  [
                    'text' => 'What is the capital of Prince Edward Island?',
                    'answers' => [
                      ['text' => 'St. John\'s'],
                      ['text' => 'Fredericton'],
                      ['text' => 'Charlottetown'],
                      ['text' => 'Halifax'],
                    ],
                    'correctAnswerId' => 3417,
                    'explanation' => 'Charlottetown is the capital of Prince Edward Island.',
                  ],

                  [
                    'text' => 'What is the name of the Canadian river that represents the second-longest river system in North America?',
                    'answers' => [
                      ['text' => 'The Columbia River'],
                      ['text' => 'St. Lawrence River'],
                      ['text' => 'Yukon River'],
                      ['text' => 'Mackenzie River'],
                    ],
                    'correctAnswerId' => 3422,
                    'explanation' => 'The Mackenzie River, at 4,200 kilometres, is the second-longest river system in North America after the Mississippi and drains an area of 1.8 million square kilometres.',
                  ],
                  [
                    'text' => 'What is the population of Canada?',
                    'answers' => [
                      ['text' => 'About 18 million people'],
                      ['text' => 'About 34 million people'],
                      ['text' => 'About 42 million people'],
                      ['text' => 'About 68 million people'],
                    ],
                    'correctAnswerId' => 3424,
                    'explanation' => 'Canada has a population of about 34 million people. While the majority live in cities, Canadians also live in small towns, rural areas and everywhere in between.',
                  ],

                  [
                    'text' => 'Which of the following defines Northern Canada?',
                    'answers' => [
                      ['text' => 'Nunavut, Northwest Territories and Newfoundland'],
                      ['text' => 'Nunavut and Northwest Territories'],
                      ['text' => 'Northwest Territories and Yukon'],
                      ['text' => 'Nunavut, Northwest Territories and Yukon'],
                    ],
                    'correctAnswerId' => 3430,
                    'explanation' => 'Northern Canada includes Nunavut, Northwest Territories and Yukon.',
                  ],

                  [
                    'text' => 'Which of the following borders Prince Edward Island?',
                    'answers' => [
                      ['text' => 'Quebec'],
                      ['text' => 'New Brunswick'],
                      ['text' => 'Nova Scotia'],
                      ['text' => 'Atlantic Ocean'],
                    ],
                    'correctAnswerId' => 3434,
                    'explanation' => 'The Atlantic Ocean borders Prince Edward Island.',
                  ],

                  [
                    'text' => 'Which of the following does not border Manitoba?',
                    'answers' => [
                      ['text' => 'Ontario'],
                      ['text' => 'Saskatchewan'],
                      ['text' => 'Quebec'],
                      ['text' => 'U.S.A.'],
                    ],
                    'correctAnswerId' => 3437,
                    'explanation' => 'Quebec does not border Manitoba.',
                  ],

                  [
                    'text' => 'Which of the following does not border Alberta?',
                    'answers' => [
                      ['text' => 'Saskatchewan'],
                      ['text' => 'British Columbia'],
                      ['text' => 'Manitoba'],
                      ['text' => 'Northwest Territories'],
                    ],
                    'correctAnswerId' => 3441,
                    'explanation' => 'Manitoba does not border Alberta.',
                  ],

                  [
                    'text' => 'What is the capital of Saskatchewan?',
                    'answers' => [
                      ['text' => 'Saskatoon'],
                      ['text' => 'Winnipeg'],
                      ['text' => 'Edmonton'],
                      ['text' => 'Regina'],
                    ],
                    'correctAnswerId' => 3446,
                    'explanation' => 'Regina is the capital of Saskatchewan.',
                  ],

                  [
                    'text' => 'Which of the following does not border Ontario?',
                    'answers' => [
                      ['text' => 'Hudson Bay'],
                      ['text' => 'Nova Scotia'],
                      ['text' => 'Manitoba'],
                      ['text' => 'Quebec'],
                    ],
                    'correctAnswerId' => 3448,
                    'explanation' => 'Nova Scotia does not border Ontario.',
                  ],

                  [
                    'text' => 'What is the most easterly point in North America?',
                    'answers' => [
                      ['text' => 'Newfoundland and Labrador'],
                      ['text' => 'New Brunswick'],
                      ['text' => 'Prince Edward Island'],
                      ['text' => 'Nova Scotia'],
                    ],
                    'correctAnswerId' => 3451,
                    'explanation' => 'Newfoundland and Labrador is the most easterly point in North America and has its own time zone. In addition to its natural beauty, the province has a unique heritage linked to the sea.',
                  ],

                  [
                    'text' => 'What is the capital of the Northwest Territories?',
                    'answers' => [
                      ['text' => 'Iqaluit'],
                      ['text' => 'Whitehorse'],
                      ['text' => 'Yellowknife'],
                      ['text' => 'Edmonton'],
                    ],
                    'correctAnswerId' => 3457,
                    'explanation' => 'Yellowknife is the capital of the Northwest Territories.',
                  ],

                  [
                    'text' => 'Which of the following defines Central Canada?',
                    'answers' => [
                      ['text' => 'Manitoba and Saskatchewan'],
                      ['text' => 'Quebec and Ontario'],
                      ['text' => 'Quebec and Manitoba'],
                      ['text' => 'Ontario and Saskatchewan'],
                    ],
                    'correctAnswerId' => 3460,
                    'explanation' => 'More than half the people in Canada live in cities and towns near the Great Lakes and the St. Lawrence River in southern Quebec and Ontario, known as Central Canada and the industrial and manufacturing heartland.',
                  ],

                ]
              ],

              [
                'name' => 'Practice Test 11.7',
                'info' => 'Practice Test 11.7',
                'questions' => [
                  [
                    'text' => 'What represents a significant part of the economy of the Yukon?',
                    'answers' => [
                      ['text' => 'Mining'],
                      ['text' => 'Hunting'],
                      ['text' => 'Trapping'],
                      ['text' => 'Fishing'],
                    ],
                    'correctAnswerId' => 3463,
                    'explanation' => 'Thousands of miners came to the Yukon during the Gold Rush of the 1890s, as celebrated in the poetry of Robert W. Service. Mining remains a significant part of the economy.',
                  ],

                  [
                    'text' => 'Where is Western Canada’s largest Francophone community?',
                    'answers' => [
                      ['text' => 'Manitoba'],
                      ['text' => 'Alberta'],
                      ['text' => 'British Columbia'],
                      ['text' => 'Saskatchewan'],
                    ],
                    'correctAnswerId' => 3467,
                    'explanation' => 'Winnipeg’s French Quarter, St. Boniface, has Western Canada’s largest Francophone community at 45,000. Manitoba is also an important centre of Ukrainian culture, with 14% reporting Ukrainian origins, and the largest Aboriginal population of any province, at over 15%.',
                  ],

                  [
                    'text' => 'Where is Canada’s largest naval base?',
                    'answers' => [
                      ['text' => 'Vancouver'],
                      ['text' => 'Nova Scotia'],
                      ['text' => 'Ontario'],
                      ['text' => 'New Brunswick'],
                    ],
                    'correctAnswerId' => 3472,
                    'explanation' => 'Halifax, Nova Scotia has played an important role in Atlantic trade and defence and is home to Canada’s largest naval base.',
                  ],

                  [
                    'text' => 'Which of the following is Canada’s Asia-Pacific gateway?',
                    'answers' => [
                      ['text' => 'Alberta'],
                      ['text' => 'British Columbia'],
                      ['text' => 'Yukon'],
                      ['text' => 'Nova Scotia'],
                    ],
                    'correctAnswerId' => 3476,
                    'explanation' => 'The Port of Vancouver is our gateway to the Asia-Pacific. About one-half of all the goods produced in B.C. are forestry products, including lumber, newsprint, and pulp and paper products—the most valuable forestry industry in Canada.',
                  ],

                  [
                    'text' => 'Which of the following provinces/territories borders the Pacific Ocean?',
                    'answers' => [
                      ['text' => 'British Columbia'],
                      ['text' => 'Quebec'],
                      ['text' => 'Alberta'],
                      ['text' => 'Northwest Territories'],
                    ],
                    'correctAnswerId' => 3479,
                    'explanation' => 'British Columbia borders the Pacific Ocean.',
                  ],

                  [
                    'text' => 'Where are the Great Lakes located?',
                    'answers' => [
                      ['text' => 'Between Quebec and the United States'],
                      ['text' => 'Between Ontario and the United States'],
                      ['text' => 'Between Ontario and Quebec'],
                      ['text' => 'Between Manitoba and the United States'],
                    ],
                    'correctAnswerId' => 3484,
                    'explanation' => 'There are five Great Lakes located between Ontario and the United States: Lake Ontario, Lake Erie, Lake Huron, Lake Michigan (in the U.S.A.) and Lake Superior, the largest freshwater lake in the world.',
                  ],

                  [
                    'text' => 'Which of the following provinces/territories does not border Hudson Bay?',
                    'answers' => [
                      ['text' => 'Ontario'],
                      ['text' => 'Nunavut'],
                      ['text' => 'Manitoba'],
                      ['text' => 'Northwest Territories'],
                    ],
                    'correctAnswerId' => 3490,
                    'explanation' => 'Northwest Territories does not border Hudson Bay.',
                  ],

                  [
                    'text' => 'Which of the following does not border the Yukon?',
                    'answers' => [
                      ['text' => 'Northwest Territories'],
                      ['text' => 'Arctic Ocean'],
                      ['text' => 'British Columbia'],
                      ['text' => 'Alberta'],
                    ],
                    'correctAnswerId' => 3494,
                    'explanation' => 'Alberta does not border the Yukon.',
                  ],

                  [
                    'text' => 'Which of the following provinces/territories borders the Atlantic Ocean?',
                    'answers' => [
                      ['text' => 'Saskatchewan'],
                      ['text' => 'Alberta'],
                      ['text' => 'British Columbia'],
                      ['text' => 'Newfoundland and Labrador'],
                    ],
                    'correctAnswerId' => 3498,
                    'explanation' => 'Newfoundland and Labrador borders with the Atlantic Ocean.',
                  ],

                  [
                    'text' => 'When was the Yukon Gold Rush?',
                    'answers' => [
                      ['text' => 'In the 1790s'],
                      ['text' => 'In the 1940s'],
                      ['text' => 'In the 1920s'],
                      ['text' => 'In the 1890s'],
                    ],
                    'correctAnswerId' => 3502,
                    'explanation' => 'Thousands of miners came to the Yukon during the Gold Rush of the 1890s, as celebrated in the poetry of Robert W. Service. Mining remains a significant part of the economy.',
                  ],
                  [
                    'text' => 'Which of the following does not border the Northwest Territories?',
                    'answers' => [
                      ['text' => 'Alberta'],
                      ['text' => 'Ontario'],
                      ['text' => 'Yukon'],
                      ['text' => 'Nunavut'],
                    ],
                    'correctAnswerId' => 3504,
                    'explanation' => 'Ontario does not border the Northwest Territories.',
                  ],

                  [
                    'text' => 'Where is the headquarters of the Canadian Navy’s Pacific fleet?',
                    'answers' => [
                      ['text' => 'Seattle'],
                      ['text' => 'Victoria'],
                      ['text' => 'Vancouver'],
                      ['text' => 'Nanaimo'],
                    ],
                    'correctAnswerId' => 3508,
                    'explanation' => 'The capital, Victoria, is a tourist centre and headquarters of the Navy’s Pacific fleet.',
                  ],

                  [
                    'text' => 'Which of the following is Canada’s largest and busiest port?',
                    'answers' => [
                      ['text' => 'Vancouver'],
                      ['text' => 'St. John\'s'],
                      ['text' => 'Toronto'],
                      ['text' => 'Halifax'],
                    ],
                    'correctAnswerId' => 3511,
                    'explanation' => 'British Columbia is known for its majestic mountains and as Canada’s Pacific gateway. The Port of Vancouver, Canada’s largest and busiest, handles billions of dollars in goods traded around the world.',
                  ],

                  [
                    'text' => 'Which of the following is Canada’s main financial centre and largest city?',
                    'answers' => [
                      ['text' => 'Montreal'],
                      ['text' => 'Ottawa'],
                      ['text' => 'Vancouver'],
                      ['text' => 'Toronto'],
                    ],
                    'correctAnswerId' => 3518,
                    'explanation' => 'Toronto is the largest city in Canada and the country’s main financial centre. Many people work in the service or manufacturing industries, which produce a large percentage of Canada’s exports.',
                  ],

                  [
                    'text' => 'Which of the following does not border Saskatchewan?',
                    'answers' => [
                      ['text' => 'Alberta'],
                      ['text' => 'U.S.A.'],
                      ['text' => 'Manitoba'],
                      ['text' => 'British Columbia'],
                    ],
                    'correctAnswerId' => 3522,
                    'explanation' => 'British Columbia does not border Saskatchewan.',
                  ],

                  [
                    'text' => 'Which of the following is the largest freshwater lake in the world?',
                    'answers' => [
                      ['text' => 'Lake Huron'],
                      ['text' => 'Lake Erie'],
                      ['text' => 'Lake Ontario'],
                      ['text' => 'Lake Superior'],
                    ],
                    'correctAnswerId' => 3526,
                    'explanation' => 'There are five Great Lakes located between Ontario and the United States: Lake Ontario, Lake Erie, Lake Huron, Lake Michigan (in the U.S.A.) and Lake Superior, the largest freshwater lake in the world.',
                  ],

                  [
                    'text' => 'Where is the highest mountain in Canada located?',
                    'answers' => [
                      ['text' => 'Northwest Territories'],
                      ['text' => 'British Columbia'],
                      ['text' => 'Alberta'],
                      ['text' => 'Yukon'],
                    ],
                    'correctAnswerId' => 3530,
                    'explanation' => 'Mount Logan, located in the Yukon, is the highest mountain in Canada. It is named in honour of Sir William Logan, a world-famous geologist, born in Montreal in 1798 to Scottish immigrant parents.',
                  ],

                  [
                    'text' => 'Where do the majority of Canadians live?',
                    'answers' => [
                      ['text' => 'In rural areas'],
                      ['text' => 'Along the East Coast'],
                      ['text' => 'In small towns'],
                      ['text' => 'In cities'],
                    ],
                    'correctAnswerId' => 3534,
                    'explanation' => 'Canada has a population of about 34 million people. While the majority live in cities, Canadians also live in small towns, rural areas and everywhere in between.',
                  ],

                  [
                    'text' => 'When was Ottawa chosen as the capital of Canada?',
                    'answers' => [
                      ['text' => '1857'],
                      ['text' => '1757'],
                      ['text' => '1657'],
                      ['text' => '1957'],
                    ],
                    'correctAnswerId' => 3535,
                    'explanation' => 'Ottawa, located on the Ottawa River, was chosen as the capital in 1857 by Queen Victoria, the great-great-grandmother of Queen Elizabeth II.',
                  ],

                  [
                    'text' => 'Where do one-third of Canadians live?',
                    'answers' => [
                      ['text' => 'Quebec'],
                      ['text' => 'Nova Scotia'],
                      ['text' => 'British Columbia'],
                      ['text' => 'Ontario'],
                    ],
                    'correctAnswerId' => 3542,
                    'explanation' => 'At more than 12 million, the people of Ontario make up more than one-third of Canadians. The large and culturally diverse population, natural resources and strategic location contribute to a vital economy.',
                  ],

                ]
              ],
              [
                'name' => 'Practice Test 11.8',
                'info' => 'Practice Test 11.8',
                'questions' => [
                  [
                    'text' => 'Which of the following provinces/territories does not border the U.S.A.?',
                    'answers' => [
                      ['text' => 'Quebec'],
                      ['text' => 'Alberta'],
                      ['text' => 'British Columbia'],
                      ['text' => 'Nunavut'],
                    ],
                    'correctAnswerId' => 3546,
                    'explanation' => 'The territory of Nunavut borders the Arctic Ocean.',
                  ],

                  [
                    'text' => 'Which industries make products to sell in Canada and around the world?',
                    'answers' => [
                      ['text' => 'Service industries'],
                      ['text' => 'Trading Industries'],
                      ['text' => 'Natural resources industries'],
                      ['text' => 'Manufacturing industries'],
                    ],
                    'correctAnswerId' => 3550,
                    'explanation' => 'Manufacturing industries make products to sell in Canada and around the world. Manufactured products include paper, high technology equipment, aerospace technology, automobiles, machinery, food, clothing and many other goods.',
                  ],

                  [
                    'text' => 'Which province has long been known for its fisheries, coastal fishing villages and distinct culture?',
                    'answers' => [
                      ['text' => 'British Columbia'],
                      ['text' => 'Nova Scotia'],
                      ['text' => 'Newfoundland and Labrador'],
                      ['text' => 'New Brunswick'],
                    ],
                    'correctAnswerId' => 3553,
                    'explanation' => 'Newfoundland and Labrador is the oldest colony of the British Empire and a strategic prize in Canada’s early history, the province has long been known for its fisheries, coastal fishing villages and distinct culture.',
                  ],

                  [
                    'text' => 'What are Canada’s main types of industries?',
                    'answers' => [
                      ['text' => 'Service, fishing and natural resources'],
                      ['text' => 'Service, manufacturing and natural resources'],
                      ['text' => 'Tourism and natural resources'],
                      ['text' => 'Farming and fishing'],
                    ],
                    'correctAnswerId' => 3556,
                    'explanation' => 'Canada’s main types of industries are service, manufacturing and natural resources.',
                  ],

                  [
                    'text' => 'Which city is the principal Francophone Acadian centre in Canada?',
                    'answers' => [
                      ['text' => 'Montreal'],
                      ['text' => 'Moncton'],
                      ['text' => 'Charlottetown'],
                      ['text' => 'Quebec City'],
                    ],
                    'correctAnswerId' => 3560,
                    'explanation' => 'Saint John is the largest city, port and manufacturing centre; Moncton is the principal Francophone Acadian centre; and Fredericton, the historic capital.',
                  ],

                  [
                    'text' => 'Which region contains one-third of Canada’s land mass?',
                    'answers' => [
                      ['text' => 'The Prairie Provinces'],
                      ['text' => 'The Atlantic Provinces'],
                      ['text' => 'Central Canada'],
                      ['text' => 'The Northern Territories'],
                    ],
                    'correctAnswerId' => 3566,
                    'explanation' => 'The Northwest Territories, Nunavut and Yukon contain one-third of Canada’s land mass but have a population of only 100,000.',
                  ],

                  [
                    'text' => 'What is Canada’s most westerly province?',
                    'answers' => [
                      ['text' => 'Alberta'],
                      ['text' => 'Yukon'],
                      ['text' => 'British Columbia'],
                      ['text' => 'Alaska'],
                    ],
                    'correctAnswerId' => 3569,
                    'explanation' => 'British Columbia is Canada’s most westerly province.',
                  ],

                  [
                    'text' => 'In what year did Canada enact free trade with the United States?',
                    'answers' => [
                      ['text' => '1998'],
                      ['text' => '1979'],
                      ['text' => '1892'],
                      ['text' => '1988'],
                    ],
                    'correctAnswerId' => 3574,
                    'explanation' => 'In 1988, Canada enacted free trade with the United States. Mexico became a partner in 1994 in the broader North American Free Trade Agreement (NAFTA), with over 444 million people and over $1 trillion in merchandise trade in 2008.',
                  ],

                  [
                    'text' => 'Who is Mount Logan, the highest mountain in Canada, named in honour of?',
                    'answers' => [
                      ['text' => 'Sir William Logan, a world-famous geologist'],
                      ['text' => 'Sir William Logan, a world-famous pioneer'],
                      ['text' => 'Sir William Logan, a world-famous navy officer'],
                      ['text' => 'Sir William Logan, a world-famous mountain climber'],
                    ],
                    'correctAnswerId' => 3571,
                    'explanation' => 'Mount Logan, located in the Yukon, is the highest mountain in Canada. It is named in honour of Sir William Logan, a world-famous geologist, born in Montreal in 1798 to Scottish immigrant parents. Logan founded and directed the Geological Survey of Canada from 1842 to 1869 and is considered one of Canada’s greatest scientists.',
                  ],

                  [
                    'text' => 'Which two of the following are Great Lakes?',
                    'answers' => [
                      ['text' => 'Lake Superior and Lake Lawrence'],
                      ['text' => 'Lake Ontario and Lake Erie'],
                      ['text' => 'Lake Hudson and Lake Michigan'],
                      ['text' => 'Lake Hudson and Lake Erie'],
                    ],
                    'correctAnswerId' => 3580,
                    'explanation' => 'There are five Great Lakes located between Ontario and the United States: Lake Ontario, Lake Erie, Lake Huron, Lake Michigan (in the U.S.A.) and Lake Superior, the largest freshwater lake in the world.',
                  ],
                  [
                    'text' => 'What does "Nunavut" mean?',
                    'answers' => [
                      ['text' => 'Our village'],
                      ['text' => '"Our land"'],
                      ['text' => 'The land of the midnight sun'],
                      ['text' => 'Our country'],
                    ],
                    'correctAnswerId' => 3584,
                    'explanation' => 'Nunavut, meaning “our land” in Inuktitut, was established in 1999 from the eastern part of the Northwest Territories, including all of the former District of Keewatin.',
                  ],

                  [
                    'text' => 'Which of the following borders Newfoundland and Labrador?',
                    'answers' => [
                      ['text' => 'Ontario'],
                      ['text' => 'Nova Scotia'],
                      ['text' => 'Quebec'],
                      ['text' => 'New Brunswick'],
                    ],
                    'correctAnswerId' => 3589,
                    'explanation' => 'Quebec borders Newfoundland and Labrador.',
                  ],

                  [
                    'text' => 'Which are the Prairie provinces?',
                    'answers' => [
                      ['text' => 'Manitoba and Alberta'],
                      ['text' => 'Saskatchewan, Ontario and Alberta'],
                      ['text' => 'Manitoba, Saskatchewan and Alberta'],
                      ['text' => 'Manitoba and Saskatchewan'],
                    ],
                    'correctAnswerId' => 3593,
                    'explanation' => 'Manitoba, Saskatchewan and Alberta are the Prairie Provinces, rich in energy resources and some of the most fertile farmland in the world.',
                  ],

                  [
                    'text' => 'Which of the following symbolizes the close ties and common interests of Canada and the U.S.A.?',
                    'answers' => [
                      ['text' => 'The Peace Tower'],
                      ['text' => 'The Stanley Cup'],
                      ['text' => 'The Statue of Liberty'],
                      ['text' => 'The Peace Arch'],
                    ],
                    'correctAnswerId' => 3598,
                    'explanation' => 'At Blaine in the State of Washington, the Peace Arch, inscribed with the words “children of a common mother” and “brethren dwelling together in unity,” symbolizes our close ties and common interests.',
                  ],

                  [
                    'text' => 'What does "NAFTA" mean?',
                    'answers' => [
                      ['text' => 'North American Forced Trade Agreement'],
                      ['text' => 'National Armed Forces Treaty Agreement'],
                      ['text' => 'North American Free Treasury Agreement'],
                      ['text' => 'North American Free Trade Agreement'],
                    ],
                    'correctAnswerId' => 3602,
                    'explanation' => 'In 1988, Canada enacted free trade with the United States. Mexico became a partner in 1994 in the broader North American Free Trade Agreement (NAFTA), with over 444 million people and over $1 trillion in merchandise trade in 2008.',
                  ],

                  [
                    'text' => 'In what area do Canadians mostly work nowadays?',
                    'answers' => [
                      ['text' => 'Natural resources industries'],
                      ['text' => 'Service Industries'],
                      ['text' => 'Manufacturing industries'],
                      ['text' => 'Farming industries'],
                    ],
                    'correctAnswerId' => 3604,
                    'explanation' => 'Service industries provide thousands of different jobs in areas like transportation, education, health care, construction, banking, communications, retail services, tourism and government.',
                  ],

                  [
                    'text' => 'Which Canadian city is called the "diamond capital of North America"?',
                    'answers' => [
                      ['text' => 'Whitehorse'],
                      ['text' => 'Calgary'],
                      ['text' => 'Yellowknife'],
                      ['text' => 'Edmonton'],
                    ],
                    'correctAnswerId' => 3609,
                    'explanation' => 'Yellowknife (population 20,000), is called the “diamond capital of North America.” More than half the population is Aboriginal (Dene, Inuit and Métis).',
                  ],

                  [
                    'text' => 'What does P.E.I. stand for?',
                    'answers' => [
                      ['text' => 'Prince Edgar Island'],
                      ['text' => 'Prince Edmond Island'],
                      ['text' => 'Port Edward Island'],
                      ['text' => 'Prince Edward Island'],
                    ],
                    'correctAnswerId' => 3614,
                    'explanation' => 'P.E.I. stands for Prince Edward Island.',
                  ],

                  [
                    'text' => 'Which province has the world’s richest deposits of uranium and potash?',
                    'answers' => [
                      ['text' => 'Alberta'],
                      ['text' => 'Ontario'],
                      ['text' => 'Manitoba'],
                      ['text' => 'Saskatchewan'],
                    ],
                    'correctAnswerId' => 3618,
                    'explanation' => 'Saskatchewan boasts the world’s richest deposits of uranium and potash, used in fertilizer, and produces oil and natural gas.',
                  ],

                  [
                    'text' => 'Which of the following are Atlantic Provinces?',
                    'answers' => [
                      ['text' => 'Ontario, Nova Scotia, New Brunswick and Labrador'],
                      ['text' => 'Newfoundland, Nova Scotia, New Brunswick and Quebec'],
                      ['text' => 'Newfoundland and Labrador, Prince Edward Island, New Brunswick and Quebec'],
                      ['text' => 'Newfoundland and Labrador, Nova Scotia, New Brunswick and Prince Edward Island'],
                    ],
                    'correctAnswerId' => 3622,
                    'explanation' => 'The Atlantic Provinces are Newfoundland and Labrador, Nova Scotia, New Brunswick and Prince Edward Island.',
                  ],

                ]
              ],
              [
                'name' => 'Practice Test 11.9',
                'info' => 'Practice Test 11.9',
                'questions' => [
                  [
                    'text' => 'Which part of Canada is sometimes called the "Land of the Midnight Sun"?',
                    'answers' => [
                      ['text' => 'Central Canada'],
                      ['text' => 'The South'],
                      ['text' => 'The East'],
                      ['text' => 'The North'],
                    ],
                    'correctAnswerId' => 3626,
                    'explanation' => 'The North is often referred to as the “Land of the Midnight Sun” because at the height of summer, daylight can last up to 24 hours. In winter, the sun disappears and darkness sets in for three months. The Northern territories have long cold winters and short cool summers.',
                  ],

                  [
                    'text' => 'Which following countries are part of the G8?',
                    'answers' => [
                      ['text' => 'United States, the United Kingdom, Japan, Canada, Australia, Russia, France and China'],
                      ['text' => 'United States, Germany, the United Kingdom, Italy, France, Canada, China and Russia'],
                      ['text' => 'United States, Germany, the United Kingdom, Japan, Canada, Russia, France and China'],
                      ['text' => 'United States, Germany, the United Kingdom, Italy, France, Japan, Canada and Russia'],
                    ],
                    'correctAnswerId' => 3630,
                    'explanation' => 'Today, Canada has one of the ten largest economies in the world and is part of the G8 group of leading industrialized countries with the United States, Germany, the United Kingdom, Italy, France, Japan and Russia.',
                  ],

                  [
                    'text' => 'Which province is Canada’s main producer of pulp and paper?',
                    'answers' => [
                      ['text' => 'British Columbia'],
                      ['text' => 'New Brunswick'],
                      ['text' => 'Quebec'],
                      ['text' => 'Ontario'],
                    ],
                    'correctAnswerId' => 3633,
                    'explanation' => 'Quebec is Canada’s main producer of pulp and paper.',
                  ],

                  [
                    'text' => 'Which city is the headquarters of the Canadian mining industry?',
                    'answers' => [
                      ['text' => 'Edmonton'],
                      ['text' => 'Vancouver'],
                      ['text' => 'Winnipeg'],
                      ['text' => 'Saskatoon'],
                    ],
                    'correctAnswerId' => 3638,
                    'explanation' => 'Saskatoon, the largest city, is the headquarters of the mining industry and an important educational, research and technology centre.',
                  ],

                  [
                    'text' => 'Which province is Canada’s largest producer of grains and oilseeds?',
                    'answers' => [
                      ['text' => 'New Brunswick'],
                      ['text' => 'Manitoba'],
                      ['text' => 'Ontario'],
                      ['text' => 'Saskatchewan'],
                    ],
                    'correctAnswerId' => 3642,
                    'explanation' => 'Saskatchewan, once known as the “breadbasket of the world” and the “wheat province,” has 40% of the arable land in Canada and is the country’s largest producer of grains and oilseeds.',
                  ],

                  [
                    'text' => 'Which province or territory holds the record for the coldest temperature ever recorded in Canada (-63 C)?',
                    'answers' => [
                      ['text' => 'Yukon'],
                      ['text' => 'Ontario'],
                      ['text' => 'Nunavut'],
                      ['text' => 'Alberta'],
                    ],
                    'correctAnswerId' => 3643,
                    'explanation' => 'Yukon holds the record for the coldest temperature ever recorded in Canada (-63°C).',
                  ],

                  [
                    'text' => 'Which province is Canada’s major producer of oil and gas?',
                    'answers' => [
                      ['text' => 'Ontario'],
                      ['text' => 'Alberta'],
                      ['text' => 'Manitoba'],
                      ['text' => 'British Columbia'],
                    ],
                    'correctAnswerId' => 3648,
                    'explanation' => 'Alberta is the largest producer of oil and gas, and the oil sands in the north are being developed as a major energy source.',
                  ],

                  [
                    'text' => 'Which province hosts the vast cattle ranches that make Canada one of the world’s major beef producers?',
                    'answers' => [
                      ['text' => 'Ontario'],
                      ['text' => 'Manitoba'],
                      ['text' => 'British Columbia'],
                      ['text' => 'Alberta'],
                    ],
                    'correctAnswerId' => 3654,
                    'explanation' => 'Alberta is also renowned for agriculture, especially for the vast cattle ranches that make Canada one of the world’s major beef producers.',
                  ],

                  [
                    'text' => 'Which province is Canada’s largest producer of hydroelectricity?',
                    'answers' => [
                      ['text' => 'Manitoba'],
                      ['text' => 'British Columbia'],
                      ['text' => 'Quebec'],
                      ['text' => 'Ontario'],
                    ],
                    'correctAnswerId' => 3657,
                    'explanation' => 'Quebec produces the most hydroelectricity in Canada, with British Columbia, Manitoba, Newfoundland and Labrador, and Ontario also producing large amounts.',
                  ],

                  [
                    'text' => 'Which country lies on Canada’s southern border?',
                    'answers' => [
                      ['text' => 'Mexico'],
                      ['text' => 'Washington'],
                      ['text' => 'U.S.A.'],
                      ['text' => 'Central America'],
                    ],
                    'correctAnswerId' => 3661,
                    'explanation' => 'U.S.A. lies on Canada’s southern border.',
                  ],
                  [
                    'text' => 'What are the regions of Canada?',
                    'answers' => [
                      ['text' => 'Ontario, Quebec, Prairie Provinces and Central Canada'],
                      ['text' => 'Atlantic Provinces, Central Canada, Prairie Provinces, West Coast and Northern Territories'],
                      ['text' => 'Atlantic Provinces, Central Canada, Prairie Provinces, and West Coast'],
                      ['text' => 'South Provinces, Northern Canada, West Provinces, East Provinces, and Central Territories'],
                    ],
                    'correctAnswerId' => 3664,
                    'explanation' => 'Canada includes many different geographical areas and five distinct regions:
                                        - The Atlantic Provinces
                                        - Central Canada
                                        - The Prairie Provinces
                                        - The West Coast
                                        - The Northern Territories',
                  ],

                  [
                    'text' => 'Why is the North sometimes called the "Land of the Midnight Sun"?',
                    'answers' => [
                      ['text' => 'Daylight can last up to 24 hours in summer'],
                      ['text' => 'Daylight can last up to 24 hours in winter'],
                      ['text' => 'Daylight can last up to 24 hours in fall'],
                      ['text' => 'Daylight can last up to 24 hours in spring'],
                    ],
                    'correctAnswerId' => 3667,
                    'explanation' => 'The North is often referred to as the “Land of the Midnight Sun” because at the height of summer, daylight can last up to 24 hours.',
                  ],

                  [
                    'text' => 'What are the Canadian Rangers?',
                    'answers' => [
                      ['text' => 'The part of the Canadian Forces Reserves overlooking Canada\'s vast North'],
                      ['text' => 'The Northern Divison of the RCMP'],
                      ['text' => 'The Canadian Northern mountain range'],
                      ['text' => 'The first pioneers of the North'],
                    ],
                    'correctAnswerId' => 3671,
                    'explanation' => 'Canada’s vast North brings security and sovereignty challenges. The Canadian Rangers, part of the Canadian Forces Reserves (militia), play a key role. Drawing on indigenous knowledge and experience, the Rangers travel by snowmobile in the winter and all-terrain vehicles in the summer from Resolute to the Magnetic North Pole, and keep the flag flying in Canada’s Arctic.',
                  ],

                  [
                    'text' => 'Which oceans line Canada’s frontiers?',
                    'answers' => [
                      ['text' => 'Pacific Ocean and Arctic Ocean'],
                      ['text' => 'Pacific Ocean, Atlantic Ocean and Southern Ocean'],
                      ['text' => 'Pacific Ocean, Atlantic Ocean and Arctic Ocean'],
                      ['text' => 'Atlantic Ocean and Pacific Ocean'],
                    ],
                    'correctAnswerId' => 3677,
                    'explanation' => 'Canada is the second largest country on earth—10 million square kilometres. Three oceans line Canada’s frontiers: the Pacific Ocean in the west, the Atlantic Ocean in the east, and the Arctic Ocean to the north.',
                  ],

                  [
                    'text' => 'Who represents the majority population in Nunavut?',
                    'answers' => [
                      ['text' => 'Acadian'],
                      ['text' => 'Inuit'],
                      ['text' => 'First Nations'],
                      ['text' => 'Metis'],
                    ],
                    'correctAnswerId' => 3680,
                    'explanation' => 'In Nunavut, the population is about 85% Inuit, and Inuktitut is an official language and the first language in schools.',
                  ],

                  [
                    'text' => 'Which province was once known as the "breadbasket of the world" and the "wheat province"?',
                    'answers' => [
                      ['text' => 'Saskatchewan'],
                      ['text' => 'Ontario'],
                      ['text' => 'Manitoba'],
                      ['text' => 'New Brunswick'],
                    ],
                    'correctAnswerId' => 3683,
                    'explanation' => 'Saskatchewan, once known as the “breadbasket of the world” and the “wheat province,” has 40% of the arable land in Canada and is the country’s largest producer of grains and oilseeds.',
                  ],

                  [
                    'text' => 'What is "La Francophonie"?',
                    'answers' => [
                      ['text' => 'An association of French-speaking nations'],
                      ['text' => 'A region in Quebec'],
                      ['text' => 'A traditional French music'],
                      ['text' => 'A French-Canadian political party'],
                    ],
                    'correctAnswerId' => 3687,
                    'explanation' => 'Quebec films, music, literary works and food have international stature, especially in La Francophonie, an association of French-speaking nations. Montreal, Canada’s second largest city and the second largest mainly French-speaking city in the world after Paris, is famous for its cultural diversity.',
                  ],

                  [
                    'text' => 'Which province has the second largest river system on North America’s Atlantic coastline?',
                    'answers' => [
                      ['text' => 'Quebec'],
                      ['text' => 'Newfoundland and Labrador'],
                      ['text' => 'New Brunswick'],
                      ['text' => 'Nova Scotia'],
                    ],
                    'correctAnswerId' => 3693,
                    'explanation' => 'Situated in the Appalachian Range, the province was founded by the United Empire Loyalists and has the second largest river system on North America’s Atlantic coastline, the St. John River system.',
                  ],

                  [
                    'text' => 'Which of the following are Prairie Provinces?',
                    'answers' => [
                      ['text' => 'Ontario, Manitoba and Alberta'],
                      ['text' => 'Manitoba, Ontario and Saskatchewan'],
                      ['text' => 'Manitoba, Saskatchewan and Alberta'],
                      ['text' => 'Saskatchewan, Alberta and Nova Scotia'],
                    ],
                    'correctAnswerId' => 3697,
                    'explanation' => 'Manitoba, Saskatchewan and Alberta are all Prairie Provinces in Canada.',
                  ],

                  [
                    'text' => 'Which of the following provinces/territories does not border the U.S.A.?',
                    'answers' => [
                      ['text' => 'Quebec'],
                      ['text' => 'Alberta'],
                      ['text' => 'British Columbia'],
                      ['text' => 'Nunavut'],
                    ],
                    'correctAnswerId' => 3702,
                    'explanation' => 'The territory of Nunavut borders the Arctic Ocean.',
                  ],

                  [
                    'text' => 'Which province has the most extensive park system in Canada?',
                    'answers' => [
                      ['text' => 'Quebec'],
                      ['text' => 'British Columbia'],
                      ['text' => 'Ontario'],
                      ['text' => 'Yukon'],
                    ],
                    'correctAnswerId' => 3704,
                    'explanation' => 'The most valuable forestry industry in Canada. B.C. is also known for mining, fishing, and the fruit orchards and wine industry of the Okanagan Valley. B.C. has the most extensive park system in Canada, with approximately 600 provincial parks.',
                  ],

                  [
                    'text' => 'Which of the following is the home to the training academy of the Royal Canadian Mounted Police (RCMP)?',
                    'answers' => [
                      ['text' => 'Saskatoon'],
                      ['text' => 'Winnipeg'],
                      ['text' => 'Edmonton'],
                      ['text' => 'Regina'],
                    ],
                    'correctAnswerId' => 3710,
                    'explanation' => 'Regina, the capital, is home to the training academy of the Royal Canadian Mounted Police. Saskatoon, the largest city, is the headquarters of the mining industry and an important educational, research and technology centre.',
                  ],

                  [
                    'text' => 'In Canada, where can you find Celtic and Gaelic traditions?',
                    'answers' => [
                      ['text' => 'Saskatchewan'],
                      ['text' => 'Prince Edward Island'],
                      ['text' => 'Newfoundland and Labrador'],
                      ['text' => 'Nova Scotia'],
                    ],
                    'correctAnswerId' => 3714,
                    'explanation' => 'Nova Scotia’s Celtic and Gaelic traditions sustain a vibrant culture. Nova Scotia is home to over 700 annual festivals, including the spectacular military tattoo in Halifax.',
                  ],

                  [
                    'text' => 'In Canada, where can you find the world’s highest tides?',
                    'answers' => [
                      ['text' => 'Prince Edward Island'],
                      ['text' => 'Quebec'],
                      ['text' => 'British Columbia'],
                      ['text' => 'Nova Scotia'],
                    ],
                    'correctAnswerId' => 3718,
                    'explanation' => 'Nova Scotia is known for the world’s highest tides in the Bay of Fundy. The province’s identity is linked to shipbuilding, fisheries, and shipping.',
                  ],

                  [
                    'text' => 'Where is the largest east coast port located in Canada?',
                    'answers' => [
                      ['text' => 'St. John\'s'],
                      ['text' => 'Fredericton'],
                      ['text' => 'Charlottetown'],
                      ['text' => 'Halifax'],
                    ],
                    'correctAnswerId' => 3722,
                    'explanation' => 'As Canada’s largest east coast port, Halifax is deep-water and ice-free. It has played an important role in Atlantic trade and defence and is home to Canada’s largest naval base.',
                  ],
                  [
                    'text' => 'Which province has the largest Aboriginal population in Canada?',
                    'answers' => [
                      ['text' => 'Saskatchewan'],
                      ['text' => 'Ontario'],
                      ['text' => 'New Brunswick'],
                      ['text' => 'Manitoba'],
                    ],
                    'correctAnswerId' => 3726,
                    'explanation' => 'Manitoba is also an important centre of Ukrainian culture, with 14% reporting Ukrainian origins, and the largest Aboriginal population of any province, at over 15%.',
                  ],

                  [
                    'text' => 'Where are more than three quarters of all Canadian manufactured goods produced?',
                    'answers' => [
                      ['text' => 'Quebec'],
                      ['text' => 'Quebec and Ontario'],
                      ['text' => 'Ontario'],
                      ['text' => 'Ontario and Manitoba'],
                    ],
                    'correctAnswerId' => 3728,
                    'explanation' => 'Southern Ontario and Quebec have cold winters and warm humid summers. Together, Ontario and Quebec produce more than three-quarters of all Canadian manufactured goods.',
                  ],

                  [
                    'text' => 'What animal is a symbol of Canada’s North?',
                    'answers' => [
                      ['text' => 'The beaver'],
                      ['text' => 'The caribou'],
                      ['text' => 'The moose'],
                      ['text' => 'The polar bear'],
                    ],
                    'correctAnswerId' => 3732,
                    'explanation' => 'The caribou (reindeer) is a popular game for hunters and a symbol of Canada’s North.',
                  ],

                ]
              ],
            ],
            'topics' => [
              ['name' => "Canada’s Regions"],
            ],
            'flashcards' => [
              [
                'question' => 'Which province has the largest Aboriginal population in Canada?',
                'answer' => 'Manitoba',
                'explanation' => 'Manitoba is the province with the largest Aboriginal population, exceeding 15% of its total population.'
              ],
              [
                'question' => 'What is the capital of New Brunswick?',
                'answer' => 'Fredericton',
                'explanation' => 'Fredericton is the historic capital of New Brunswick, while Saint John is the largest city and Moncton is a principal Francophone Acadian center.'
              ],
              [
                'question' => 'In Nunavut, beside English, which other language is also an official language and first language in schools?',
                'answer' => 'Inuktitut',
                'explanation' => 'In Nunavut, Inuktitut is an official language and is used as the primary language of instruction in schools, reflecting the Inuit population.'
              ],
              [
                'question' => 'What is Canada’s national capital?',
                'answer' => 'Ottawa',
                'explanation' => 'Ottawa was chosen as the capital of Canada by Queen Victoria in 1857. It is now the fourth largest metropolitan area in Canada.'
              ],
              [
                'question' => 'What is the capital of Alberta?',
                'answer' => 'Edmonton',
                'explanation' => 'Edmonton serves as the capital city of Alberta.'
              ],
              [
                'question' => 'How many national parks does Alberta have?',
                'answer' => 'Five',
                'explanation' => 'Alberta is home to five national parks, including Banff National Park, which was established in 1885.'
              ],
              [
                'question' => 'How many provinces and territories are there in Canada?',
                'answer' => 'Ten provinces and three territories',
                'explanation' => 'Canada comprises ten provinces and three territories, each with its own capital city.'
              ],
              [
                'question' => 'For what is Lake Superior known?',
                'answer' => 'Largest fresh water lake in the world',
                'explanation' => 'Lake Superior is renowned as the largest freshwater lake in the world by surface area and is one of the Great Lakes.'
              ],
              [
                'question' => 'What is the most easterly point in North America?',
                'answer' => 'Newfoundland and Labrador',
                'explanation' => 'Newfoundland and Labrador is the most easterly province in North America and features its own time zone.'
              ],
              [
                'question' => 'What is the population of Canada?',
                'answer' => 'About 34 million people',
                'explanation' => 'Canada’s population is approximately 34 million, with residents living in various cities, towns, and rural areas.'
              ],
              [
                'question' => 'What is the capital of British Columbia?',
                'answer' => 'Victoria',
                'explanation' => 'Victoria is the capital city of British Columbia.'
              ],
              [
                'question' => 'What is the capital of Manitoba?',
                'answer' => 'Winnipeg',
                'explanation' => 'Winnipeg is the capital city of Manitoba.'
              ],
              [
                'question' => 'Where is the world-famous Lake Louise?',
                'answer' => 'Rocky Mountains',
                'explanation' => 'Lake Louise is located in the Rocky Mountains of Alberta, named after Princess Louise Caroline Alberta.'
              ],
              [
                'question' => 'In Canada, where can you find one of the longest continuous multispan bridges in the world?',
                'answer' => 'Prince Edward Island',
                'explanation' => 'Prince Edward Island is connected to the mainland by the Confederation Bridge, one of the longest continuous multispan bridges in the world.'
              ],
              [
                'question' => 'What is Canada’s smallest province?',
                'answer' => 'Prince Edward Island',
                'explanation' => 'Prince Edward Island is the smallest province in Canada, known for its beaches, red soil, and agricultural produce.'
              ],
              [
                'question' => 'What is the capital of Nova Scotia?',
                'answer' => 'Halifax',
                'explanation' => 'Halifax is the capital city of Nova Scotia.'
              ],
              [
                'question' => 'Who chose Ottawa as the capital of Canada?',
                'answer' => 'Queen Victoria',
                'explanation' => 'Queen Victoria selected Ottawa as the capital of Canada in 1857.'
              ],
              [
                'question' => 'What is the name of the Canadian river that represents the second-longest river system in North America?',
                'answer' => 'Mackenzie River',
                'explanation' => 'The Mackenzie River is the second-longest river system in North America, stretching 4,200 kilometers.'
              ],
              [
                'question' => 'Where is the largest east coast port located in Canada?',
                'answer' => 'Halifax',
                'explanation' => 'Halifax, Canada’s largest east coast port, plays a significant role in Atlantic trade and is home to the country’s largest naval base.'
              ],
              [
                'question' => 'What animal is a symbol of Canada’s North?',
                'answer' => 'The caribou',
                'explanation' => 'The caribou, or reindeer, is a symbol of Canada’s North and is also significant in hunting and Indigenous cultures.'
              ],
              [
                'question' => 'Where are more than three quarters of all Canadian manufactured goods produced?',
                'answer' => 'Quebec and Ontario',
                'explanation' => 'Southern Ontario and Quebec together produce more than three-quarters of all Canadian manufactured goods.'
              ],
              [
                'question' => 'What is the NAFTA agreement?',
                'answer' => 'Free trade between Canada, the United States and Mexico',
                'explanation' => 'NAFTA (North American Free Trade Agreement) established free trade between Canada, the United States, and Mexico, starting in 1994.'
              ],
              [
                'question' => 'Which province has its own time zone?',
                'answer' => 'Newfoundland and Labrador',
                'explanation' => 'Newfoundland and Labrador is unique for having its own time zone, being the most easterly point in North America.'
              ],
              [
                'question' => 'What is the capital of Newfoundland and Labrador?',
                'answer' => 'St. John\'s',
                'explanation' => 'St. John’s is the capital city of Newfoundland and Labrador.'
              ],
              [
                'question' => 'In Canada, where do more than half of the people live?',
                'answer' => 'Central Canada',
                'explanation' => 'More than half of Canada’s population resides in Central Canada, near the Great Lakes and the St. Lawrence River in southern Quebec and Ontario.'
              ],
              [
                'question' => 'Which province has the most extensive park system in Canada?',
                'answer' => 'British Columbia',
                'explanation' => 'British Columbia boasts the most extensive park system in Canada, with around 600 provincial parks.'
              ],
              [
                'question' => 'Which provinces have some of the most fertile farmlands in the world?',
                'answer' => 'Manitoba, Saskatchewan and Alberta',
                'explanation' => 'The Prairie Provinces—Manitoba, Saskatchewan, and Alberta—are known for their highly fertile farmland and significant agricultural production.'
              ],
              [
                'question' => 'In terms of size, how does Canada rank?',
                'answer' => 'Second largest country on earth',
                'explanation' => 'Canada is the second-largest country in the world by land area, covering approximately 10 million square kilometers.'
              ],
              [
                'question' => 'What is the capital of Prince Edward Island?',
                'answer' => 'Charlottetown',
                'explanation' => 'Charlottetown is the capital city of Prince Edward Island.'
              ],
              [
                'question' => 'What is the capital of Quebec?',
                'answer' => 'Quebec City',
                'explanation' => 'Quebec City serves as the capital of Quebec.'
              ],
              [
                'question' => 'What is the oldest colony of the British Empire?',
                'answer' => 'Newfoundland and Labrador',
                'explanation' => 'Newfoundland and Labrador is recognized as the oldest British colony in Canada, with a rich history in fisheries and coastal culture.'
              ],
              [
                'question' => 'In Quebec, how many people speak French as their first language?',
                'answer' => 'More than three-quarters',
                'explanation' => 'Over 75% of Quebec’s population speaks French as their first language.'
              ],
              [
                'question' => 'What is the capital of the Yukon?',
                'answer' => 'Whitehorse',
                'explanation' => 'Whitehorse is the capital city of the Yukon.'
              ],
              [
                'question' => 'What is the capital of the Northwest Territories?',
                'answer' => 'Yellowknife',
                'explanation' => 'Yellowknife is the capital city of the Northwest Territories.'
              ],
              [
                'question' => 'What are the main goods produced in British Columbia?',
                'answer' => 'Forestry products',
                'explanation' => 'British Columbia’s primary goods are forestry products, including lumber and paper, reflecting its valuable forestry industry.'
              ],
              [
                'question' => 'What is the capital of Nunavut?',
                'answer' => 'Iqaluit',
                'explanation' => 'Iqaluit is the capital city of Nunavut.'
              ],
              [
                'question' => 'In Canada, where can you find Celtic and Gaelic traditions?',
                'answer' => 'Nova Scotia',
                'explanation' => 'Nova Scotia is known for its vibrant Celtic and Gaelic traditions and hosts numerous festivals, including the military tattoo in Halifax.'
              ],
              [
                'question' => 'In Canada, where can you find the world’s highest tides?',
                'answer' => 'Nova Scotia',
                'explanation' => 'Nova Scotia is home to the world’s highest tides in the Bay of Fundy, a key feature of the province’s maritime heritage.'
              ],
              [
                'question' => 'How many of the Great Lakes are located between Ontario and the United States?',
                'answer' => 'Five',
                'explanation' => 'Five Great Lakes—Ontario, Erie, Huron, Michigan, and Superior—are situated between Ontario and the United States.'
              ],
              [
                'question' => 'What is Canada’s second largest, mainly French-speaking city in the world, after Paris?',
                'answer' => 'Montreal',
                'explanation' => 'Montreal is Canada’s second-largest city and the second-largest predominantly French-speaking city globally, after Paris.'
              ],
              [
                'question' => 'What is known as the birthplace of Confederation?',
                'answer' => 'Prince Edward Island',
                'explanation' => 'Prince Edward Island is recognized as the birthplace of Confederation and is connected to mainland Canada by the Confederation Bridge.'
              ],
              [
                'question' => 'In terms of size, how does Ottawa’s metropolitan area rank in Canada?',
                'answer' => 'Fourth largest metropolitan area',
                'explanation' => 'Ottawa is the fourth largest metropolitan area in Canada.'
              ],
              [
                'question' => 'Which province has 40% of the arable land in Canada?',
                'answer' => 'Saskatchewan',
                'explanation' => 'Saskatchewan has 40% of Canada’s arable land and is a leading producer of grains and oilseeds.'
              ],
              [
                'question' => 'Where are the Great Lakes located?',
                'answer' => 'Between Ontario and the United States',
                'explanation' => 'The Great Lakes are situated between Ontario and the United States, including Lakes Ontario, Erie, Huron, Michigan, and Superior.'
              ],
              [
                'question' => 'Which province is Canada’s largest producer of grains and oilseeds?',
                'answer' => 'Saskatchewan',
                'explanation' => 'Saskatchewan, known as the “breadbasket of the world,” is Canada’s largest producer of grains and oilseeds.'
              ],
              [
                'question' => 'Which country lies on Canada’s southern border?',
                'answer' => 'U.S.A.',
                'explanation' => 'The United States (U.S.A.) shares Canada’s southern border.'
              ],
              [
                'question' => 'Which part of Canada is sometimes called the "Land of the Midnight Sun"?',
                'answer' => 'The North',
                'explanation' => 'The North of Canada is known as the "Land of the Midnight Sun" due to its extended daylight hours in summer.'
              ],
              [
                'question' => 'What is Canada’s most westerly province?',
                'answer' => 'British Columbia',
                'explanation' => 'British Columbia is the most westerly province in Canada.'
              ],
              [
                'question' => 'What does "Nunavut" mean?',
                'answer' => '"Our land"',
                'explanation' => 'Nunavut means "our land" in Inuktitut and was established in 1999 from the eastern part of the Northwest Territories.'
              ],
              [
                'question' => 'Which province was once known as the "breadbasket of the world" and, the "wheat province"?',
                'answer' => 'Saskatchewan',
                'explanation' => 'Saskatchewan, known as the "breadbasket of the world" and "wheat province," is a major producer of grains and oilseeds in Canada.'
              ],
              [
                'question' => 'Where do the majority of Canadians live?',
                'answer' => 'In cities',
                'explanation' => 'The majority of Canadians live in cities, though there are also residents in small towns and rural areas.'
              ],
              [
                'question' => 'Where is Canada’s largest naval base?',
                'answer' => 'Nova Scotia',
                'explanation' => 'Canada’s largest naval base is located in Halifax, Nova Scotia, a key site for Atlantic trade and defence.'
              ],
              [
                'question' => 'Which province has long been known for its fisheries, coastal fishing villages and distinct culture?',
                'answer' => 'Newfoundland and Labrador',
                'explanation' => 'Newfoundland and Labrador, the oldest British colony in Canada, is known for its fisheries and distinct coastal culture.'
              ],
              [
                'question' => 'What are Canada’s main types of industries?',
                'answer' => 'Service, manufacturing and natural resources',
                'explanation' => 'Canada’s main industries are service, manufacturing, and natural resources.'
              ],
              [
                'question' => 'What does P.E.I. stand for?',
                'answer' => 'Prince Edward Island',
                'explanation' => 'P.E.I. stands for Prince Edward Island.'
              ],
              [
                'question' => 'Why is the North sometimes called the "Land of the Midnight Sun"?',
                'answer' => 'Daylight can last up to 24 hours in summer',
                'explanation' => 'The North is known as the "Land of the Midnight Sun" because it experiences up to 24 hours of daylight during summer.'
              ],
              [
                'question' => 'In what area do Canadians mostly work nowadays?',
                'answer' => 'Service Industries',
                'explanation' => 'Most Canadians now work in service industries, including sectors like healthcare, education, and retail.'
              ],
              [
                'question' => 'What are the regions of Canada?',
                'answer' => 'Atlantic Provinces, Central Canada, Prairie Provinces, West Coast and Northern Territories',
                'explanation' => 'Canada is divided into five distinct regions: Atlantic Provinces, Central Canada, Prairie Provinces, West Coast, and Northern Territories.'
              ],
              [
                'question' => 'Which province is Canada’s largest producer of hydroelectricity?',
                'answer' => 'Quebec',
                'explanation' => 'Quebec is the leading producer of hydroelectricity in Canada, with other significant producers including British Columbia and Manitoba.'
              ],
              [
                'question' => 'Where is the highest mountain in Canada located?',
                'answer' => 'Yukon',
                'explanation' => 'Mount Logan, the highest mountain in Canada, is located in the Yukon.'
              ],
              [
                'question' => 'Where do one-third of Canadians live?',
                'answer' => 'Ontario',
                'explanation' => 'Ontario is home to more than one-third of Canada’s population, making it the most populous province.'
              ],
              [
                'question' => 'Which industries make products to sell in Canada and around the world?',
                'answer' => 'Manufacturing industries',
                'explanation' => 'Manufacturing industries in Canada produce goods for both domestic consumption and international markets.'
              ],
              [
                'question' => 'Which Canadian city is called the "diamond capital of North America"?',
                'answer' => 'Yellowknife',
                'explanation' => 'Yellowknife is known as the "diamond capital of North America" due to its significant diamond mining industry.'
              ],
              [
                'question' => 'Which province has the second largest river system on North America’s Atlantic coastline?',
                'answer' => 'New Brunswick',
                'explanation' => 'New Brunswick has the second largest river system on North America’s Atlantic coastline, the St. John River system.'
              ],
              [
                'question' => 'Which oceans line Canada’s frontiers?',
                'answer' => 'Pacific Ocean, Atlantic Ocean and Arctic Ocean',
                'explanation' => 'Canada is bordered by the Pacific Ocean to the west, the Atlantic Ocean to the east, and the Arctic Ocean to the north.'
              ],
              [
                'question' => 'What are the Canadian Rangers?',
                'answer' => 'The part of the Canadian Forces Reserves overlooking Canada\'s vast North',
                'explanation' => 'The Canadian Rangers, part of the Canadian Forces Reserves, patrol the vast Arctic regions, drawing on indigenous knowledge.'
              ],
              [
                'question' => 'Who is Mount Logan, the highest mountain in Canada, named in honour of?',
                'answer' => 'Sir William Logan, a world-famous geologist',
                'explanation' => 'Mount Logan is named after Sir William Logan, a prominent Canadian geologist and founder of the Geological Survey of Canada.'
              ],
              [
                'question' => 'What represents a significant part of the economy of the Yukon?',
                'answer' => 'Mining',
                'explanation' => 'Mining, particularly for gold, plays a significant role in the economy of the Yukon.'
              ],
              [
                'question' => 'Which are the Prairie provinces?',
                'answer' => 'Manitoba, Saskatchewan and Alberta',
                'explanation' => 'Manitoba, Saskatchewan, and Alberta are known as the Prairie Provinces and are rich in agricultural and energy resources.'
              ],
              [
                'question' => 'Which province hosts the vast cattle ranches that make Canada one of the world’s major beef producers?',
                'answer' => 'Alberta',
                'explanation' => 'Alberta is renowned for its large cattle ranches and is a major producer of beef in Canada.'
              ],
              [
                'question' => 'What is "La Francophonie"?',
                'answer' => 'An association of French-speaking nations',
                'explanation' => 'La Francophonie is an association of French-speaking nations. Quebec’s cultural contributions, including films, music, and literature, have international stature within this organization.'
              ],
              [
                'question' => 'Where is Western Canada’s largest Francophone community?',
                'answer' => 'Manitoba',
                'explanation' => 'The French Quarter in Winnipeg, St. Boniface, is home to Western Canada’s largest Francophone community, numbering around 45,000 people.'
              ],
              [
                'question' => 'Which province is the only officially bilingual province?',
                'answer' => 'New Brunswick',
                'explanation' => 'New Brunswick is unique as the only officially bilingual province in Canada.'
              ],
              [
                'question' => 'Which province or territory holds the record for the coldest temperature ever recorded in Canada (-63°C)?',
                'answer' => 'Yukon',
                'explanation' => 'Yukon holds the record for the coldest temperature ever recorded in Canada, which is -63°C.'
              ],
              [
                'question' => 'Who represents the majority population in Nunavut?',
                'answer' => 'Inuit',
                'explanation' => 'In Nunavut, the majority of the population is Inuit, making up about 85% of the residents.'
              ],
              [
                'question' => 'Which city is the principal Francophone Acadian centre in Canada?',
                'answer' => 'Moncton',
                'explanation' => 'Moncton is recognized as the principal Francophone Acadian centre in Canada, while Saint John is the largest city and port, and Fredericton is the capital.'
              ],
              [
                'question' => 'Where is the headquarters of the Canadian Navy’s Pacific fleet?',
                'answer' => 'Victoria',
                'explanation' => 'Victoria, the capital of British Columbia, is the headquarters for the Canadian Navy’s Pacific fleet.'
              ],
              [
                'question' => 'Which city is the headquarters of the Canadian mining industry?',
                'answer' => 'Saskatoon',
                'explanation' => 'Saskatoon serves as the headquarters for the Canadian mining industry and is also an important center for education and research.'
              ],
              [
                'question' => 'What is the capital of Saskatchewan?',
                'answer' => 'Regina',
                'explanation' => 'Regina is the capital city of Saskatchewan.'
              ],
              [
                'question' => 'Which province is Canada’s main producer of pulp and paper?',
                'answer' => 'Quebec',
                'explanation' => 'Quebec is the leading producer of pulp and paper in Canada.'
              ],
              [
                'question' => 'Which province is Canada’s major producer of oil and gas?',
                'answer' => 'Alberta',
                'explanation' => 'Alberta is the primary producer of oil and gas in Canada, with significant development in its oil sands.'
              ],
              [
                'question' => 'Which province has the world’s richest deposits of uranium and potash?',
                'answer' => 'Saskatchewan',
                'explanation' => 'Saskatchewan has the richest deposits of uranium and potash, which is crucial for fertilizer production, and also produces oil and natural gas.'
              ],
              [
                'question' => 'Which region contains one-third of Canada’s land mass?',
                'answer' => 'The Northern Territories',
                'explanation' => 'The Northern Territories, including the Northwest Territories, Nunavut, and Yukon, make up one-third of Canada’s land mass but have a very small population of about 100,000.'
              ],
              [
                'question' => 'What does "NAFTA" mean?',
                'answer' => 'North American Free Trade Agreement',
                'explanation' => 'NAFTA stands for North American Free Trade Agreement, which includes Canada, the United States, and Mexico, facilitating trade between these countries.'
              ]
            ]
          ],
          [
            'image' => '/images/chap 1.png',
            'name' => 'Free Simulation Test',
            'title' => 'Free Simulation Test',
            'description' => "Take part in our free diagnostic Canadian citizenship test practice to assess your current knowledge and skills. It will help you tailor your study plan for maximum effectiveness.",
            'questions' => 20,
            'mistakes' => 5,
            'step' => 1,
            'tests' => [
              [
                'name' => 'Free Diagnostic Test',
                'info' => 'Free Diagnostic Test',
                'questions' => [
                  [
                    'text' => 'What will you promise when you take the oath of citizenship?',
                    'answers' => [
                      ['text' => 'Carry out responsibilities as a Canadian citizen'],
                      ['text' => 'Pledge allegiance to the King'],
                      ['text' => 'Promise to obey the constitution of Canada'],
                      ['text' => 'Pledge loyalty to the King, observe the laws and fulfill the duties of a Canadian'],
                    ],
                    'correctAnswerId' => 3738,
                    'explanation' => 'I swear (or affirm) that I will be faithful, observe the laws and fulfill the duties of a Canadian.',
                  ],
                  [
                    'text' => 'In Canada, to whom do we formally pledge allegiance?',
                    'answers' => [
                      ['text' => 'We pledge allegiance to the Sovereign (King or Queen).'],
                      ['text' => 'The province of Ontario'],
                      ['text' => 'The United Kingdom'],
                      ['text' => 'The Prime Minister'],
                    ],
                    'correctAnswerId' => 3739,
                    'explanation' => 'In Canada, we profess our loyalty to a person who represents all Canadians and not to a document such as a constitution, a banner such as a flag, or a geopolitical entity such as a country.',
                  ],
                  [
                    'text' => 'Which of the following is NOT a responsibility of Canadian citizens?',
                    'answers' => [
                      ['text' => 'Learning to speak both official languages'],
                      ['text' => 'Voting in elections'],
                      ['text' => 'Obeying the law'],
                      ['text' => 'Taking responsibility for oneself and one\'s family'],
                    ],
                    'correctAnswerId' => 3743,
                    'explanation' => 'Learning to speak both official languages is not a responsibility of Canadian citizens.',
                  ],
                  [
                    'text' => 'What is “Habeas corpus”?',
                    'answers' => [
                      ['text' => 'the right to live and work anywhere in Canada'],
                      ['text' => 'the right for peaceful assembly'],
                      ['text' => 'the right to speak freely'],
                      ['text' => 'the right to challenge unlawful detention by the state'],
                    ],
                    'correctAnswerId' => 3750,
                    'explanation' => 'Habeas corpus, the right to challenge unlawful detention by the state, comes from English common law.',
                  ],
                  [
                    'text' => 'Which group of Aboriginal peoples has the largest population in Canada?',
                    'answers' => [
                      ['text' => 'Acadians'],
                      ['text' => 'First Nations'],
                      ['text' => 'Indians'],
                      ['text' => 'Metis'],
                    ],
                    'correctAnswerId' => 3752,
                    'explanation' => 'About 65% of the Aboriginal people are First Nations, while 30% are Metis and 4% Inuit.',
                  ],
                  [
                    'text' => 'From whom are the Acadians descended?',
                    'answers' => [
                      ['text' => 'Metis and Inuit'],
                      ['text' => 'First Nations who began settling in what are now the Prairie Provinces in 1600s'],
                      ['text' => 'British colonists who began settling in what are now the Maritime Provinces in 1604'],
                      ['text' => 'French colonists who began settling in what are now the Maritime Provinces in 1604.'],
                    ],
                    'correctAnswerId' => 3758,
                    'explanation' => 'The Acadians are the descendants of French colonists who began settling in what are now the Maritime provinces in 1604.',
                  ],
                  [
                    'text' => 'From which civilization does Canadian society stem largely from?',
                    'answers' => [
                      ['text' => 'Chinese'],
                      ['text' => 'Aboriginal'],
                      ['text' => 'Acadian'],
                      ['text' => 'English-speaking and French-speaking Christians'],
                    ],
                    'correctAnswerId' => 3762,
                    'explanation' => 'The great majority of Canadians identify as Christians. The largest religious affiliation is Catholic, followed by various Protestant churches.',
                  ],
                  [
                    'text' => 'In which province do most Francophones live?',
                    'answers' => [
                      ['text' => 'Quebec'],
                      ['text' => 'Manitoba'],
                      ['text' => 'Alberta'],
                      ['text' => 'New Brunswick'],
                    ],
                    'correctAnswerId' => 3763,
                    'explanation' => 'The majority of Francophones live in the province of Quebec. One million Francophones live in Ontario, New Brunswick and Manitoba, with a smaller presence in other provinces.',
                  ],
                  [
                    'text' => 'Who led Quebec into Confederation?',
                    'answers' => [
                      ['text' => 'Sir Louis-Hippolyte LaFontaine'],
                      ['text' => 'Sir George-Etienne Cartier'],
                      ['text' => 'Sir Wilfred Laurier'],
                      ['text' => 'Sir John A. Macdonald'],
                    ],
                    'correctAnswerId' => 3768,
                    'explanation' => 'Sir George-Etienne Cartier was the key architect of confederation from Quebec. A railway lawyer, Montrealer, close ally of Macdonald and patriotic Canadien, Cartier led Quebec into confederation and helped negotiate the entry of the Northwest Territories, Manitoba and British Columbia into Canada.',
                  ],
                  [
                    'text' => 'Who is considered as Canada\'s greatest Soldier?',
                    'answers' => [
                      ['text' => 'General Sir Arthur Currie'],
                      ['text' => 'Phil Edwards'],
                      ['text' => 'Sir John A. McDonald'],
                      ['text' => 'Rick Hansen'],
                    ],
                    'correctAnswerId' => 3771,
                    'explanation' => 'In 1918, under the command of General Sir Arthur Currie, Canada’s greatest soldier, the Canadian Corps advanced alongside the French and British Empire troops in the last hundred days.',
                  ],
                  [
                    'text' => 'Why is the Battle of Vimy Ridge important in Canadian history?',
                    'answers' => [
                      ['text' => 'It was the last battle of the first World War'],
                      ['text' => 'it has come to symbolize Canada\'s becoming as a nation'],
                      ['text' => 'it was an important victory in the Boer War'],
                      ['text' => 'out of it was formed the Canadian Corps'],
                    ],
                    'correctAnswerId' => 3776,
                    'explanation' => 'One Canadian officer said: “It was Canada from the Atlantic to the Pacific on parade.. In those few minutes I witnessed the birth of a nation. “April 9 is celebrated as Vimy Day.',
                  ],
                  [
                    'text' => 'When did Canada\'s modern energy industry begin?',
                    'answers' => [
                      ['text' => 'The economic booming of the 1890s and early 1900s'],
                      ['text' => 'After the war of 1812.'],
                      ['text' => 'Since the discovery of oil in Alberta in 1947'],
                      ['text' => 'After the second World War'],
                    ],
                    'correctAnswerId' => 3781,
                    'explanation' => 'The discovery of oil in Alberta in 1947 began Canada\'s modern energy industry.',
                  ],
                  [
                    'text' => 'Insulin was discovered by a Canadian',
                    'answers' => [
                      ['text' => 'False'],
                      ['text' => 'True'],
                    ],
                    'correctAnswerId' => 3784,
                    'explanation' => 'Sir Frederick Banting of Toronto and Charles Best discovered insulin, a hormone to treat diabetes that has saved 16 million lives worldwide.',
                  ],
                  [
                    'text' => 'What are the three parts of Parliament?',
                    'answers' => [
                      ['text' => 'the King, governor general and prime minister'],
                      ['text' => 'the governor-general, the legislative assembly and the Senate'],
                      ['text' => 'the King, the House of Commons and the Senate'],
                      ['text' => 'the House of Commons, the legislative assembly and the Senate'],
                    ],
                    'correctAnswerId' => 3787,
                    'explanation' => 'Parliament has three parts: the Sovereign (King), the Senate and the House of Commons. Provincial legislatures comprise the Lieutenant Governor and the elected Assembly.',
                  ],
                  [
                    'text' => 'What are the parties that are not in power called?',
                    'answers' => [
                      ['text' => 'Tea parties'],
                      ['text' => 'Opposition parties'],
                      ['text' => 'Rival parties'],
                      ['text' => 'Opponents parties'],
                    ],
                    'correctAnswerId' => 3790,
                    'explanation' => 'The other parties that are not in power are known as opposition parties.',
                  ],
                  [
                    'text' => 'What is Canada’s national winter sport?',
                    'answers' => [
                      ['text' => 'Skiing'],
                      ['text' => 'Ice Hockey'],
                      ['text' => 'Ice fishing'],
                      ['text' => 'Ice skating'],
                    ],
                    'correctAnswerId' => 3794,
                    'explanation' => 'Many major league sports boast Canadian talent and in the national sport of ice hockey, Canadian teams have dominated the world.',
                  ],
                  [
                    'text' => 'What does RCMP stand for?',
                    'answers' => [
                      ['text' => 'Registered Canadian Mounted Police'],
                      ['text' => 'Royal Canadian Mounted Police'],
                      ['text' => 'Roy\'s Corona Military Police'],
                      ['text' => 'Royal California Miller Protection'],
                    ],
                    'correctAnswerId' => 3798,
                    'explanation' => 'Today, the Royal Canadian Mounted Police (RCMP or “the Mounties”) are the national police force and one of Canada’s best-known symbols.',
                  ],
                  [
                    'text' => 'Which is Canada\'s largest city and Main Financial Center?',
                    'answers' => [
                      ['text' => 'Vancouver'],
                      ['text' => 'Toronto'],
                      ['text' => 'Montreal'],
                      ['text' => 'Calgary'],
                    ],
                    'correctAnswerId' => 3802,
                    'explanation' => 'Toronto is the largest city in Canada and the country’s main financial centre.',
                  ],
                  [
                    'text' => 'Where are the Great Lakes located?',
                    'answers' => [
                      ['text' => 'Between Quebec and the United States'],
                      ['text' => 'Between Ontario and the United States'],
                      ['text' => 'Between Ontario and Quebec'],
                      ['text' => 'Between Manitoba and the United States'],
                    ],
                    'correctAnswerId' => 3806,
                    'explanation' => 'There are five Great Lakes located between Ontario and the United States: Lake Ontario, Lake Erie, Lake Huron, Lake Michigan (in the U.S.A.) and Lake Superior, the largest freshwater lake in the world.',
                  ],
                ]
              ],
            ],
            'topics' => [
              ['name' => 'Topic 1', 'info' => 'Topic 1 content'],
            ],
          ],
          [
            'image' => '/images/chap 13.png',
            'name' => 'Exam Simulator',
            'title' => 'Exam Simulator',
            'description' => 'We offer realistic simulations of the Canadian Citizenship test. Providing a real-life testing experience will help you build confidence and find out your weaknesses.',
            'questions' => 20,
            'mistakes' => 5,
            'step' => 3,
            'tests' => [
              [
                'name' => 'Free Diagnostic Test',
                'info' => 'Free Diagnostic Test',
                'questions' => []
              ],

            ],
            'topics' => [
              ['name' => 'Topic 1', 'info' => 'Topic 1 content'],
            ],
          ],

        ]
      );

      $chapters->each(function ($data, $index) {

        $chapter = Chapter::create([
          'image' => $data['image'],
          'name' => $data['name'],
          'title' => $data['title'],
          'description' => $data['description'],
          'questions' => $data['questions'],
          'mistakes' => $data['mistakes'],
          'step' => $data['step'],
        ]);

        foreach ($data['tests'] as $testData) {
          $test = Test::create([
            'chapter_id' => $chapter->id,
            'name' => $testData['name'],
            'info' => $testData['info'],
          ]);


          foreach ($testData['questions'] as $questionData) {

            $question = Question::create([
              'test_id' => $test->id,
              'text' => $questionData['text'],
              'explanation' => $questionData['explanation'],
              'correct_answer_id' => $questionData['correctAnswerId']
            ]);

            $answers = collect();
            foreach ($questionData['answers'] as $answerData) {
              $answers->push(Answer::create([
                'question_id' => $question->id,
                'text' => $answerData['text'],
              ]));
            }
          }
        }


        foreach ($data['topics'] as $topicData) {
          Topic::create([
            'chapter_id' => $chapter->id,
            'name' => $topicData['name'],
          ]);
        }

        if (isset($data['flashcards'])) {
          foreach ($data['flashcards'] as $flashcardData) {
            $flashcard = Flashcard::create([
              'chapter_id' => $chapter->id,
              'question' => $flashcardData['question'],
              'answer' => $flashcardData['answer'],
              'explanation' => $flashcardData['explanation'],
            ]);
          }
        }
      });

      $packages = [
        [
          'name' => '3-Month Exam Prep',
          'price' => 19.99,
          'validity' => 90,
        ],
        [
          'name' => '6-Month Exam Prep',
          'price' => 29.99,
          'validity' => 180,
        ],
        [
          'name' => 'Lifetime Unlimited',
          'price' => 19.99,
          'validity' => 36500,
        ],
      ];

      foreach ($packages as $package) {
        Package::create($package);
      }

      // Simulation Test
      $simulationTests = collect(
        [
          'name' => 'Practice Test 1.1',
          'info' => 'Practice Test 1.1',
          'questions' => [
            [
              'text' => 'What will you promise when you take the oath of citizenship?',
              'answers' => [
                ['text' => 'Carry out responsibilities as a Canadian citizen'],
                ['text' => 'Pledge allegiance to the queen or King'],
                ['text' => 'Promise to obey the constitution of Canada'],
                ['text' => 'Pledge loyalty to the queen or King, observe the laws and fulfill the duties of a Canadian'],
              ],
              'explanation' => 'I swear (or affirm) that I will be faithful, observe the laws and fulfill the duties of a Canadian. (Discover Canada - P2)'
            ],
            [
              'text' => 'To whom do we profess our loyalty to in Canada?',
              'answers' => [
                ['text' => 'The Canadian flag'],
                ['text' => 'A person who represents all Canadians'],
                ['text' => 'Geopolitical entities'],
                ['text' => 'The Canadian Constitution'],
              ],
              'explanation' => 'In Canada, we profess our loyalty to a person who represents all Canadians and not to a document such as a constitution, a banner such as a flag, or a geopolitical entity such as a country. (Discover Canada - P2)'
            ],
            [
              'text' => 'What is Canada\'s system of political governance called?',
              'answers' => [
                ['text' => 'Monarchy'],
                ['text' => 'Parliamentary government'],
                ['text' => 'Democratic process'],
                ['text' => 'Benevolent dictatorship'],
              ],
              'explanation' => 'Canada is a constitutional monarchy, a parliamentary democracy and a federal state. Canadians are bound together by a shared commitment to the rule of law and to the institutions of parliamentary government. (Discover Canada - P3).'
            ],
            [
              'text' => 'Which of these statements is true?',
              'answers' => [
                ['text' => 'Canada has welcomed immigrants for years to build a free, just, and affluent society.'],
                ['text' => 'Canadians haven\'t given up anything to protect their way of life'],
                ['text' => 'Canada is a Republic'],
                ['text' => 'Immigrants between the ages of 21 and 54 must learn about voting laws in order to become Canadian citizens'],
              ],
              'explanation' => 'Canada has welcomed generations of newcomers to our shores to help us build a free, law-abiding and prosperous society. (Discover Canada - P3)'
            ],
            [
              'text' => 'Is the Citizenship Test written or an interview?',
              'answers' => [
                ['text' => 'Always in the form of an interview'],
                ['text' => 'Written and taken in person'],
                ['text' => 'Always a written test'],
                ['text' => 'It\'s a written test, but it can also be an interview.'],
              ],
              'explanation' => 'The citizenship test is usually a written test but it could be an interview. You will be tested on the knowledge of Canada and of the rights and responsibilities of citizenship, and you will also be tested to ensure you have adequate knowledge of English or French. (P6)'
            ],
            [
              'text' => 'In Canada, the constitution, the flag and the country are not encompassed by the Sovereign.',
              'answers' => [
                ['text' => 'True'],
                ['text' => 'False'],
              ],
              'explanation' => 'In Canada, we profess our loyalty to a person who represents all Canadians and not to a document such as a constitution, a banner such as a flag, or a geopolitical entity such as a country. In our constitutional monarchy, these elements are encompassed by the Sovereign (Queen or King). It is a remarkably simple yet powerful principle: Canada is personified by the Sovereign just as the Sovereign is personified by Canada.'
            ],
            [
              'text' => 'Which of the following statements is false?',
              'answers' => [
                ['text' => 'Canada is a federal state'],
                ['text' => 'Canada is a constitutional monarchy'],
                ['text' => 'Canada is a theocracy'],
                ['text' => 'Canada is a parliamentary democracy'],
              ],
              'explanation' => 'Canada is a constitutional monarchy, a parliamentary democracy and a federal state. Canadians are bound together by a shared commitment to the rule of law and to the institutions of parliamentary government. (P3)'
            ],
            [
              'text' => 'Which of the following statements is false?',
              'answers' => [
                ['text' => 'During your citizenship ceremony, you\'ll be invited to join the Canadian Army.'],
                ['text' => 'During your citizenship ceremony, you\'ll sign the oath form.'],
                ['text' => 'During your citizenship ceremony, you\'ll get your Citizenship Certificate.'],
                ['text' => 'During your citizenship ceremony, you\'ll take the Oath of Citizenship.'],
              ],
              'explanation' => 'At the ceremony, you will take the Oath of Citizenship; sign the oath form; and receive your Canadian Citizenship Certificate. If you do not pass the test, you will receive a notification indicating the next steps. (P7)'
            ],
            [
              'text' => 'What languages do you need to demonstrate proficiency in to become a Canadian citizen?',
              'answers' => [
                ['text' => 'Either Spanish or English'],
                ['text' => 'Either English or French'],
                ['text' => 'Both English and French'],
                ['text' => 'Either Spanish or French'],
              ],
              'explanation' => 'In order to apply for Canadian citizenship, you must provide proof that you know how to speak and write in 1 of Canada\'s official languages (either English or French). (P3)'
            ],
            [
              'text' => 'Canada does not personify the Sovereign.',
              'answers' => [
                ['text' => 'True'],
                ['text' => 'False'],
              ],
              'explanation' => 'Canada personifies a King or Queen; however, our government is a democracy. (P2)'
            ],
            [
              'text' => 'In Canada, to whom do we formally pledge allegiance?',
              'answers' => [
                ['text' => 'We pledge allegiance to the Sovereign (King or Queen).'],
                ['text' => 'The province of Ontario'],
                ['text' => 'The United Kingdom'],
                ['text' => 'The Prime Minister'],
              ],
              'explanation' => 'In Canada, we profess our loyalty to a person who represents all Canadians and not to a document such as a constitution, a banner such as a flag, or a geopolitical entity such as a country. (P2)'
            ],
            [
              'text' => 'Which of the following statements is false?',
              'answers' => [
                ['text' => 'Canadians enjoy many rights and freedoms'],
                ['text' => 'Canadians are exempt from upholding others\' freedom and rights'],
                ['text' => 'Canadians have obligations as well as rights'],
                ['text' => 'The laws of Canada must be followed by Canadians'],
              ],
              'explanation' => 'Canadian citizens enjoy many rights, but Canadians also have responsibilities. They must obey Canada’s laws and respect the rights and freedoms of others. (P3)'
            ],
            [
              'text' => 'Which of these statements about citizenship applications is not true?',
              'answers' => [
                ['text' => 'Officials will verify that you are not prohibited from applying'],
                ['text' => 'Officials will examine your status'],
                ['text' => 'Officials will make sure you adhere to the rules.'],
                ['text' => 'Officials will request gifts or money from you.'],
              ],
              'explanation' => 'When you apply for citizenship, officials will check your status, verify that you are not prohibited from applying, and ensure that you meet the requirements. (P6)'
            ],
            [
              'text' => 'What type of government is there in Canada?',
              'answers' => [
                ['text' => 'Canada is a Confederation'],
                ['text' => 'Canada is a Constitutional Monarchy.'],
                ['text' => 'Canada is a Oligarchy'],
                ['text' => 'Canada is a Republic'],
              ],
              'explanation' => 'Canada is a constitutional monarchy, a parliamentary democracy and a federal state. Canadians are bound together by a shared commitment to the rule of law and to the institutions of parliamentary government. (P3)'
            ],
            [
              'text' => 'How long have settlers and immigrants contributed to the diversity and wealth of Canada?',
              'answers' => [
                ['text' => '200 Years'],
                ['text' => '300 Years'],
                ['text' => '400 Years'],
                ['text' => '500 Years'],
              ],
              'explanation' => 'For 400 years, settlers and immigrants have contributed to the diversity and richness of Canada, which is built on a proud history and a strong identity. (P3)'
            ],
            [
              'text' => 'What are the two basic requirements for citizenship testing in Canada?',
              'answers' => [
                ['text' => 'Knowledge of Canadian history and language proficiency'],
                ['text' => 'Knowledge of Canadian laws and cultural integration'],
                ['text' => 'Knowledge of Canadian rights and responsibilities, and language proficiency'],
                ['text' => 'Knowledge of Canadian geography and cultural diversity'],
              ],
              'explanation' => 'You will be tested on two basic requirements for citizenship: 1) knowledge of Canada and of the rights and responsibilities of citizenship, and 2) adequate knowledge of English or French. (P6)'
            ],
            [
              'text' => 'Who is exempted from writing the citizenship test in Canada?',
              'answers' => [
                ['text' => 'Applicants aged 60 and above'],
                ['text' => 'Applicants aged 50 and above'],
                ['text' => 'Applicants aged 55 and above'],
                ['text' => 'Applicants aged 65 and above'],
              ],
              'explanation' => 'Adult applicants 55 years of age and over do not need to write the citizenship test. (P6)'
            ],
            [
              'text' => 'What age group of immigrants must demonstrate adequate knowledge of English or French to become Canadian citizens?',
              'answers' => [
                ['text' => '16 to 50'],
                ['text' => '18 to 54'],
                ['text' => '20 to 60'],
                ['text' => '22 to 58'],
              ],
              'explanation' => 'Immigrants between the ages of 18 and 54 must have adequate knowledge of English or French in order to become Canadian citizens. (P3)'
            ],
            [
              'text' => 'Which of the following topics must immigrants learn about to fulfill the requirements for Canadian citizenship?',
              'answers' => [
                ['text' => 'World history and politics'],
                ['text' => 'Canadian wildlife and ecology'],
                ['text' => 'Canada\'s history, symbols, and democratic institutions'],
                ['text' => 'International trade agreements'],
              ],
              'explanation' => 'Canada’s history, symbols, democratic institutions, geography, and the rights and responsibilities of citizenship. (P3)'
            ],
            [
              'text' => 'What oath must Canadian citizens take to pledge allegiance?',
              'answers' => [
                ['text' => 'Pledge of loyalty to the Prime Minister'],
                ['text' => 'Pledge of loyalty to the Canadian flag'],
                ['text' => 'Pledge of allegiance to the Canadian Constitution and its recognition of Indigenous rights'],
                ['text' => 'Pledge of allegiance to the United Nations'],
              ],
              'explanation' => 'Excerpt from Oath: "I will faithfully observe the laws of Canada, including the Constitution which recognizes and affirms the Aboriginal and treaty rights of First Nations, Inuit and Métis peoples" (P2)'
            ],
          ]
        ],
      );

      $simulationTest = SimulationTest::create([
        'name' => 'Exam Simulator',
        'info' => 'Exam Simulator',
      ]);

      try {
        foreach ($simulationTests['questions'] as $questionData) {

          $question = SimulationQuestion::create([
            'test_id' => $simulationTest->id,
            'text' => $questionData['text'],
            'explanation' => $questionData['explanation'],
          ]);

          $answers = collect();
          foreach ($questionData['answers'] as $answerData) {
            $answers->push(SimulationAnswer::create([
              'question_id' => $question->id,
              'text' => $answerData['text'],
            ]));
          }

          // Set one of the answers as the correct answer
          $correctAnswerId = 1; //$answers->firstWhere('text', $questionData['answers'][0]['text']);
          $question->correct_answer_id = $correctAnswerId;
          $question->save();
        }
      } catch (\Throwable $th) {
        throw $th;
      }



      User::factory()->count(1)->create();
    });
  }
}
