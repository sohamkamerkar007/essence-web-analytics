# Essence

A lightweight vanilla HTML, CSS and JavaScript fragrance storefront for a Web Analytics academic project.

## Pages

Home, shop, product details, cart, checkout, about, and order confirmation.

## Catalog

18 products across Zara (4), Dior (4), BellaVita (3), Tom Ford (4), and Nautica (3). Product bottle images are local files in `assets/images/products`.

## Analytics preparation

`trackEvent(eventName, eventData)` writes analytics-ready events to `window.dataLayer`. Prepared events include `page_view`, `view_item`, `select_item`, `search`, `brand_selected`, `add_to_cart`, `remove_from_cart`, `view_cart`, `begin_checkout`, `add_payment_info`, `buy_now`, and `purchase`.

Each ecommerce item includes `item_id`, `item_name`, `item_brand`, `item_category`, `price`, and `quantity`. Purchase events also include `transaction_id`, `currency`, `value`, and the selected `payment_method`.
