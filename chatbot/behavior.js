// For this activity, you only need to modify this file. You do not need
// to do anything to the HTML file.

const data = {};

const banList = [];

const checkAndBanTopic = (topic) => {
  const banResponse = "*I don't want to talk about that.";

  if (topic.startsWith("ban ")) {
    topic = topic.slice(4);
    if (!banList.includes(topic)) {
      banList.push(topic);
    }
    return banResponse;
  }

  if (banList.includes(topic)) return banResponse;
};

let userRequestsInformationAboutTopic = (topic = "") => {
  topic = topic.toLowerCase();

  const banResponse = checkAndBanTopic(topic);

  if (banResponse) return banResponse;

  if (data[topic] === undefined) {
    return "I know nothing about " + topic + "!";
  } else {
    return data[topic];
  }
};

let userHasProvidedInformationAboutTopic = (topic, information) => {
  topic = topic.toLowerCase();

  if (information === "no") {
    return true;
  }
  if (data[topic] === undefined) {
    data[topic] = [information];
  } else {
    data[topic].push(information);
  }
  return false;
};
