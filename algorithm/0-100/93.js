
/**
 * 
有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。

输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]

输入：s = "0000"
输出：["0.0.0.0"]

输入：s = "101023"
输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]


 * 
 * 
 * @param {*} s 
 * @returns  {string[]}
 */



const restoreIpAddresses = (s) => { 
    const res = [];
    // 复原从start开始的子串
    const dfs = (subRes,start) => {
        // 片段满4段 且耗尽所有的字符
        if(subRes.length === 4 && start.length == s.length){
            res.push(subRes.join('.')); // 将其拼接成字符串
            return  // 此时指针已经到头
        }
        if(subRes.length == 4 && start < s.length) return;  // 满四段，但是字符并未耗尽

        for(let len = 1;len<=3;len++) {  // 枚举出选择，三种切割长度
            if(start + len -1 >= s.length) return; // 加上要切的长度就越界，不能切这个长度
            if(len !=1 && s[start == '0']) return; // 不能切出 '0x' '0xx'

            const str = s.substring(start,start+len) // 选择当前要切除的片段
            if(len == 3 && +str > 255) return ; // 不能超过255

            subRes.push(str)    // 做出选择，将片段加入subRes
            dfs(subRes,start+len) // 基于当前选择，继续选择，注意更新指针
            subRes.pop();     // 当上面一句的递归分支结束，满足或不满足时 return回来，撤销最后的选择，进入下一轮迭代，考察下一个切割长度
        }
        
    }
    dfs([],0)    // dfs入口
    return res;
}

/**
 * 考虑什么时候回溯，什么时候砍掉不想要的那个分支
 */