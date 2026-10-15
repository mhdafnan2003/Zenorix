import { useState } from "react"
import SectionTitle from "@components/ui/sectionTitle"
import { faqCategories } from "@utils/fackData/faqData"

const Faqs = () => {
    const [activeCategory, setActiveCategory] = useState(faqCategories[0].id)
    const [openId, setOpenId] = useState<string | null>(faqCategories[0].items[0].id)
    const category = faqCategories.find(({ id }) => id === activeCategory) ?? faqCategories[0]

    const selectCategory = (id: string) => {
        setActiveCategory(id)
        const next = faqCategories.find((item) => item.id === id)
        setOpenId(next ? next.items[0].id : null)
    }

    return (
        <section id="faqs" className="any-questions-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <SectionTitle>
                            <SectionTitle.Name>FAQs</SectionTitle.Name>
                            <SectionTitle.Title>Frequently Asked Questions</SectionTitle.Title>
                            <SectionTitle.Description>Unsure about US!</SectionTitle.Description>
                        </SectionTitle>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="book-call-intro text-center">
                            <img src="/images/about/logo1.png" alt="founder" title="founder" />
                            <h2>Questions? We're just one quick call away!</h2>
                            <a href="tel:6282878105" className="theme-btn">
                                Call now <i className="ri-phone-line" />
                            </a>
                            <p>Prefer to email? <a href="mailto:zenorix.group@gmail.com">zenorix.group@gmail.com</a></p>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-6">
                        <div className="zenorix-faq-tabs" role="tablist" aria-label="FAQ categories">
                            {faqCategories.map(({ id, label }) => (
                                <button
                                    key={id}
                                    type="button"
                                    role="tab"
                                    id={`tab-${id}`}
                                    aria-selected={id === activeCategory}
                                    aria-controls={`panel-${id}`}
                                    className={id === activeCategory ? "is-active" : ""}
                                    onClick={() => selectCategory(id)}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                        <div
                            className="accordion accordion-flush"
                            id={`panel-${category.id}`}
                            role="tabpanel"
                            aria-labelledby={`tab-${category.id}`}
                        >
                            {category.items.map(({ ans, id, question }) => {
                                const isOpen = openId === id
                                return (
                                    <div key={id} className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className={`accordion-button${isOpen ? "" : " collapsed"}`}
                                                type="button"
                                                aria-expanded={isOpen}
                                                aria-controls={id}
                                                onClick={() => setOpenId(isOpen ? null : id)}
                                            >
                                                {question}
                                            </button>
                                        </h2>
                                        <div id={id} className={`accordion-collapse collapse${isOpen ? " show" : ""}`}>
                                            <div className="accordion-body">
                                                <p>{ans}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqs
