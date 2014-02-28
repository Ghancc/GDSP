#! /usr/bin/perl -w

# Comic Scrapper
# Gavin Davis - Web Programming Homework

use strict;
use CGI;
use WWW::Mechanize;
use HTML::TokeParser;

# Get to the website and put the text into $stream
my $websiteLookUp = WWW::Mechanize->new();
$websiteLookUp->("https://www.arcamax.com/thefunnies/nonsequitur/");
my $stream = HTML::TokeParser->new(\$agent->{content});

# Find the section with the class name "comic-wrapper"
# inside the section witht he class name "featured-comic"
my $tag = $stream->get_tag("section");

while($tag->[1]{class} and $tag->[1]{section} ne 'comic-wrapper')
{
	$tag = $stream->get_tag("section");
}

# Get title and other text about the comic
my $comic_title = $stream ->get_trimmed_text("/section");

# Now get the cartoon
my $toon = $stream->get_tag("img");
my $source = $toon->[1]{'src'};
my $title = $toon->[1]{'title'};
my $alt = $toon->[1]{'alt'};

# Perfect. Now print the HTML output....
my $cgi = new CGI;

print $cgi->header(-type=>'text/html'),
      $cgi->start_html('Non Sequitur Screen Scrape');
print $cgi->h1("$comic_title"), "\n";
print $cgi->p($alt), "\n";
print $cgi->img({src=>$source, alt=>$alt}), "\n\n";
print $cgi->p('<i>(' . $title . ')</i>');
print $cgi->end_html;
