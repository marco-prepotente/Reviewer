const reviewerData = {
    "gen-math": {
        title: "General Mathematics",
        content: `
            <h3>INCOME AND TAXES</h3>
            <ul>
                <li><strong>Savings:</strong> Money that is set aside for future use.</li>
                <li><strong>Profit:</strong> Income after expense.</li>
                <li><strong>Deduction:</strong> Amount subtracted from income.</li>
                <li><strong>Annual:</strong> Every year or once a year.</li>
                <li><strong>Salary:</strong> Regular payment for work.</li>
                <li><strong>Commission:</strong> Payment based on sales or performances.</li>
                <li><strong>Allowance:</strong> Money intended for specific expenses or purposes.</li>
                <li><strong>Overtime:</strong> Extra work hours beyond regular schedule.</li>
            </ul>
            <p><strong>Gross Income (G.I.):</strong> Total earnings before any deduction. (Formula: G.I. = Salary + Allowances)</p>
            <p><strong>Net Pay (N.P.):</strong> Also called "take-home" pay; the amount left after deductions. (Formula: N.P. = Gross Income - Total Deductions)</p>

            <h3>TAX DEDUCTIONS</h3>
            <p>Based on Taxable Income:</p>
            <ul>
                <li><strong>P0 to P250,000:</strong> 0% tax</li>
                <li><strong>P250,001 to P400,000:</strong> 15% of excess over P250,000</li>
                <li><strong>P400,000 to P800,000:</strong> P22,500 + 20% of excess over P400,000</li>
                <li><strong>P800,001 to P2,000,000:</strong> P102,500 + 25% of excess over P800,000</li>
            </ul>
            <p><strong>Mandatory Deductions:</strong></p>
            <ul>
                <li><strong>SSS:</strong> 5%</li>
                <li><strong>Pag-IBIG:</strong> P200 if your salary is P10,000 and up.</li>
                <li><strong>PhilHealth:</strong> 2.5%</li>
            </ul>

            <h3>BUSINESS MATHEMATICS</h3>
            <p><strong>Percentage Change:</strong> The relation of a change to its original value. A positive result is an increase, negative is a decrease.</p>
            <p><strong>Rate of Inflation:</strong> The general increase in prices of goods and services over time. Formula: Rate = ((New Price - Old Price) / Old Price) * 100</p>
            <p><strong>Mark-ups:</strong> The amount added to the cost price to determine the selling price. Formula: Mark-up = ((Selling Price - Cost Price) / Cost Price) * 100</p>
            <p><strong>Discounts:</strong> The reduction from the original or selling price. Formula: Discount Price = Original Price * (1 - Discount Rate)</p>
            <p><strong>Value Added Tax (VAT):</strong> A tax added to the sale of goods and services. The standard rate in the Philippines is 12% of the selling price.</p>

            <h3>SEQUENCES AND SERIES</h3>
            <p><strong>Sequence:</strong> A list of numbers arranged in order, following a rule. Each number is a term.</p>
            <p><strong>Arithmetic Sequence:</strong> The difference between consecutive terms is constant (common difference, d). Formula: a_n = a_1 + (n-1)d</p>
            <p><strong>Geometric Sequence:</strong> The ratio between consecutive terms is constant (common ratio, r). Formula: a_n = a_1 * r^(n-1)</p>
            <p><strong>Series:</strong> The sum of the terms of a sequence.</p>
            <ul>
                <li>Sum Formula (last term given): S_n = n/2 * (a_1 + a_n)</li>
                <li>Sum Formula (last term not given): S_n = n/2 * [2a_1 + (n-1)d]</li>
            </ul>
            <p><strong>Sigma Notation (Σ):</strong> Used to represent the sum of a sequence or a series.</p>

            <h3>FINANCIAL CONCEPTS</h3>
            <ul>
                <li><strong>Appreciation:</strong> Increase in the value of an asset over time.</li>
                <li><strong>Depreciation:</strong> Decrease in the value of an asset over time.</li>
                <li><strong>Simple Interest:</strong> Interest calculated only on the original principal.</li>
                <li><strong>Compound Interest:</strong> Interest calculated on the principal plus accumulated interest.</li>
                <li><strong>Loan:</strong> Money borrowed that must be repaid, usually with interest.</li>
                <li><strong>Mortgage:</strong> A loan specifically for purchasing property, where the property is collateral.</li>
            </ul>
        `
    },
    "history": {
        title: "History (PKLP)",
        content: `
            <h3>KAMALAYANG PANGKASAYSAYAN</h3>
            <p><strong>Kahulugan:</strong> Kakayahan at pag-uugali na ikonekta ang nakaraan sa kasalukuyan at hinaharap sa makabuluhang paraan. Ito ay tungkol sa kung paano natin nararanasan at ginagamit ang nakaraan upang maunawaan kung sino tayo.</p>
            <p><strong>Kahalagahan:</strong></p>
            <ul>
                <li>Nagsisilbing gabay sa pag-unawa at pagdedesisyon.</li>
                <li>Humuhubog ng pagkakakilanlan at pagkakaisa.</li>
                <li>Nagsusulong ng mapanuring pag-iisip.</li>
            </ul>

            <h3>KASAYSAYAN NG KASAYSAYAN</h3>
            <p>Pag-aaral kung paano umunlad ang disiplina ng kasaysayan.</p>
            <ul>
                <li><strong>Sinaunang Panahon:</strong> Oral tradition (kwento, epiko), unang pagsusulat sa bato.</li>
                <li><strong>Panahon ng Klasiko:</strong> Herodotus (Ama ng Kasaysayan), Thucydides (mas kritikal, empirical evidence).</li>
                <li><strong>Gitnang Panahon:</strong> Naka-angkla sa relihiyon at simbahan.</li>
                <li><strong>Moderno (19th Century):</strong> Leopold von Ranke (Ama ng Modernong Historiograpiya), pokus sa political history.</li>
                <li><strong>Kontemporaryo (20th-21st Century):</strong> Pag-usbong ng Marxist, Post-Colonial, Feminist, Micro, at Oral history.</li>
            </ul>

            <h3>ANG MGA ILAYA AT ILAWOD</h3>
            <p><strong>Ilaya:</strong> Mga komunidad sa kabundukan o mataas na lupa. Kabuhayan ay pagsasaka at paghahayupan. Halimbawa: Igorot, Binukot.</p>
            <p><strong>Ilawod:</strong> Mga komunidad sa mababang lugar, tabi ng ilog o dagat. Kabuhayan ay pangingisda at kalakalan. Halimbawa: Moro, Maranao, Maguindanaon, Tausug, Sama-Bajau.</p>

            <h3>ELEMENTO NG KULTURA</h3>
            <p><strong>Kultura:</strong> Kabuuan ng pag-uugali, tradisyon, sining, wika, at kaugalian na ipinapasa sa mga henerasyon.</p>
            <ul>
                <li><strong>Materyal na Kultura:</strong> Pisikal na bagay (kasangkapan, kasuotan).</li>
                <li><strong>Di-Materyal na Kultura:</strong> Ideya, paniniwala, tradisyon.</li>
            </ul>
            <p><strong>Mga Elemento:</strong> Paniniwala (Beliefs), Pagpapahalaga (Values), Simbolo, Wika, Sining at Panitikan, Relihiyon, Pamantayan (Norms - Folkways, Mores, Taboos, Batas).</p>

            <h3>TRADISYUNAL NA PAGPAPAGALING</h3>
            <ul>
                <li><strong>Baylan:</strong> Espiritwal na lider at manggagamot na gumagamit ng ritwal at halamang gamot.</li>
                <li><strong>Hilot:</strong> Sining ng paggamit ng kamay para maibsan ang pananakit ng katawan.</li>
                <li><strong>Tawas:</strong> Paggamit ng tinunaw na kandila o alum para alamin ang sanhi ng karamdaman.</li>
                <li><strong>Pausok:</strong> Paggamit ng usok mula sa halamang-gamot para sa paglilinis ng katawan.</li>
            </ul>
        `
    },
    "english": {
        title: "English (Effective Communication)",
        content: `
            <h3>EFFECTIVE COMMUNICATION</h3>
            <p>Expressing oneself clearly, understanding others, and actively engaging in the communication process.</p>
            
            <h3>KEY ELEMENTS</h3>
            <ul>
                <li><strong>Clarity:</strong> Message is easily understood.</li>
                <li><strong>Conciseness:</strong> Getting to the point directly.</li>
                <li><strong>Respect:</strong> Treating others with consideration.</li>
                <li><strong>Empathy:</strong> Understanding the feelings of others.</li>
                <li><strong>Adaptability:</strong> Adjusting communication style to different situations.</li>
                <li><strong>Active Listening:</strong> Paying close attention to what others are saying.</li>
                <li><strong>Nonverbal Awareness:</strong> Being mindful of body language.</li>
                <li><strong>Feedback:</strong> Providing and receiving constructive feedback.</li>
            </ul>

            <h3>TONE</h3>
            <p>The author's attitude toward the subject or audience, conveyed through word choice, sentence structure, and style. Tones can be humorous, formal, serious, informal, pessimistic, optimistic, etc.</p>

            <h3>TEXT TYPES (GENRE)</h3>
            <ul>
                <li><strong>Informative/Expository:</strong> News articles, textbooks. (Purpose: to inform)</li>
                <li><strong>Persuasive/Argumentative:</strong> Editorials, ads. (Purpose: to convince)</li>
                <li><strong>Narrative:</strong> Stories, novels. (Purpose: to tell a story)</li>
                <li><strong>Descriptive:</strong> Poems, travelogues. (Purpose: to describe)</li>
                <li><strong>Procedural/Instructional:</strong> Manuals, recipes. (Purpose: to instruct)</li>
            </ul>

            <h3>FORMS OF COMMUNICATION</h3>
            <ul>
                <li><strong>Spoken:</strong> Ideas conveyed through vocal sounds (conversations, presentations).</li>
                <li><strong>Written:</strong> Ideas conveyed through text (emails, reports, essays).</li>
                <li><strong>Multimodal:</strong> Combination of two or more modes, like visual, aural, and text (infographics, presentations, videos).</li>
            </ul>

            <h3>CONVERSATION MANAGEMENT STRATEGIES</h3>
            <ul>
                <li><strong>Politeness Markers:</strong> Words that soften a request or show respect ("please," "I'm sorry," "thank you").</li>
                <li><strong>Turn-Taking:</strong> The process of orderly conversation where participants speak one at a time.</li>
                <li><strong>Back-Channelling:</strong> Signals from the listener (e.g., "uh-huh," nodding) showing they are paying attention.</li>
                <li><strong>Topic Shifting:</strong> Introducing a new topic of conversation.</li>
                <li><strong>Topic Control:</strong> Managing and directing the focus of a conversation.</li>
            </ul>
        `
    },
    "lacs": {
        title: "Life and Career Skills",
        content: `
            <h3>ERIK ERIKSON'S THEORY OF PSYCHOSOCIAL DEVELOPMENT</h3>
            <p>Proposes that individuals progress through 8 stages of development, each with a specific psychosocial conflict. Healthy personality development requires resolving each conflict.</p>
            
            <h3>PHYSIOLOGICAL DEVELOPMENT</h3>
            <p>The physical changes of the body as it grows and matures. This includes physical growth (height, weight), development of body systems, motor skills, and sensory development.</p>

            <h3>PSYCHOSOCIAL DEVELOPMENT</h3>
            <p>The development of a person's personality, social skills, and emotional well-being, influenced by social interactions. Key aspects include emotional
