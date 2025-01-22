<!doctype html>
<html class="no-js" lang="{{ request.locale.iso_code }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no">
  <meta name="theme-color" content="{{ settings.color_primary }}">
  <meta name="format-detection" content="telephone=no">
  <link rel="canonical" href="{{ canonical_url }}">
  <link rel="preconnect" href="//fonts.shopifycdn.com/" crossorigin>
  <link rel="preconnect" href="//cdn.shopify.com/" crossorigin> 
  <link rel="dns-prefetch" href="//{{shop.domain}}" crossorigin>
  <link rel="dns-prefetch" href="//{{shop.permanent_domain}}" crossorigin>
  <link rel="dns-prefetch" href="//cdn.shopify.com" crossorigin>
  <link rel="dns-prefetch" href="//fonts.shopifycdn.com" crossorigin>
  <link rel="dns-prefetch" href="//fonts.googleapis.com" crossorigin>
  <link rel="preload" as="style" href="{{ 'pre_theme.min.css' | asset_url }}">
  <link rel="preload" as="style" href="{{ 'theme.scss.css' | asset_url }}">
  {%- capture seo_title -%}
    {%- if template == 'search' and search.performed == true -%}{{ 'general.search.heading' | t: count: search.results_count }}: {{ 'general.search.results_with_count' | t: terms: search.terms, count: search.results_count }}{%- elsif template == 'search.wish' %}{{ 'general.meta.wishlist' | t }}{%- else -%}{{ page_title }}{%- endif -%}
    {%- if current_tags -%}{%- assign meta_tags = current_tags | join: ', ' %} &ndash; {{ 'general.meta.tags' | t: tags: meta_tags -}}{%- endif -%}
    {%- if current_page != 1 %} &ndash; {{ 'general.meta.page' | t: page: current_page }}{%- endif -%}
    {%- assign escaped_page_title = page_title | escape -%}
    {%- unless escaped_page_title contains shop.name %} &ndash; {{ shop.name }}{%- endunless -%}
  {%- endcapture -%}
  <title>{{ seo_title | strip }}</title>
  {%- if page_description %}<meta name="description" content="{{ page_description | escape }}">
  {%- elsif collection.current_type or collection.current_vendor %}<meta name="description" content="{{ shop.description | default: shop.name | escape }}">{% endif -%}
  {%- if settings.favicon != blank %}<link rel="shortcut icon" type="image/png" href="{{ settings.favicon | img_url: '32x' }}">{% endif -%}
  {%- if settings.favicon_apple != blank %}<link rel="apple-touch-icon-precomposed" type="image/png" sizes="152x152" href="{{ settings.favicon_apple | img_url: '152x' }}">{% endif -%}
  {%- liquid 
    assign t_name = request.page_type
    assign body_img = settings.body_bg_image
    render 'social-meta-tags',t_name:t_name
    render 'head_assets',t_name:t_name
    capture class_body_theme 
      render 'class_body_theme',t_name:t_name, body_img:body_img 
    endcapture -%}

    {{ content_for_header }}
 
{% include 'pagefly-header' %}
 {% include 'hulkcode_common' %}{% if template contains 'product' or template contains 'cart' %}<script src='https://volumediscount.hulkapps.com/api/v2/frontend/hulkcode.js' defer='defer'></script>{% endif %}  {% include 'judgeme_core' %}
</head> 
<body {{class_body_theme | strip_newlines-}}>
{% capture the_snippet_content %}{% render 'socialshopwave-helper' %}{% endcapture %}
            {% unless the_snippet_content contains 'Liquid error' %}
              {{ the_snippet_content }}
            {% endunless %}
  {%- render 'lazypreload' -%}
  <div id="nt_wrapper">
    {%- render 'header',t_name:t_name -%}
    <div id="nt_content">{{ content_for_layout }}</div>
    <footer id="nt_footer" class="bgbl footer-1">{%- section 'footer_top' -%}{%- section 'footer_bot' -%}</footer>
  </div>
  {%- render 'div_html',t_name:t_name -%}

<!-- spurit_stp-added -->
{% render 'spurit_stp-theme-snippet' %}
<!-- /spurit_stp-added -->

 {% include 'smile-initializer' %}
 

</body>
</html>
