import React from 'react';
import '../styles/pricingplans.css';

const plans = [
  {
    name: 'Plan A',
    price: '$1000',
    note: '/month',
    billing: 'Billed Annually',
    description: 'Unlimited access to all features.',
    features: [
      'It will provide 500M Input and 200M Output Tokens per month',
      'It will provide 6B Input and 2.4B Output Tokens per year',
      'You can Create and Train your own LLM',
      'Retrieving data from LLM',
      'Generate API keys for third-party access.',
    ],
  },
  {
    name: 'Plan B',
    price: '$4,950',
    note: '/month',
    billing: 'Billed Annually',
    description: 'Unlimited access to all features.',
    features: [
      'It will provide 2.5B Input and 1B Output Tokens per month',
      'It will provide 30B Input and 12B Output Tokens per year',
      'You can Create and Train your own LLM',
      'Retrieving data from LLM',
      'Generate API keys for third-party access.',
    ],
  },
  {
    name: 'Premium',
    price: 'Contact Us for the Best Pricing',
    billing: '',
    description: 'Unlimited access to all features.',
    features: [
      'It will provide Input and Output Tokens Custom Price',
      'You can Create and Train your own LLM',
      'Retrieving data from LLM',
      'Generate API keys for third-party access.',
    ],
  },
];

const PricingPlans = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <button className="pricing-tag">Pricing</button>
        <h2>Plans That Fit Your Needs</h2>
        <p>
          AI Squad offers a range of pricing plans tailored to different enterprise needs. For more information on custom
          pricing and deployment options, enterprises are encouraged to contact AI Squad AI directly.
        </p>
      </div>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div className="plan-card" key={index}>
            <div className="plan-header">
              <button className="plan-name">{plan.name}</button>
              <h3 className="plan-price">{plan.price} <span>{plan.note}</span></h3>
              <p className="plan-billing">{plan.billing}</p>
              <p className="plan-description">{plan.description}</p>
              <button className="plan-button">Get Started</button>
            </div>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
