const tabList = document.querySelector('[role="tablist"]');

const firstTab = tabList.firstElementChild;
const lastTab = tabList.lastElementChild;

tabList.addEventListener("keydown", changeTabFocus);

for (const tab of tabList.children) {
  tab.addEventListener("click", changeTabPanel);
}

function changeTabPanel(event) {
  const currentTab = tabList.querySelector('[aria-selected="true"]');
  const currentPanelId = currentTab.getAttribute("aria-controls");
  const nextPanelId = event.target.getAttribute("aria-controls");
  changePanelInfo(currentPanelId, nextPanelId);

  const currentImageId = currentTab.dataset.image;
  const nextImageId = event.target.dataset.image;
  changeImage(currentImageId, nextImageId);

  setAriaSelected(currentTab, "false");
  changeTabIndex(currentTab, "-1");
  setAriaSelected(event.target, "true");
  changeTabIndex(event.target, "0");
}

function changeTabFocus(event) {
  const keydownLeft = 37;
  const keydownRight = 39;

  if (event.keyCode === keydownLeft || event.keyCode === keydownRight) {
    event.target.setAttribute("tabindex", "-1");

    if (event.keyCode === keydownLeft) {
      if (event.target === firstTab) {
        lastTab.setAttribute("tabindex", "0");
        lastTab.focus();
      } else {
        event.target.previousElementSibling.setAttribute("tabindex", "0");
        event.target.previousElementSibling.focus();
      }
    } else if (event.keyCode === keydownRight) {
      if (event.target === lastTab) {
        firstTab.setAttribute("tabindex", "0");
        firstTab.focus();
      } else {
        event.target.nextElementSibling.setAttribute("tabindex", "0");
        event.target.nextElementSibling.focus();
      }
    }
  }
}

function changeTabIndex(tab, value) {
  tab.setAttribute("tabindex", value);
}
function setAriaSelected(tab, value) {
  tab.setAttribute("aria-selected", value);
}
function changeImage(currentImageId, nextImageId) {
  const currentImage = document.getElementById(currentImageId);
  const NextImage = document.getElementById(nextImageId);
  hideContent(currentImage);
  showContent(NextImage);
}
function changePanelInfo(currentPanelId, nextPanelId) {
  const currentPanel = document.getElementById(currentPanelId);
  const nextPanel = document.getElementById(nextPanelId);
  hideContent(currentPanel);
  showContent(nextPanel);
}
function hideContent(content) {
  content.setAttribute("hidden", "true");
}
function showContent(content) {
  content.removeAttribute("hidden");
}
