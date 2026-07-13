/* ============================================================
   PUBLICATIONS DATA
   ------------------------------------------------------------
   To add a new publication, copy the template below and paste
   it at the TOP of the `publications` array (newest first).
   Numbering is computed automatically.

   {
     authors: "A. Author, B. Author and X. Rivas",
     title:   "Title of the paper",          // HTML allowed, e.g. <em>k</em>-contact
     ref:     null,                          // null => shown as "Preprint".
                                             // Otherwise an HTML string, e.g.
                                             // "<em>J. Geom. Phys.</em> <strong>191</strong>:104899, 2023."
     arxiv:   "2401.12345",                  // arXiv id, or null
     doi:     "10.1000/xyz123",              // DOI, or null
     pdf:     "papers/29_My_paper.pdf"       // local PDF path, or null
   },

   Fields `title` and `ref` accept HTML (<em>, <strong>, &ndash;).
   ============================================================ */

const publications = [

	{
		authors: "M. de León, X. Gràcia, R. Izquierdo-López, A. Martínez-Muñoz and X. Rivas",
		title: "Poisson and Jacobi structures from 2-covariant tensors",
		ref: null,
		arxiv: "2606.20030",
		doi: null,
		pdf: null
	},

	{
		authors: "J. de Lucas, J. Lange, X. Rivas and C. Sardón",
		title: "Hamilton&ndash;Jacobi theory for non-conservative field theories in the <em>k</em>-contact framework",
		ref: null,
		arxiv: "2604.27670",
		doi: null,
		pdf: null
	},

	{
		authors: "X. Gràcia, A. Martínez-Muñoz and X. Rivas",
		title: "Pairs of differential forms: a framework for precontact geometry",
		ref: null,
		arxiv: "2602.04882",
		doi: null,
		pdf: null
	},

	{
		authors: "X. Gràcia, X. Rivas and D. Torres",
		title: "Time-dependent metrics and connections",
		ref: "<em>Geom. Mech.</em> <strong>3</strong>(2):91&ndash;112, 2026.",
		arxiv: "2601.14064",
		doi: "10.1142/S2972458926400034",
		pdf: "papers/28_Timedependent_metrics_and_connections.pdf"
	},

	{
		authors: "J. de Lucas, X. Rivas and T. Sobczak",
		title: "<em>k</em>-contact Lie systems: theory and applications",
		ref: "<em>Geom. Mech.</em> <strong>3</strong>(2):113&ndash;170, 2026.",
		arxiv: "2511.17734",
		doi: "10.1142/S2972458926400022",
		pdf: "papers/27_k-Contact_Lie_systems.pdf"
	},

	{
		authors: "X. Gràcia, A. Martínez-Muñoz, X. Rivas and N. Román-Roy",
		title: "The evolution operator connecting the Lagrangian and Hamiltonian formalisms for contact systems",
		ref: "<em>Lett. Math. Phys.</em> <strong>116</strong>(67):1&ndash;33, 2026.",
		arxiv: "2511.13401",
		doi: "10.1007/s11005-026-02093-5",
		pdf: "papers/25_Evolution_operator_contact.pdf"
	},

	{
		authors: "X. Rivas, N. Román-Roy and A. Villanova",
		title: "Skinner&ndash;Rusk formalism of action-dependent multicontact field theories",
		ref: "<em>Int. J. Geom. Methods Mod. Phys.</em>",
		arxiv: "2511.01499",
		doi: "10.1142/S0219887826502130",
		pdf: null
	},

	{
		authors: "J. Gaset, X. Rivas and N. Román-Roy",
		title: "A survey on geometric frameworks for action-dependent classical field theories and their relationship",
		ref: "<em>Geom. Mech.</em> <strong>3</strong>(2):171&ndash;220, 2026.",
		arxiv: "2506.11646",
		doi: "10.1142/S2972458926400010",
		pdf: "papers/26_Survey_action_dependent_FT.pdf"
	},

	{
		authors: "M. de León, R. Izquierdo-López and X. Rivas",
		title: "Brackets in multicontact geometry and multisymplectization",
		ref: "<em>Mediterr. J. Math.</em> <strong>23</strong>(8):1&ndash;44, 2026.",
		arxiv: "2505.13224",
		doi: "10.1007/s00009-026-03077-4",
		pdf: "papers/24_Multicontact-brackets.pdf"
	},

	{
		authors: "J. de Lucas, X. Rivas, S. Vilariño and B. M. Zawora",
		title: "Marsden&ndash;Meyer&ndash;Weinstein reduction for <em>k</em>-contact field theories",
		ref: null,
		arxiv: "2505.05462",
		doi: null,
		pdf: null
	},

	{
		authors: "X. Rivas, N. Román-Roy and B. M. Zawora",
		title: "Symmetries and Noether's theorem for action-dependent multicontact field theories",
		ref: "<em>Lett. Math. Phys.</em> <strong>115</strong>(108):1&ndash;32, 2025.",
		arxiv: "2503.03463",
		doi: "10.1007/s11005-025-01995-0",
		pdf: "papers/22_Symmetries Multicontact.pdf"
	},

	{
		authors: "J. de Lucas, X. Rivas and T. Sobczak",
		title: "Foundations on <em>k</em>-contact geometry",
		ref: null,
		arxiv: "2409.11001",
		doi: null,
		pdf: null
	},

	{
		authors: "M. de León, J. Gaset, M. C. Muñoz-Lecanda, X. Rivas and N. Román-Roy",
		title: "Practical Introduction to Action-Dependent Field Theories",
		ref: "<em>Fortschr. Phys.</em> <strong>73</strong>(5):1&ndash;25, 2025.",
		arxiv: "2409.08340",
		doi: "10.1002/prop.70000",
		pdf: "papers/21_Practical-Introduction-Multicontact.pdf"
	},

	{
		authors: "J. de Lucas, J. Lange and X. Rivas",
		title: "A symplectic approach to Schrödinger equations in the infinite-dimensional unbounded setting",
		ref: "<em>AIMS Math.</em> <strong>9</strong>(10):27998&ndash;28043, 2024.",
		arxiv: "2312.09192",
		doi: "10.3934/math.20241359",
		pdf: "papers/19_A symplectic approach to Schrödinger equations in the infinite-dimensional unbounded setting.pdf"
	},

	{
		authors: "L. Colombo, J. de Lucas, X. Rivas and B. M. Zawora",
		title: "An energy-momentum method for ordinary differential equations with an underlying <em>k</em>-polysymplectic manifold",
		ref: "<em>J. Nonlinear Sci.</em> <strong>35</strong>(42):1&ndash;54, 2025.",
		arxiv: "2311.15035",
		doi: "10.1007/s00332-025-10135-w",
		pdf: "papers/20_energy-momentum-k-symplectic.pdf"
	},

	{
		authors: "E. Fernández-Saiz, J. de Lucas, X. Rivas and M. Zając",
		title: "Hamiltonian stochastic Lie systems and applications",
		ref: "<em>J. Phys. A: Math. Theor.</em> <strong>58</strong>(41):415202, 2025.",
		arxiv: "2307.06232",
		doi: "10.1088/1751-8121/ae0bcd",
		pdf: "papers/23_Hamiltonian-stochastic-Lie-systems.pdf"
	},

	{
		authors: "X. Gràcia, J. de Lucas, X. Rivas and N. Román-Roy",
		title: "On Darboux theorems for geometric structures induced by closed forms",
		ref: "<em>Rev. Real Acad. Cienc. Exactas Fis. Nat. - A: Mat.</em> <strong>118</strong>:131, 2024.",
		arxiv: "2306.08556",
		doi: "10.1007/s13398-024-01632-w",
		pdf: "papers/17_RACSAM_Darboux.pdf"
	},

	{
		authors: "X. Rivas, M. Salgado and S. Souto",
		title: "Some contributions to <em>k</em>-contact Lagrangian field equations, symmetries and dissipation laws",
		ref: "<em>Rev. Math. Phys.</em> <strong>36</strong>(8):2450019, 2024.",
		arxiv: "2304.00833",
		doi: "10.1142/S0129055X24500193",
		pdf: "papers/16_RMP_Some contributions.pdf"
	},

	{
		authors: "J. de Lucas, X. Rivas, S. Vilariño and B. M. Zawora",
		title: "On <em>k</em>-polycosymplectic Marsden&ndash;Weinstein reductions",
		ref: "<em>J. Geom. Phys.</em> <strong>191</strong>:104899, 2023.",
		arxiv: "2302.09037",
		doi: "10.1016/j.geomphys.2023.104899",
		pdf: "papers/14_LRVZ_Reduction polyco.pdf"
	},

	{
		authors: "J. Gaset, A. López-Gordón and X. Rivas",
		title: "Symmetries, conservation and dissipation in time-dependent contact systems",
		ref: "<em>Fortschr. Phys.</em> <strong>71</strong>(8-9):2300048, 2023.",
		arxiv: "2212.14848",
		doi: "10.1002/prop.202300048",
		pdf: "papers/13_Symmetries cocontact.pdf"
	},

	{
		authors: "J. Gaset, M. Lainz, A. Mas and X. Rivas",
		title: "The Herglotz variational principle for dissipative field theories",
		ref: "<em>Geom. Mech.</em> <strong>1</strong>(2):153&ndash;178, 2024.",
		arxiv: "2211.17058",
		doi: "10.1142/S2972458924500060",
		pdf: "papers/18_The Herglotz variational principle for dissipative field theories.pdf"
	},

	{
		authors: "X. Rivas",
		title: "Nonautonomous <em>k</em>-contact field theories",
		ref: "<em>J. Math. Phys.</em> <strong>64</strong>(3):033507, 2023.",
		arxiv: "2210.09166",
		doi: "10.1063/5.0131110",
		pdf: "papers/12_k-cocontact.pdf"
	},

	{
		authors: "M. de León, J. Gaset, M. C. Muñoz-Lecanda, X. Rivas and N. Román-Roy",
		title: "Multicontact formulation for non-conservative field theories",
		ref: "<em>J. Phys. A: Math. Theor.</em> <strong>56</strong>(2):025201, 2023.",
		arxiv: "2209.08918",
		doi: "10.1088/1751-8121/acb575",
		pdf: "papers/11_LGMRR-JPA-Multicontact.pdf"
	},

	{
		authors: "M. de León, M. Lainz, A. López-Gordón and X. Rivas",
		title: "Hamilton&ndash;Jacobi theory and integrability for autonomous and non-autonomous contact systems",
		ref: "<em>J. Geom. Phys.</em> <strong>187</strong>:104787, 2023.",
		arxiv: "2208.07436",
		doi: "10.1016/j.geomphys.2023.104787",
		pdf: "papers/10_JGP-HJ-contact-cocontact.pdf"
	},

	{
		authors: "J. de Lucas and X. Rivas",
		title: "Contact Lie systems: theory and applications",
		ref: "<em>J. Phys. A: Math. Theor.</em> <strong>56</strong>(33):335203, 2023.",
		arxiv: "2207.04038",
		doi: "10.1088/1751-8121/ace0e7",
		pdf: "papers/15_JPA-Contact-Lie.pdf"
	},

	{
		authors: "X. Rivas and D. Torres",
		title: "Lagrangian&ndash;Hamiltonian formalism for cocontact systems",
		ref: "<em>J. Geom. Mech.</em> <strong>15</strong>(1):1&ndash;26, 2023.",
		arxiv: "2205.14757",
		doi: "10.3934/jgm.2023001",
		pdf: "papers/9_RT-JGM-Skinner-Rusk.pdf"
	},

	{
		authors: "M. de León, J. Gaset, X. Gràcia, M. C. Muñoz-Lecanda and X. Rivas",
		title: "Time-dependent contact mechanics",
		ref: "<em>Monatsh. Math.</em> <strong>201</strong>:1149&ndash;1183, 2023.",
		arxiv: "2205.09454",
		doi: "10.1007/s00605-022-01767-1",
		pdf: "papers/8_Leon_Gaset_Gracia_Munoz_Rivas_Time-dependent_contact_mechanics_MM_2023_journal.pdf"
	},

	{
		authors: "J. de Lucas, X. Gràcia, X. Rivas, N. Román-Roy and S. Vilariño",
		title: "Reduction and reconstruction of multisymplectic Lie systems",
		ref: "<em>J. Phys. A: Math. Theor.</em> <strong>55</strong>(29):295204, 2022.",
		arxiv: "2202.13748",
		doi: "10.1088/1751-8121/ac78ab",
		pdf: "papers/7_Luc_Gra_Riv_Rom_Vil_Reduction_multisym_Lie_JPA_2022_A4.pdf"
	},

	{
		authors: "X. Gràcia, X. Rivas and N. Román-Roy",
		title: "Skinner&ndash;Rusk formalism for <em>k</em>-contact systems",
		ref: "<em>J. Geom. Phys.</em> <strong>172</strong>:104429, 2022.",
		arxiv: "2109.07257",
		doi: "10.1016/j.geomphys.2021.104429",
		pdf: "papers/6_GRR-JGeomPhys.pdf"
	},

	{
		authors: "M. de León, J. Gaset, M. Lainz-Valcázar, X. Rivas and N. Román-Roy",
		title: "Unified Lagrangian&ndash;Hamiltonian formalism for contact systems",
		ref: "<em>Fortschr. Phys.</em> <strong>68</strong>(8):2000045, 2020.",
		arxiv: "2003.13037",
		doi: "10.1002/prop.202000045",
		pdf: "papers/5_ Unified Lagrangian-Hamiltonian Formalism for Contact Systems.pdf"
	},

	{
		authors: "J. Gaset, X. Gràcia, M. C. Muñoz-Lecanda, X. Rivas and N. Román-Roy",
		title: "A <em>k</em>-contact Lagrangian formulation for nonconservative field theories",
		ref: "<em>Rep. Math. Phys.</em> <strong>87</strong>(3):347&ndash;368, 2021.",
		arxiv: "2002.10458",
		doi: "10.1016/S0034-4877(21)00041-0",
		pdf: "papers/4_GGMRR-RMP-A-contact-lag.pdf"
	},

	{
		authors: "J. Gaset, X. Gràcia, M. C. Muñoz-Lecanda, X. Rivas and N. Román-Roy",
		title: "New contributions to the Hamiltonian and Lagrangian contact formalisms for dissipative mechanical systems and their symmetries",
		ref: "<em>Int. J. Geom. Methods Mod. Phys.</em> <strong>17</strong>(6):2050090, 2020.",
		arxiv: "1907.02947",
		doi: "10.1142/S0219887820500905",
		pdf: "papers/3_GGMRR_New_contributions_contact_IJGMMP_2020.pdf"
	},

	{
		authors: "J. Gaset, X. Gràcia, M. C. Muñoz-Lecanda, X. Rivas and N. Román-Roy",
		title: "A contact geometry framework for field theories with dissipation",
		ref: "<em>Ann. Phys.</em> <strong>414</strong>:168092, 2020.",
		arxiv: "1905.07354",
		doi: "10.1016/j.aop.2020.168092",
		pdf: "papers/2_GGMRR_A_contact_geometry_framework_for_field_theories_AP_2020.pdf"
	},

	{
		authors: "X. Gràcia, X. Rivas and N. Román-Roy",
		title: "Constraint algorithm for singular field theories in the <em>k</em>-cosymplectic framework",
		ref: "<em>J. Geom. Mech.</em> <strong>12</strong>(1):1&ndash;23, 2020.",
		arxiv: "1812.08487",
		doi: "10.3934/jgm.2020002",
		pdf: "papers/1_Constraint algorithm for singular field theories in the k-cosymplectic framework.pdf"
	}

];

/* ============================================================
   COLLABORATORS
   Add as { name: "Name", url: "https://..." } — url optional.
   ============================================================ */

const collaborators = [
	{ name: "Leonardo Colombo", url: "https://sites.google.com/view/leonardojcolombo/home" },
	{ name: "Manuel de León", url: "https://www.icmat.es/mdeleon" },
	{ name: "Javier de Lucas", url: "https://www.fuw.edu.pl/~delucas/" },
	{ name: "Eduardo Fernández-Saiz", url: "https://www.cunef.edu/en/faculty-and-research/fernandez-saiz-eduardo/" },
	{ name: "Jordi Gaset", url: "https://www.cunef.edu/en/gaset-rifa-jordi/" },
	{ name: "Xavier Gràcia", url: "https://web.mat.upc.edu/xavier.gracia/" },
	{ name: "Rubén Izquierdo-López", url: "https://rubenizquierdolopez.github.io/" },
	{ name: "Manuel Lainz", url: "http://mlainz.gitlab.io/" },
	{ name: "Julia Lange", url: null },
	{ name: "Asier López-Gordón", url: "https://alopezgordon.xyz/" },
	{ name: "Ángel Martínez-Muñoz", url: "https://angelmrtnz.github.io/mywebsite/" },
	{ name: "Arnau Mas", url: null },
	{ name: "Miguel C. Muñoz-Lecanda", url: null },
	{ name: "Narciso Román-Roy", url: "https://web.mat.upc.edu/narciso.roman/" },
	{ name: "Modesto Salgado", url: "http://xtsunxet.usc.es/modesto/" },
	{ name: "Cristina Sardón", url: null },
	{ name: "Tomasz Sobczak", url: null },
	{ name: "Silvia Souto", url: null },
	{ name: "Daniel Torres", url: "https://www.unir.net/profesores/daniel-torres-moral/" },
	{ name: "Silvia Vilariño", url: "http://cud.unizar.es/svilariño" },
	{ name: "Anna Villanova", url: "https://www.unir.net/profesores/annamaria-villanova/" },
	{ name: "Marcin Zając", url: null },
	{ name: "Bartosz M. Zawora", url: "https://bmzawora.github.io/" }
];
