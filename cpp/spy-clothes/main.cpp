#include <iostream>
#include <map>
#include <string>
#include <vector>

using namespace std;

bool solution(vector<vector<string>> clothes) {
  map<string, vector<string>> categories;
  for (int i = 0; i < clothes.size(); i++) {
    vector<string> it = categories[clothes[i].at(1)];
    it.push_back(clothes[i].at(0));
    categories[clothes[i].at(1)] = it;
  }

  for (auto it = categories.begin(); it != categories.end(); it++) {
    std::cout << (*it).first << ":" << (*it).second.size() << std::endl;
  }
  return 0;
}

int main() {

  vector<vector<string>> sample{{"yellowhat", "headgear"},
                                {"bluesunglasses", "eyewear"},
                                {"green_turban", "headgear"}};
  // vector<vector<string>> sample{{"yellowhat", "headgear"},
  //                               {"bluesunglasses", "eyewear"},
  //                               {"green_turban", "headgear"},
  //                               {"crowmask", "face"},
  //                               {"bluesunglasses", "face"}};
  bool result = solution(sample);
  // std::cout << "result : " << result << std::endl;
  return 0;
}