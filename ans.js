/* Code by @coldbrewcode
 * Website: medium.com/cold-brew-code
 * Email: russell.ajax@gmail.com
 *
 *
 * Question 1: Identify the categories of trades in a bank's portfolio
 *
 * A bank h as a portfolio of thousands of trades and they need to be categorized.
 * A trade is a commmercial negotiation between a bank and a client.
 * Each trade has a value that indicates the transaction amount in dollars and a text
 * indicating if the client's sector is "Public" or "Private". They implement the following interface:
 *
 * interface ITrade
 * {
 * 	double Value { get; }
 * 	string ClientSector { get; }
 * }
 *
 * Currently, there are three categories:
 * LOWRISK: Trades with value less than 1,000,000 and client from Public sector
 * MEDIUM RISK: Trades with value greater than 1,000,000 and client from Public Sector
 * HIGH RISK: Trades with value greater than 1,000,000 and client from Private Sector
 *
 * Imagine you receive a list of trades and you need to return a list of categories as below:
 * input: List<ITrade> Portfolio
 * Output: List<string> tradeCategories
 *
 * Example:
 * Input:
 * Trade1 {Value = 2000000; ClientSector="Private"}
 * Trade2 {Value = 4000000; ClientSector = "Public"}
 * Trade3 {Value = 5000000; ClientSector = "Public}
 * Trade4 {Value = 3000000; ClientSector = "Public"}
 *
 * Output:
 * tradeCategories = {"HIGHRISK", "LOWRISK", "LOWRISK", "MEDIUMRISK"}
 *
 * Keep in mind that category rules may be added/removed/modified in the future and be highly complex.
 * Please write your answer in pseudo-code showing clearly what classes, interfaces methods, and design patterns
 * you would create/use to solve this problem. Also, object oriented programming is appreciated.
 */

//what you need to do is simple: loop through the Input array to get each Trade. Afterwards, use the dot notation
//to retrieve the individual property of a Trade. What we need is .Value and .ClientSector, so use these dot notation
//and compare with what is asked.

module.exports = {
 answer: function(input){
	let tradeCategories = []; //Create answer array
	//Loop through input
	for(let i = 0; i < input.length; i++){
			if(input[i].Value < 1000000 && input[i].ClientSector === "Public"){
				tradeCategories.push("LOWRISK");
				console.log("One");
			}else if(input[i].Value > 1000000 && input[i].ClientSector === "Public"){
				tradeCategories.push("MEDIUMRISK");
			}else if(input[i].Value > 1000000 && input[i].ClientSector === "Private"){
				tradeCategories.push("HIGHRISK");
			}else{
				continue; //For cases not mentioned
			}
	}

	return tradeCategories
}
}
	


