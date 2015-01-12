require 'net/http'

class ArticlesController < ApplicationController

  def index
    rss_uri = URI.parse(conf[:rss_url])
    rss_xml = Net::HTTP.get(rss_uri)
    rss_hash = Hash.from_xml(rss_xml)
    feed_items = rss_hash["rss"]["channel"]["item"]

    articles = feed_items.map do |feed_item|
      article_url = conf[:article_url_extract].match(feed_item["link"])[1]
      find_article(article_url)
    end

    articles = articles.select do |article|
      !article["error"]
    end

    render json: {articles: articles}
  end

  def show
    article = find_article(params[:article_url])
    render json: {article: article}
  end

  def find_article(article_url)
    parser_url = conf[:parser_url] % {url: article_url}
    parser_uri = URI.parse(parser_url)
    article_json = Net::HTTP.get(parser_uri)
    article = JSON.parse(article_json)
    article[:article_url] = article_url
    article[:id] = Rack::Utils.escape(article_url)
    Rails.logger.info article.to_yaml
    article
  end

  def conf
    token = "5b5629d14f122b6a00b582078489eaf84780fcc2";
    parser_url = "https://www.readability.com/api/content/v1/parser?url=%{url}&token=#{token}"
    rss_url = "https://www.readability.com/rseero/latest/feed"
    {
      token: token,
      parser_url: parser_url,
      rss_url: rss_url,
      article_url_extract: /http:\/\/www\.readability\.com\/read\?url=(.*)/
    }
  end


end
