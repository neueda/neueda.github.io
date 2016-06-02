source 'https://rubygems.org'

# This will ensure that when you run bundle install,
# you have the correct version of the github-pages gem.
require 'json'
require 'open-uri'
v = JSON.parse(open('https://pages.github.com/versions.json').read)

# Main gem, contains jekyll
gem 'github-pages', v['github-pages']
# Possibility to add {% seo %} tag, which will output various social & search stuff
gem 'jekyll-seo-tag', v['jekyll-seo-tag']
# Atom feed
gem 'jekyll-feed', v['jekyll-feed']
# Blog pagination
gem 'jekyll-paginate', v['jekyll-panigate']
# Redirect from old location to new one, if pages are moved.
#gem 'jekyll-redirect-from', v['jekyll-redirect-from']

