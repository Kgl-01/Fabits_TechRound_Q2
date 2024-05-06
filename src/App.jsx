import { useEffect, useRef, useState } from "react"

import * as stylex from "@stylexjs/stylex"
import FabitsLogo from "./assets/fabits_logo.svg"
import NoteStackAdd from "./assets/note_stack_add.svg"
import NotificationBellIcon from "./assets/notification_bell_icon.svg"
import ResizeIcon from "./assets/resize_icon.svg"

import AddBusinessIcon from "./assets/navbar/add_business.svg"
import AdminPanelIcon from "./assets/navbar/admin_panel_settings.svg"
import BubblesIcon from "./assets/navbar/bubble_chart.svg"
import HomeIcon from "./assets/navbar/home_icon.svg"
import InvestmentIcon from "./assets/navbar/real_estate_agent.svg"
import TrackChangesIcon from "./assets/navbar/track_changes_icon.svg"
import TuneIcon from "./assets/navbar/tune_icon.svg"

import EmergencyIcon from "./assets/carousel/emergency_icon.svg"
import RetirementIcon from "./assets/carousel/retirement_icon.svg"
import VacationIcon from "./assets/carousel/vacation_icon.svg"
import WeddingIcon from "./assets/carousel/wedding_icon.svg"

import GoalCard from "./components/GoalCard.component"

import AheadProgressBar from "./assets/progress-bar/ahead-progress-bar.svg"
import BehindProgressBar from "./assets/progress-bar/behind-progress-bar.svg"
import ExcellentProrgessBar from "./assets/progress-bar/excellent-progress-bar.svg"
import OnTrackProgressBar from "./assets/progress-bar/ontrack-progress-bar.svg"
import PoorProgressBar from "./assets/progress-bar/poor-progress-bar.svg"

import HeartBroken from "./assets/heart-icon/heart_broken.svg"
import HeartCheck from "./assets/heart-icon/heart_check.svg"
import HeartCheckExcellent from "./assets/heart-icon/heart_check_excellent.svg"
import HeartMinus from "./assets/heart-icon/heart_minus.svg"

import WarnIcon from "./assets/warn_icon.svg"
import PlanCard from "./components/PlanCard/PlanCard.component"
import SliderContainer from "./components/Slider/Slider.component"
import UserCard from "./components/UserCard/UserCard.component"
import { useSliderContext } from "./context/sliderContext/useSliderConext"
import FilterIcon from "./assets/filter_alt.svg"
import ArrowDropdown from "./assets/arrow_drop_down.svg"
import Search from "./assets/search.svg"
import MobileFilter from "./assets/mobileFilter.svg"
import MenuIcon from "./assets/hamburgerIcon.svg"
import AccountCircleIcon from "./assets/account_circle.svg"
import InfoIcon from "./assets/info.svg"

const bell = stylex.keyframes({
  "0%": {
    transform: "rotate(0deg)",
    transition: "all 100ms",
  },

  "35%": {
    transform: "rotate(45deg)",
    transition: "all 100ms",
  },
  "70%": {
    transform: "rotate(-45deg)",
    transition: "all 100ms",
  },
  "100%:": {
    transform: "rotate(0deg)",
    transition: "all 100ms",
  },
})

const offset = stylex.keyframes({
  from: {
    transform: "translateY(0rem)",
    transition: "all 250ms",
  },
  to: {
    transform: "translateY(-0.25rem)",
    transition: "all 250ms",
  },
})

const sm = "@media (max-width: 476px)"

const md = "@media (max-width: 768px)"

const styles = stylex.create({
  containerSection: {
    width: "100% !important",
    background: "#F4F7FE",
    display: "flex",
    flexDirection: {
      default: "row",
      [sm]: "column",
    },
    gap: { default: "2rem", [sm]: "0rem" },
    minHeight: "100% !important",
    position: {
      default: "relative",
    },
  },
  aside: {
    borderRight: "2px solid #D3DBEC",
    background: { default: "#F4F7FE", [sm]: "#fff" },
    display: "flex",
    padding: "1rem",
    minHeight: "100%",
    position: {
      default: "relative",
      [sm]: stylex.firstThatWorks("sticky", "-webkit-sticky"),
    },
    top: {
      [sm]: 0,
    },
    zIndex: {
      [sm]: "10000",
    },
  },
  mobileDiv: {
    width: "100%",
    display: { default: "none", [sm]: "flex" },
    fontSize: "1.4rem",
    padding: "1rem",
    alignItems: "center",
    fontWeight: "600",
    border: "1px solid rgba(211, 219, 236, 1)",
  },

  tapDiv: {
    display: { default: "none", [sm]: "flex" },
    alignItems: "center",
    justifyContent: "center",
    color: "#575757",
    fontSize: "0.9rem",
    padding: "1rem",
    position: "relative",
    zIndex: "10",

    "::after": {
      content: "",
      width: "100vw",
      height: "100%",
      position: "absolute",
      background: "rgba(244, 247, 254, 1)",
      zIndex: "-1",
      borderTop: "1px solid rgba(211, 219, 236, 1)",
      borderBottom: "1px solid rgba(211, 219, 236, 1)",
    },
  },

  main: {
    width: {
      default: "80%",
      [sm]: "100%",
    },
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    padding: { default: "3rem 0rem", [sm]: "0rem" },
    paddingRight: "0rem",
    gap: "2rem",
    position: {
      [sm]: "relative",
    },
  },

  mainNavbar: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "sticky",
    top: "1rem",
    alignSelf: "flex-start",
  },
  cursor: {
    cursor: "pointer",
  },

  companyLogoContainer: {
    display: "flex",
    gap: "1rem",
  },
  menuIcon: {
    display: {
      default: "none",
      [sm]: "block",
    },
    width: {
      [sm]: "2rem",
    },
  },

  navHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: {
      [sm]: "sticky",
    },
    top: {
      [sm]: 0,
    },
    alignSelf: {
      [sm]: "flex-start",
    },
    width: {
      [sm]: "100%",
    },
  },
  buttonProps: {
    outline: "none",
    border: "none",
    padding: "0rem",
    borderRadius: "50%",
    background: "transparent",
    alignSelf: "flex-start",
    ":active": {
      opacity: "1",
    },
  },
  notificationBell: {
    ":hover": {
      animationName: bell,
      animationDuration: "300ms",
      animationDirection: "linear",
    },
  },
  accountCircle: {
    display: {
      default: "none",
      [sm]: "block",
    },
    width: {
      [sm]: "2rem",
    },
  },
  resizeButton: (width) => ({
    position: "fixed",
    left: `calc(${width}px-20px)`,
    top: "4rem",
    display: {
      [sm]: "none",
    },
  }),
  menuItems: {
    display: {
      default: "flex",
      [sm]: "none",
    },
    flexDirection: {
      default: "column",
    },
    listStyle: "none",
    padding: "0rem",
    fontSize: "0.8rem",
    color: "#6E6E6E",
  },
  menuItem: (isActive) => ({
    display: "flex",
    gap: "1rem",
    paddingLeft: "1rem",
    cursor: "pointer",
    border: isActive && "2px solid #41558D",
    borderRadius: isActive && "0.5rem",
    color: isActive ? "#41558D" : "#000",
    padding: "0.5rem",
    fontSize: "1rem",
  }),
  activeNavItem: {
    display: "none",
    width: "100%",
  },
  flex: {
    display: "flex",
    gap: "1rem",
    flexGrow: "1",
  },

  bodyHeader: {
    width: "100%",
    height: {
      default: "18rem",
      [sm]: "100%",
    },
    border: "2px solid #D3DBEC",
    borderRadius: { default: "2rem", [sm]: 0 },
    background: "#ffffff",
    filter: "drop-shadow(0rem 0.7rem 0.5rem #D3DBEC)",
    display: "flex",
    flexDirection: {
      [sm]: "column",
    },
    gap: "1rem",
    padding: "1rem 0rem 0rem 1rem",
  },
  paragraph: (isSubHeader, isGoalCard) => ({
    padding: "0rem",
    margin: "0rem",
    color: isSubHeader && "#575757",
    fontSize: isGoalCard && "0.7rem",
  }),

  headerQuery: (isExpanded) => ({
    display: {
      default: "flex",
      [sm]: "flex",
    },
    width: { default: isExpanded ? "0%" : "40%", [sm]: "100%", [md]: "50%" },

    visibility: {
      default: isExpanded ? "hidden" : "visible",
      [sm]: "visible",
    },
    transform: {
      default: isExpanded ? "scale(0)" : "scale(1)",
      [sm]: "none",
    },
    transformOrigin: {
      default: isExpanded && "left",
      [sm]: "none",
    },
    opacity: {
      default: isExpanded ? "0" : 1,
      [sm]: 1,
    },
    transition: "transform 2s, opacity 2s, vsisibility 2s",
    flexDirection: "column",
    position: "relative",
    gap: "0.5rem",
    height: { default: "12rem", [sm]: "100%" },
    paddingRight: {
      [sm]: "0.4rem",
    },
  }),
  headerQueryTitle: {
    margin: "0",
    fontWeight: "700",
    fontSize: { default: "1.5rem", [md]: "1.2rem" },
    color: "#2D2D2D",
    lineHeight: "1.6rem",
  },

  noteStackIcon: (isExpanded) => ({
    position: "absolute",
    bottom: "0",
    left: { default: "3rem", [md]: "1.7rem" },
    display: { default: isExpanded ? "none" : "block", [sm]: "none" },
  }),

  carouselContainer: {
    display: "flex",
    height: "100%",
    width: "100%",
    transition: "all 1s ease-out",
  },

  goalsContainer: {
    width: "100%",
    height: "100%",
    border: "2px solid #D3DBEC",
    borderRadius: "2rem",
    background: "#ffffff",
    padding: "2rem",
  },
  goalsContainerHeader: {
    display: "flex",
    flexDirection: { [sm]: "column", [md]: "column" },
    justifyContent: "space-between",
    gap: {
      [sm]: "1rem",
    },
    position: {
      [sm]: stylex.firstThatWorks("-webkit-sticky", "sticky"),
    },
    top: {
      [sm]: "4.5rem",
    },
    zIndex: {
      [sm]: "1000",
    },
    background: {
      [sm]: "#fff",
    },
  },
  filterIconSm: {
    display: {
      default: "none",
      [sm]: "block",
    },
  },
  sectionTitle: {
    fontWeight: "600",
    fontSize: "1.3rem",
  },

  goalCardList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    paddingTop: "1.5rem",
    justifyContent: "flex-start",
  },
  dummy: {
    flex: "1 1 20rem",
    width: "30%",
    alignSelf: "flex-start",
  },
  addtionalProps: {
    display: "flex",
    width: "100%",
    background: "rgba(253, 247, 232, 1)",
    color: "#D99E16",
    fontSize: "0.8rem",
    gap: "1rem",
    padding: "0.5rem 1.2rem",
    borderRadius: "0.5rem",
    marginBottom: "1.5rem",
  },

  baseBtn: {
    width: "100%",
    background: "transparent",
    borderRadius: "0.5rem",
    padding: "0.5rem",
    fontSize: {
      default: "1rem",
    },
    cursor: "pointer",
  },
  boostBtn: {
    border: "2px solid #D3DBEC",
    color: "#41558D",
    background: "#fff",
    filter: {
      default: "drop-shadow(0rem 0.25rem 0.25rem rgba(36, 47, 78, 0.12))",
    },
  },
  excellent: {
    color: "rgba(91, 131, 80, 1)",
  },
  good: {
    color: "#74A766",
  },
  week: {
    color: "#D99E16",
  },
  poor: {
    color: "rgba(232, 93, 93, 1)",
  },
  ahead: {
    color: "rgba(59, 77, 128, 1)",
  },
  toolbarContainer: {
    display: {
      default: "flex",
    },

    justifyContent: "space-between",
    gap: "2.5rem",
    fontSize: "0.85rem",
  },
  filterAndSelect: {
    display: {
      default: "flex",
      [sm]: "none",
    },
    justifyContent: "space-between",
    gap: { default: "2.5rem", [md]: "2rem" },
  },
  progressContainer: {
    display: "flex",
    alignItems: {
      default: "center",
      [md]: "flex-start",
    },
    gap: "0.3rem",
    color: "#727272",
    flexDirection: {
      [md]: "column",
    },
  },
  searchAndFilter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: {
      [sm]: "100%",
    },
  },
  customInput: {
    display: {
      default: "flex",
    },
    border: "2px solid #D3DBEC",
    padding: "0.2rem 0.1rem 0.2rem 0.5rem",
    borderRadius: "0.5rem",
    justifyContent: "space-between",
    gap: "0.5rem",
    ":focus-within": {
      border: "2px solid #A8B1CB",
    },
  },
  inputField: {
    border: "none",
    outline: "none",
    fontSize: "1.1rem",
    "::placeholder": {
      color: "#A8B1CB",
    },
  },
  mobileFilter: {
    display: {
      default: "none",
      [sm]: "block",
    },
  },
})

const financeMenuItems = [
  {
    id: "plan-a-goal",
    label: "Plan a Goal",
    value: "goal",
    iconSource: TrackChangesIcon,
  },
  {
    id: "discover-top-funds",
    label: "Discover Top Funds",
    value: "topFunds",
    iconSource: BubblesIcon,
  },
  {
    id: "my-investments",
    label: "My Investments",
    value: "myInvestments",
    iconSource: InvestmentIcon,
  },
  { id: "ipo", label: "IPO", value: "ipo", iconSource: AddBusinessIcon },
]

const insuranceMenuItems = [
  {
    id: "insurance-1",
    label: "Insurance",
    value: "insurance1",
    iconSource: AdminPanelIcon,
  },
  {
    id: "insurance-2",
    label: "Insurance",
    value: "insurance2",
    iconSource: TuneIcon,
  },
]

const goalItems = [
  {
    header: {
      title: "Dhairyadev & Sayali's",
      plan: "Vacation Plan 1",
      imgSrc: VacationIcon,
    },
    cardBody: {
      rowTitle1: "Goal Progress",
      rowValue1: "11,24,00,000",
      rowTitle2: "Goal Amount",
      rowValue2: "15,00,00,000",
      rowTitle3: "Goal Date",
      rowValue3: "March 2035",
      rowTitle4: "Goal Health",
      rowValue4: "Excellent",
      goalHealthIconSource: HeartCheckExcellent,
    },
    footer: {
      progressSource: ExcellentProrgessBar,
      status: {
        message: "Goal ahead by",
        duration: "16 months",
      },
    },
  },
  {
    header: {
      title: "Dhairyadev & Sayali's",
      plan: "Vacation Plan 1",
      imgSrc: VacationIcon,
    },
    cardBody: {
      rowTitle1: "Goal Progress",
      rowValue1: "2,70,00,000",
      rowTitle2: "Goal Amount",
      rowValue2: "5,00,00,000",
      rowTitle3: "Goal Date",
      rowValue3: "Jan 2040",
      rowTitle4: "Goal Health",
      rowValue4: "Good",
      goalHealthIconSource: HeartCheck,
    },
    footer: {
      progressSource: OnTrackProgressBar,
      status: {
        message: "On track",
      },
    },
  },
  {
    header: {
      title: "Dhairyadev & Sayali's",
      plan: "Vacation Plan 1",
      imgSrc: VacationIcon,
    },
    cardBody: {
      rowTitle1: "Goal Progress",
      rowValue1: "42,00,000",
      rowTitle2: "Goal Amount",
      rowValue2: "1,00,00,000",
      rowTitle3: "Goal Date",
      rowValue3: "March 2035",
      rowTitle4: "Goal Health",
      rowValue4: "Weak",
      goalHealthIconSource: HeartMinus,
    },
    footer: {
      progressSource: BehindProgressBar,
      status: {
        message: "Goal behind by",
        duration: "2 months",
      },
    },
  },
  {
    header: {
      title: "Dhairyadev & Sayali's",
      plan: "Vacation Plan 1",
      imgSrc: VacationIcon,
    },
    cardBody: {
      rowTitle1: "Goal Progress",
      rowValue1: "11,24,00,000",
      rowTitle2: "Goal Amount",
      rowValue2: "15,00,00,000",
      rowTitle3: "Goal Date",
      rowValue3: "March 2035",
      rowTitle4: "Goal Health",
      rowValue4: "Poor",
      goalHealthIconSource: HeartBroken,
    },
    footer: {
      progressSource: PoorProgressBar,
      status: {
        message: "Goal behind by",
        duration: "18 months",
      },
    },
  },
  {
    header: {
      title: "Dhairyadev & Sayali's",
      plan: "Vacation Plan 1",
      imgSrc: VacationIcon,
    },
    cardBody: {
      rowTitle1: "Goal Progress",
      rowValue1: "11,24,00,000",
      rowTitle2: "Goal Amount",
      rowValue2: "15,00,00,000",
      rowTitle3: "Goal Date",
      rowValue3: "March 2035",
      rowTitle4: "Goal Reached",
      rowValue4: "March 2035",
    },
    footer: {
      progressSource: AheadProgressBar,
      status: {
        message: "Goal reached",
        duration: "3 months",
      },
    },
  },
]

const carouselItems = [
  {
    id: 1,
    src: RetirementIcon,
    label: "Retirement",
    description: "Your old age taken care of.",
  },
  {
    id: 2,
    src: EmergencyIcon,
    label: "Emergency",
    description: "Be prepared at all times.",
  },
  {
    id: 3,
    src: WeddingIcon,
    label: "Wedding",
    description: "Plan your dream wedding today.",
  },
  {
    id: 4,
    src: VacationIcon,
    label: "Vacation",
    description: "Never too late for Bahamas!.",
  },
  {
    id: 5,
    src: RetirementIcon,
    label: "Education",
    description: "Build your career, tension-free.",
  },
  {
    id: 6,
    src: RetirementIcon,
    label: "Education",
    description: "Build your career, tension-free.",
  },
  {
    id: 7,
    src: RetirementIcon,
    label: "Education",
    description: "Build your career, tension-free.",
  },
  {
    id: 8,
    src: RetirementIcon,
    label: "Education",
    description: "Build your career, tension-free.",
  },
  {
    id: 9,
    src: RetirementIcon,
    label: "Education",
    description: "Build your career, tension-free.",
  },
  {
    id: 10,
    src: RetirementIcon,
    label: "Education",
    description: "Build your career, tension-free.",
  },
  {
    id: 11,
    src: RetirementIcon,
    label: "Education",
    description: "Build your career, tension-free.",
  },
  {
    id: 12,
    src: RetirementIcon,
    label: "Education",
    description: "Build your career, tension-free.",
  },
  {
    id: 13,
    src: RetirementIcon,
    label: "Education",
    description: "Build your career, tension-free.",
  },
  {
    id: 14,
    src: RetirementIcon,
    label: "Education",
    description: "Build your career, tension-free.",
  },
]

const App = () => {
  const navbarRef = useRef(null)
  const [activeNavItem, setActiveNavItem] = useState(financeMenuItems[0].value)
  const { expandSlider } = useSliderContext()
  const [categoryItems, setCategoryItems] = useState(carouselItems)

  return (
    <div {...stylex.props(styles.containerSection)}>
      <aside {...stylex.props(styles.aside)} ref={navbarRef}>
        <nav {...stylex.props(styles.mainNavbar)}>
          <header {...stylex.props(styles.navHeader)}>
            <div {...stylex.props(styles.companyLogoContainer)}>
              <img src={MenuIcon} {...stylex.props(styles.menuIcon)} />
              <img src={FabitsLogo} {...stylex.props(styles.cursor)} />
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
            >
              <button {...stylex.props(styles.buttonProps)}>
                <img
                  src={NotificationBellIcon}
                  {...stylex.props(styles.cursor, styles.notificationBell)}
                />
              </button>
              <img
                src={AccountCircleIcon}
                {...stylex.props(styles.accountCircle)}
              />
            </div>
          </header>
          <UserCard />
          <ul {...stylex.props(styles.menuItems)}>
            <li
              {...stylex.props(styles.menuItem, styles.cursor)}
              onClick={() => setActiveNavItem("")}
            >
              <img src={HomeIcon} />
              <>Home</>
            </li>

            <ul {...stylex.props(styles.menuItems)}>
              FINANCE
              {financeMenuItems.map((item, index) => (
                <li
                  key={index}
                  {...stylex.props(
                    styles.menuItem(item.value == activeNavItem)
                  )}
                >
                  <img src={item.iconSource} />
                  <label
                    htmlFor={item.id}
                    {...stylex.props(styles.flex, styles.cursor)}
                  >
                    <>{item.label}</>
                    <input
                      type="radio"
                      value={item.value}
                      id={item.id}
                      checked={item.value == activeNavItem}
                      onChange={(e) => {
                        console.log(e.target.value)
                        setActiveNavItem(e.target.value)
                      }}
                      {...stylex.props(styles.activeNavItem)}
                    />
                  </label>
                </li>
              ))}
            </ul>

            <ul {...stylex.props(styles.menuItems)}>
              INSURANCE
              {insuranceMenuItems.map((item, index) => (
                <li
                  key={index}
                  {...stylex.props(
                    styles.menuItem(item.value == activeNavItem)
                  )}
                >
                  <img src={item.iconSource} />
                  <label
                    htmlFor={item.id}
                    {...stylex.props(styles.flex, styles.cursor)}
                  >
                    {item.label}{" "}
                    <input
                      type="radio"
                      value={item.value}
                      id={item.id}
                      checked={item.value == activeNavItem}
                      onChange={(e) => {
                        console.log(e.target.value)
                        setActiveNavItem(e.target.value)
                      }}
                      {...stylex.props(styles.activeNavItem)}
                    />
                  </label>
                </li>
              ))}
            </ul>
          </ul>
        </nav>
        <button {...stylex.props(styles.buttonProps)}>
          <img
            src={ResizeIcon}
            {...stylex.props(
              styles.resizeButton(navbarRef?.current?.clientWidth)
            )}
          />
        </button>
      </aside>

      <div {...stylex.props(styles.mobileDiv)}>{"<"} Plan a goal</div>

      <div {...stylex.props(styles.main)}>
        <header {...stylex.props(styles.bodyHeader)}>
          <div {...stylex.props(styles.headerQuery(expandSlider))}>
            <span {...stylex.props(styles.headerQueryTitle)}>
              What financial goal do you want to plan today?
            </span>
            <p {...stylex.props(styles.paragraph(true))}>
              Select a goal to start planning.
            </p>
          </div>
          <img
            src={NoteStackAdd}
            {...stylex.props(styles.noteStackIcon(expandSlider))}
          />

          <SliderContainer dataLength={categoryItems.length - 1}>
            <SliderContainer.Slider>
              {categoryItems.map((item, idx) => (
                <SliderContainer.Item key={idx}>
                  <PlanCard plan={item} />
                </SliderContainer.Item>
              ))}
            </SliderContainer.Slider>
          </SliderContainer>
        </header>

        <section {...stylex.props(styles.goalsContainer)}>
          <header {...stylex.props(styles.goalsContainerHeader)}>
            <span {...stylex.props(styles.sectionTitle)}>
              Track current goals
            </span>
            <div {...stylex.props(styles.toolbarContainer)}>
              <div {...stylex.props(styles.filterAndSelect)}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  <span style={{ color: "#41558D" }}>Filters </span>{" "}
                  <img src={FilterIcon} />
                </span>

                <span {...stylex.props(styles.progressContainer)}>
                  <>Select :</>{" "}
                  <span style={{ color: "#41558D" }}>
                    Progress (High to Low) <img src={ArrowDropdown} />
                  </span>
                </span>
              </div>

              <div {...stylex.props(styles.searchAndFilter)}>
                <div {...stylex.props(styles.customInput)}>
                  <img src={Search} />
                  <input
                    placeholder="Search"
                    {...stylex.props(styles.inputField)}
                  />
                </div>
                <img
                  src={MobileFilter}
                  {...stylex.props(styles.mobileFilter)}
                />
              </div>
            </div>
          </header>
          <hr style={{ width: "100%" }} />
          <div {...stylex.props(styles.tapDiv)}>
            <span
              style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}
            >
              <img src={InfoIcon} />
              <>Tap on a card to view more information</>
            </span>
          </div>
          <div {...stylex.props(styles.goalCardList)}>
            {goalItems.map((goal, index) => (
              <GoalCard
                goal={goal}
                key={index}
                index={index}
                listLength={goalItems.length}
              >
                <GoalCard.Header />
                <GoalCard.HorizontalLine />
                <GoalCard.Body />
                <GoalCard.HorizontalLine />
                <GoalCard.Footer
                  hasSecondaryText={index == goalItems.length - 1}
                >
                  {goal.cardBody.rowValue4.toLowerCase() == "weak" && (
                    <>
                      <div {...stylex.props(styles.addtionalProps)}>
                        <img src={WarnIcon} />
                        <span>
                          <b>Boost</b> to reach your goal sooner!
                        </span>
                      </div>
                      <button
                        {...stylex.props(styles.baseBtn, styles.boostBtn)}
                      >
                        Boost
                      </button>
                    </>
                  )}
                </GoalCard.Footer>
              </GoalCard>
            ))}
            <div {...stylex.props(styles.dummy)}></div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
